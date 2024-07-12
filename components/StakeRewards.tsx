import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { prepareContractCall, toEther } from "thirdweb";
import { useEffect } from "react";
import { balanceOf } from "thirdweb/extensions/erc721";

type StakeRewardsProps = {
    rewardTokenContract: any;
    stakingContract: any;
};

export const StakeRewards: React.FC<StakeRewardsProps> = ({ rewardTokenContract, stakingContract }) => {
    const account = useActiveAccount();

    const {
        data: tokenBalance,
        isLoading: isTokenBalanceLoading,
        refetch: refetchTokenBalance,
    } = useReadContract(
        balanceOf,
        {
            contract: rewardTokenContract,
            owner: account?.address || "",
        }
    );

    const {
        data: stakedInfo,
        refetch: refetchStakedInfo,
        //@ts-ignore
    } = useReadContract({
        
        contract: stakingContract,
        method: "getStakeInfo",
        params: [account?.address || ""],
    });

    useEffect(() => {
        refetchStakedInfo();
        const interval = setInterval(() => {
            refetchStakedInfo();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full my-5 flex flex-col items-center bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-md">
            {!isTokenBalanceLoading && (
                <p className="mb-4 text-gray-200 font-semibold">Balance en Mi Billetera: {toEther(BigInt(tokenBalance!.toString()))}</p>
            )}
            {/* @ts-ignore */}
            <h2 className="mb-5 text-gray-200 font-semibold">
                {/* @ts-ignore */}
                Puntos por reclamar: {stakedInfo && stakedInfo[1] !== undefined ? toEther(BigInt(stakedInfo[1].toString())) : '0'}
            </h2>

            <TransactionButton
                transaction={() => (
                    prepareContractCall({
                        contract: stakingContract,
                        method: "claimRewards",
                    })
                )}
                onTransactionConfirmed={() => {
                    alert("Rewards claimed!");
                    refetchStakedInfo();
                    refetchTokenBalance();
                }}
                className="border-none bg-blue-600 text-white p-3 rounded-lg cursor-pointer w-full text-sm hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Reclamar Puntos
            </TransactionButton>
        </div>
    );
};
