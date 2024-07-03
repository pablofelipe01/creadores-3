export type StakingData = {
  creatorName: string;
  description: string;
  imgUrl: string;
  tokenSymbol: string;
  roi: string;
  tokenPrice: string;
  liquidityImgUrl: string; // Changed from string to URL for the image
  nftContractAddress: string;
  rewardTokenContractAddress: string;
  stakingContractAddress: string;
  buyLink: string;
  sellLink: string;
  socialMedia: { platform: string; url: string; followers: number }[];
  gradient: string; // Add a new field for the gradient color
  infoImgUrl: string; // New field for the additional image
  exclusiveContentLink: string; // New field for exclusive content link
  pdfUrl: string; // New field for the PDF URL
};

export const stakingData: StakingData[] = [
  // @ts-ignore
  {
    creatorName: "Gordito Fitt",
    description: "Como Baje 40 kilos de gordo a fit",
    imgUrl: "/images/fit.png",
    tokenSymbol: "GF",
    tokenPrice: "1 MATIC",
    liquidityImgUrl: "/images/matic.png", // Image URL for liquidity
    nftContractAddress: "0xc1Db4038de013D5653A710EFb97678fD46837A52",
    rewardTokenContractAddress: "0x40798ad1280a8d323aA80E814B2Cbe0d4Ff6d36e",
    stakingContractAddress: "0x7c1e3Aff7D1579051C9aACFa024f74d5D9B3bFd1",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://dexscreener.com/polygon/0x48d411A641153C03245E0aaA3da315Ed198aF95b?embed=1&theme=dark",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/elgorditofitofficial/", followers: 12000 },
      { platform: "X", url: "https://twitter.com", followers: 6500 },
      { platform: "TikTok", url: "https://www.tiktok.com/@elgorditofit?lang=en", followers: 26000 },
    ],
    infoImgUrl: "/images/fit2.png",
    exclusiveContentLink: "https://app.darkblock.io/platform/matic/embed/collection/0xc1Db4038de013D5653A710EFb97678fD46837A52",
    pdfUrl: "/pdfs/fit-1.pdf",
  },
  // @ts-ignore
  {
    creatorName: "Manuela Villegas",
    description: "Full Stack Marketer | CEO @SI SEÑOR MARTECH | TOP VOICE LINKEDIN | Women to Watch | Host TED Circle",
    imgUrl: "/images/manu2.png",
    tokenSymbol: "AZUL",
    tokenPrice: "1 MATIC",
    liquidityImgUrl: "/images/matic.png", // Image URL for liquidity
    nftContractAddress: "0xa62980cDCFaB6AB674a2E5f666e5b055e602BA7d",
    rewardTokenContractAddress: "0x680a120F656553f075100801Aadea8E6EbEc510E",
    stakingContractAddress: "0x2550B6A58b8701E438577D6654fA97f44C6f5003",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://manu-dex.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/manuelavillegas/", followers: 62100 },
      { platform: "X", url: "https://x.com/Manuelavillegas", followers: 12800 },
      { platform: "TikTok", url: "https://www.tiktok.com/@manuelavillegasjaramillo?lang=en", followers: 82000 },
    ],
    infoImgUrl: "/images/manu.png",
    exclusiveContentLink: "https://example.com/exclusive-manu",
    pdfUrl: "/pdfs/Manuela_Villegas.pdf",
  },
  
  
  // @ts-ignore
  {
    creatorName: "Xportiva",
    description: "Somos una empresa dedicada a la organización y producción de eventos deportivos de alto nivel.",
    imgUrl: "/images/xpo.png",
    tokenSymbol: "XPO",
    tokenPrice: "1 MATIC",
    liquidityImgUrl: "/images/matic.png", // Image URL for liquidity
    nftContractAddress: "0xe0007CFBeE5518e237889e6c24dc676EE7c45338",
    rewardTokenContractAddress: "0xbA5a9fB6766B7555D68e1d248Cd2184180906D48",
    stakingContractAddress: "0xC003CfdF9ebC12A951f38FcDf15E95AA4C044611",
    buyLink: "https://payments.thirdweb.com/checkout/2c6d3822-c285-4afc-bcb7-5ed95a06eb3c",
    sellLink: "https://dex-social.vercel.app/",
    socialMedia: [
      { platform: "Instagram", url: "https://www.instagram.com/xportiva/", followers: 16500 },
      { platform: "X", url: "https://twitter.com", followers: 0 },
      { platform: "TikTok", url: "https://tiktok.com", followers: 0 },
      
    ],
    infoImgUrl: "/images/xpo1.png",
    exclusiveContentLink: "https://example.com/exclusive-xpo",
    pdfUrl: "/pdfs/Xportiva.pdf",
  },
];


// @ts-ignore


