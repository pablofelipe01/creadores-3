'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Technology = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40">
        <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Bidirectional Tokenization Model (BTM)</h1>
       

          <section className="mb-8">
            {/* <h2 className="text-3xl font-semibold mb-4">Solution</h2> */}
            <p className="mb-4">BTMs (Bidirectional Tokenization Model) are interchangeable assets linked to a brand, a company, a content creator, or any type of community with aligned incentives. They are custom assets that allow their holders to unlock interactions, specific experiences or simply invest in their favorite brands or people.</p>
            <p className="mb-4">BTMs exemplify the main spirit of how intermediaries should not be a necessary condition for value transfer. BTMs are a pathway to financial and creative independence for both brands and their community.</p>
            <p className="mb-4">The success of any brand or value creator comes from fostering growth of their community. With a BTM, as their community grows, a thriving economy is formed that rewards both the value creator and their community.</p>
            <p className="mb-4">This system allows bidirectional exchanges, so participants can buy and sell their tokens at any time without submitting to the risks of volatility, speculation, and liquidity that the Cryptocurrency Exchanges have, centralized (CEX) and/or decentralized (DEX). *4</p>
            <p className="mb-4">This is achieved by a mathematical model that facilitates the joining of a bonding curve with a fungible interlace. This combination creates an automated market model (AMM) that sets the price of one token relative to another and to supply.</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>The weighted mathematical equation is a generalization of the constant product formula x ∗ y = k recommended for automated market makers (AMM).</li>
              <li>Generalization n ≥ 2 accounts for weights that are not a uniform division of 50/50. *5</li>
            </ul>
            <p className="mb-4">A binding curve consists of a base token and a destination token:</p>
            <ul className="list-disc list-inside ml-6 mb-4">
              <li>The base token is the one with which we establish the price in relation.</li>
              <li>The target token is the new token created.</li>
            </ul>
            <p className="mb-4">*In general, the base token should have a reasonably high market capitalization, USDC, for example</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Example</h2>
            <p className="mb-4">A simple example could be:</p>
            <p className="mb-4">P = 0.01</p>
            <p className="mb-4">This means that the Price when there is a Token in circulation is:</p>
            <p className="mb-4">0.01 * 1 = 0.01</p>
            <p className="mb-4">So when there are 100 Tokens in circulation the Price is:</p>
            <p className="mb-4">0.01 * 100 = 1</p>
            <p className="mb-4">When a destination token is purchased, the price in base tokens is left as a reserve. When a destination token is sold, it is burned, and the base tokens are returned from the reserve to the holder's wallet.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Advanced Example</h2>
            <p className="mb-4">What happens if you want to establish a relationship between the target supply and the reserve that is maintained? This is called:</p>
            <p className="mb-4">Invariable modeling, price cores and risk aversion. *6</p>
            <p className="mb-4">An example of binding curve with price P and supply S</p>
            <p className="mb-4">P = S<sup>0.5</sup></p>
            <p className="mb-4">You can define R, the number of base tokens stored in the reserves, as the area under the curve up to the current supply:</p>
            <p className="mb-4">Therefore, if you take the indefinite integral, you can say that the Reserve is:</p>
            <p className="mb-4">R = 0.666667S<sup>1.5</sup></p>
            <p className="mb-4">Now, what happens when base tokens are injected into the Reserve?</p>
            <p className="mb-4">This causes all holders to see an increase in the value of the token. Our previous formula does not take this possibility into account in pricing. So how is this model supported?</p>
            <p className="mb-4">Given the Reserve function.</p>
            <p className="mb-4">R = 0.666667S<sup>1.5</sup></p>
            <p className="mb-4">It is said that the reserve is always proportional to the offer in a relationship that should never change.</p>
            <p className="mb-4">0.666667S<sup>1.5</sup> / R</p>
            <p className="mb-4">Keeping this proportion unchanged, if the reserve is increased by an amount Δ *7</p>
            <p className="mb-4">ΔR, the increase in supply ΔS should maintain this formula:</p>
            <p className="mb-4">0.666667S<sup>1.5</sup> / R = 0.666667(S+ΔS)<sup>1.5</sup> / R+ΔR</p>
            <p className="mb-4">Solving for S, we can say that given a certain amount of the base token of the R curve, the destination tokens we get should be:</p>
            <p className="mb-4">S = S - (S<sup>1.5</sup> (R+ΔR)/R )<sup>0.66666666667</sup></p>
            <p className="mb-4">Similarly, by solving for R, it can be said that our price for a certain amount of destination tokens S is:</p>
            <p className="mb-4">R=R<sup>1.5</sup> +R(S+ΔS)<sup>1.5</sup> /S<sup>1.5</sup></p>
            <p className="mb-4">It is worth noting that both equations fail for R = 0 or S = 0. When this is true, it reverts to the base pricing formula of:</p>
            <p className="mb-4">R = c0.666667S<sup>1.5</sup></p>
            <p className="mb-4">Where c is a constant that will help to establish the slope of the initial curve and therefore the initial price.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Notes and References</h2>
            <p className="mb-4">
              <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                *1 Bitcoin Whitepaper
              </a>
            </p>
            <p className="mb-4">
              <a href="https://ethereum.org/en/whitepaper/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Ethereum Whitepaper
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.sec.gov/ICO" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                *2 SEC on ICOs
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.ibm.com/topics/what-is-blockchain" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                *3 IBM on Blockchain
              </a>
            </p>
            <p className="mb-4">
              <a href="https://mpost.io/what-is-a-liquidity-crisis-and-what-does-it-mean-for-crypto-investors/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                *4 Liquidity Crisis in Crypto
              </a>
            </p>
            <p className="mb-4">
              <a href="https://academic.oup.com/jfec/article-abstract/11/2/370/782499?redirectedFrom=PDF&login=false#" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                *5, *6, *7 Academic References
              </a>
            </p>
          </section>

          <div className="text-center mb-8">
            <a
              href="https://www.academia.edu/95690669/Bidirectional_Tokenization_Model"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Download Academic Paper
            </a>
          </div>
        </div>
      <Footer />
      </main>
    </div>
  );
};

export default Technology;
