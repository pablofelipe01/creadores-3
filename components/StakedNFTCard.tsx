import { MediaRenderer, TransactionButton, useReadContract } from "thirdweb/react";
import { getNFT } from "thirdweb/extensions/erc721";
import { client } from "@/app/client";
import { prepareContractCall } from "thirdweb";

type StakedNFTCardProps = {
    tokenId: bigint;
    nftContract: any;
    stakingContract: any;
    refetchStakedInfo: () => void;
    refetchOwnedNFTs: () => void;
};

export const StakedNFTCard: React.FC<StakedNFTCardProps> = ({ tokenId, nftContract, stakingContract, refetchStakedInfo, refetchOwnedNFTs }) => {
    const { data: nft } = useReadContract(
        getNFT,
        {
            contract: nftContract,
            tokenId: tokenId,
        }
    );
    
    return (
        <div className="m-2.5 p-4 border rounded-lg shadow-md">
            <MediaRenderer
                client={client}
                src={nft?.metadata.image}
                className="rounded-lg mb-2.5 h-50 w-50"
            />
            <p className="mx-2.5 mb-2.5 font-semibold">{nft?.metadata.name}</p>
          
            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: stakingContract,
                        method: "withdraw",
                        params: [[tokenId]]
                    })
                )}
                onTransactionConfirmed={() => {
                    refetchOwnedNFTs();
                    refetchStakedInfo();
                    alert("Withdrawn!");
                }}
                className="border-none bg-blue-600 text-white p-3 rounded-lg cursor-pointer w-full text-sm hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Quiero Contenido Exclusivo
            </TransactionButton>
        </div>
    );
};
