import { client } from "@/app/client";
import { NFT, prepareContractCall } from "thirdweb";
import { MediaRenderer, TransactionButton } from "thirdweb/react";
import { useState } from "react";
import { approve } from "thirdweb/extensions/erc721";

type OwnedNFTsProps = {
    nft: NFT;
    nftContract: any;
    stakingContract: any;
    refetchOwnedNFTs: () => void;
    refetchStakedInfo: () => void;
};

export const NFTCard = ({ nft, nftContract, stakingContract, refetchOwnedNFTs, refetchStakedInfo }: OwnedNFTsProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);

    const handleStake = async () => {
        try {
            const transaction = await prepareContractCall({
                contract: stakingContract,
                method: "stake",
                params: [[nft.id]],
            });
            return transaction;
        } catch (error) {
            console.error("Error preparing contract call for stake method:", error);
            throw error;
        }
    };

    return (
        <div className="m-2.5 p-4 border rounded-lg shadow-md">
            <MediaRenderer
                client={client}
                src={nft.metadata.image}
                className="rounded-lg mb-2.5 h-50 w-50"
            />
            <p className="mx-2.5 mb-2.5 font-semibold">{nft.metadata.name}</p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="border-none bg-blue-600 text-white p-3 rounded-lg cursor-pointer w-full text-sm hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Quiero Puntos
            </button>
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-gray-900 p-5 rounded-lg flex flex-col items-center w-11/12 max-w-lg relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
                        >
                            Cerrar
                        </button>
                        <h3 className="my-2.5 text-white text-lg">Estás a punto de ganar puntos:</h3>
                        <MediaRenderer
                            client={client}
                            src={nft.metadata.image}
                            className="rounded-lg mb-2.5"
                        />
                        {!isApproved ? (
                            <TransactionButton
                                transaction={() => (
                                    approve({
                                        contract: nftContract,
                                        to: stakingContract.address,
                                        tokenId: nft.id
                                    })
                                )}
                                className="w-full bg-blue-600 text-white p-2.5 rounded-lg cursor-pointer transition-colors hover:bg-blue-500 mt-4"
                                onTransactionConfirmed={() => setIsApproved(true)}
                            >
                                Aprobar
                            </TransactionButton>
                        ) : (
                            <TransactionButton
                                transaction={handleStake}
                                onTransactionConfirmed={() => {
                                    alert("Staked!");
                                    setIsModalOpen(false);
                                    refetchOwnedNFTs();
                                    refetchStakedInfo();
                                }}
                                className="w-full bg-green-600 text-white p-2.5 rounded-lg cursor-pointer transition-colors hover:bg-green-500 mt-4"
                            >
                                Reclamar Puntos
                            </TransactionButton>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
