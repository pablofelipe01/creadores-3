'use client';

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { useActiveAccount, useReadContract, TransactionButton } from "thirdweb/react";
import { NFT } from "thirdweb";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { getNFTs, ownerOf, totalSupply, claimTo } from "thirdweb/extensions/erc721";
import dynamic from 'next/dynamic';
import { getContract } from "thirdweb";
import { stakingABI } from "../utils/stakingABI";
import { StakingData, stakingData } from "../utils/data";

const NFTCard = dynamic(() => import("./NFTCard").then(mod => mod.NFTCard));
const StakedNFTCard = dynamic(() => import("./StakedNFTCard").then(mod => mod.StakedNFTCard));
const StakeRewards = dynamic(() => import("./StakeRewards").then(mod => mod.StakeRewards));

type StakingProps = {
  data: StakingData;
};

const Staking = ({ data }: StakingProps) => {
  const account = useActiveAccount();
  const [ownedNFS, setOwnedNFS] = useState<NFT[]>([]);
  const [fullView, setFullView] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);

  const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: data.nftContractAddress
  });

  const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: data.rewardTokenContractAddress
  });

  const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: data.stakingContractAddress,
    abi: stakingABI
  });

  const getOwnedNFS = async () => {
    let ownedNFS: NFT[] = [];

    const totalNFSSupply = await totalSupply({
      contract: NFT_CONTRACT,
    });
    const nfs = await getNFTs({
      contract: NFT_CONTRACT,
      start: 0,
      count: parseInt(totalNFSSupply.toString()),
    });

    for (let nfsItem of nfs) {
      const owner = await ownerOf({
        contract: NFT_CONTRACT,
        tokenId: nfsItem.id,
      });
      if (owner === account?.address) {
        ownedNFS.push(nfsItem);
      }
    }
    setOwnedNFS(ownedNFS);
  };

  useEffect(() => {
    if (account) {
      getOwnedNFS();
    }
  }, [account]);

  const {
    data: stakedInfo,
    refetch: refetchStakedInfo,
  } = useReadContract({
    contract: STAKING_CONTRACT,
    method: "getStakeInfo",
    params: [account?.address || ""],
  });

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  const formatFollowers = (followers: number) => {
    if (followers >= 1000000) {
      return (followers / 1000000).toFixed(1).replace('.', ',') + ' Mill';
    }
    if (followers >= 1000) {
      return (followers / 1000).toFixed(1).replace('.', ',') + ' K';
    }
    return followers.toString();
  };

  const handleBuyClick = () => {
    // No need to set iframe for buying NFT directly using TransactionButton
  };

  const handleSellClick = () => {
    setShowSellModal(true);
  };

  const renderSmallView = () => (
    <div className="relative flex flex-col items-center rounded-lg w-10/12 max-w-xs p-4 mx-auto text-white border border-blue-300 border-opacity-50">
      <div className="flex flex-row items-center justify-between my-3 w-full">
        <div className="flex items-center">
          <img 
            src={data.imgUrl} 
            alt="Creator" 
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
        </div>
        <div className="flex space-x-2">
          <TransactionButton
            transaction={() => (
              claimTo({
                contract: NFT_CONTRACT,
                to: account?.address || "",
                quantity: BigInt(1)
              })
            )}
            onTransactionConfirmed={() => {
              alert("NFT bought!");
              getOwnedNFS();
            }}
            className="text-xs bg-green-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-green-500"
          >
            BUY
          </TransactionButton>
          <button
            onClick={handleSellClick}
            className="text-xs bg-red-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
          >
            SELL
          </button>
        </div>
      </div>
      <h2 className="text-lg font-bold">{data.creatorName}</h2>
      <p className="text-center text-sm mb-3">{data.description}</p>
      <a 
        href={data.pdfUrl} 
        download 
        className="text-xs bg-blue-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-500 mt-3"
      >
        Download Financial report
      </a>
      <br />
      <hr className="w-full border-gray-800"/>
      <div className="text-center text-sm mb-3">
        <h3 className="text-md font-semibold">Symbol: {data.tokenSymbol}</h3>
        <p>Price: {data.tokenPrice}</p>
        <img src={data.liquidityImgUrl} alt="Liquidity" className="inline-block h-5 w-5 ml-2"/>
        <p>10% of profit goes to liquidity</p>
        <img src={data.infoImgUrl} alt="Info" className="mt-2"/>
      </div>
      <button
        onClick={() => setFullView(true)}
        className="text-xs bg-blue-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-500 mt-3"
      >
        Full Information
      </button>
    </div>
  );

  const renderFullView = () => (
    <div className="relative flex flex-col items-center rounded-lg w-10/12 max-w-5xl p-4 mx-auto text-white border border-blue-300 border-opacity-50">
      <div className="flex flex-row items-center justify-between my-3 w-full">
        <div className="flex items-center">
          <img 
            src={data.imgUrl} 
            alt="Creator" 
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
        </div>
        <div className="flex space-x-2">
          <TransactionButton
            transaction={() => (
              claimTo({
                contract: NFT_CONTRACT,
                to: account?.address || "",
                quantity: BigInt(1)
              })
            )}
            onTransactionConfirmed={() => {
              alert("NFT bought!");
              getOwnedNFS();
            }}
            className="text-xs bg-green-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-green-500"
          >
            BUY
          </TransactionButton>
          <button
            onClick={handleSellClick}
            className="text-xs bg-red-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
          >
            SELL
          </button>
        </div>
      </div>
      <h2 className="text-lg font-bold">{data.creatorName}</h2>
      <p className="text-center text-sm mb-3">{data.description}</p>
     
      <hr className="w-full border-gray-800"/>
     
      <hr className="w-full border-gray-800"/>
        <br />
      <div className="bg-white bg-opacity-10 p-3 rounded-lg shadow-lg mb-3 w-full">
        <h3 className="text-md font-semibold mb-1">Impact in Social Media</h3>
        <div className="flex flex-col space-y-2 text-sm">
        {/* @ts-ignore */}
          {data.socialMedia.map((social, index) => (
            <button key={index} onClick={() => handleSocialClick(social.url)} className="flex items-center space-x-1">
              {social.platform === "Instagram" && <FaInstagram className="w-5 h-5" />}
              {social.platform === "X" && <FaTwitter className="w-5 h-5" />}
              {social.platform === "TikTok" && <FaTiktok className="w-5 h-5" />}
              <span>{social.platform} - {formatFollowers(social.followers)} followers</span>
            </button>
          ))}
        </div>
      </div>
      <hr className="w-full border-gray-800"/>
      <div className="my-3 w-full text-sm">
        <h2 className="text-md font-semibold mb-2">Owned NFS</h2>
        <button
          onClick={() => window.open(data.exclusiveContentLink, "_blank")}
          className="text-xs bg-blue-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-500 mt-3"
        >
          Exclusive Content
        </button>
        <div className="flex flex-row flex-wrap justify-center w-full">
          {ownedNFS && ownedNFS.length > 0 ? (
            ownedNFS.map((nfsItem) => (
              <NFTCard
                key={nfsItem.id}
                nft={nfsItem}
                nftContract={NFT_CONTRACT}
                stakingContract={STAKING_CONTRACT}
                refetchOwnedNFTs={getOwnedNFS}
                refetchStakedInfo={refetchStakedInfo}
              />
            ))
          ) : (
            <p>You own 0 NFS</p>
          )}
        </div>
      </div>
      <hr className="w-full border-gray-800"/>
      <div className="my-3 w-full text-sm">
        <h2 className="text-md font-semibold mb-2">Allocated NFS</h2>
        <div className="flex flex-row flex-wrap justify-center w-full">
          {stakedInfo && stakedInfo[0].length > 0 ? (
            stakedInfo[0].map((nfsItem: any, index: number) => (
              <StakedNFTCard
                key={index}
                tokenId={nfsItem}
                nftContract={NFT_CONTRACT}
                stakingContract={STAKING_CONTRACT}
                refetchStakedInfo={refetchStakedInfo}
                refetchOwnedNFTs={getOwnedNFS}
              />
            ))
          ) : (
            <p>No NFS allocated</p>
          )}
        </div>
      </div>
      <hr className="w-full border-gray-800"/>
      <StakeRewards rewardTokenContract={REWARD_TOKEN_CONTRACT} stakingContract={STAKING_CONTRACT} />
      {showSellModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white rounded-lg w-11/12 max-w-5xl p-6">
            <button
              onClick={() => setShowSellModal(false)}
              className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
            >
              Close
            </button>
            <iframe
              title="sell-content"
              src={data.sellLink}
              style={{ border: "none", width: "100%", height: "80vh" }}
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      )}
      <button
        onClick={() => setFullView(false)}
        className="text-xs bg-blue-600 text-white py-1 px-3 rounded-lg cursor-pointer transition-colors hover:bg-blue-500 mt-3"
      >
        Close Full Information
      </button>
    </div>
  );

  if (account) {
    return fullView ? renderFullView() : renderSmallView();
  }

  return null;
};

export default Staking;
