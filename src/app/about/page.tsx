import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">About True Social Token</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-semibold mt-6">Our Vision</h2>
          <p className="mt-4">
            Revolutionizing the growing venture economy by enabling direct, platform-independent relationships between growing ventures and audiences using decentralized Web3 technology. Our platform empowers growing ventures to maximize engagement and earnings without intermediary constraints.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Mission</h2>
          <p className="mt-4">
            We help growing ventures thrive by monetizing their communities through a revolutionary Web3 Token Membership model. As growing ventures succeed, we ensure they and their communities receive financial compensation, incentivizing their collective success.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Why</h2>
          <p className="mt-4">
            History has consistently demonstrated that technology shifts power away from entrenched institutions and places it directly into the hands of individuals. The original vision of the Internet was to decentralize power, placing it directly in the hands of individuals. This concentration of power in the hands of a few platforms is unlikely to be a sustainable trend. In the coming years, we will witness a significant shift in power from platforms to a group known as growing ventures.
          </p>
          <p className="mt-4">
            Imagine a world where growing ventures truly own their relationships with their audiences—not merely renting them, but possessing full ownership. This scenario would redefine the dynamics between growing ventures and their followers, fostering deeper connections and greater autonomy over their creative outputs. Today, growing ventures find themselves overly reliant on a limited number of platforms, which can restrict their autonomy and influence.
          </p>
          <p className="mt-4">
            As platforms increasingly recognize the value that growing ventures bring, audiences are also becoming more aware of the critical role they play in the ecosystem. Today, we stand on the brink of a new internet era—Web3. This technology offers the potential to revolutionize how growing ventures establish direct financial relationships with their audiences, empowering them with greater control and independence.
          </p>
          <p className="mt-4">
            Imagine a new model: a subscription between a growing venture and a fan that is independent of any single platform yet operates seamlessly across all major platforms like Instagram, X (formerly Twitter), YouTube, and Facebook. These platforms would agree to honor a "Token Membership," a decentralized, platform-agnostic approach that empowers growing ventures to maintain direct relationships with their fans without being bound by the rules or revenue models of individual platforms. This would allow for greater creative freedom and a stronger, more stable connection between growing ventures and their audiences.
          </p>
          <p className="mt-4">
            Envision a system where audiences can invest in growing ventures much like they invest in startups. A growing venture could set the terms from the outset—for instance, offering $100,000 USDC for 5% of their revenue as a singer. All these terms would be encoded in a smart contract. This approach would not only provide clear, upfront conditions but also ensure transparency and enforceability through blockchain technology. It's a revolutionary way to support creative work, giving both growing ventures and their supporters more security and mutual benefit.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Our Future</h2>
          <p className="mt-4">
            In this envisioned world, growing ventures have complete ownership of their relationships with their audiences, and anyone interested in investing in creativity can do so. This creates a dynamic where having a compelling idea and the passion to pursue it can realistically be turned into a sustainable livelihood. It democratizes the creative economy, allowing more individuals to thrive from their artistic endeavors and innovations, supported directly by those who value and believe in their work.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Pioneering Innovation</h2>
          <p className="mt-4">
            We have pioneered a seamless transition from Web2 to Web3, ensuring users experience the benefits of blockchain technology without the usual friction. By leveraging the ERC-4337 protocol (Smart Wallets), we have created an easy-to-use platform that integrates seamlessly with major social media accounts, enhancing accessibility and user engagement.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Leadership</h2>
          <p className="mt-4">
            Pablo, the current CEO, wrote his first line of code in 1984 and pioneered the creation of the first web page for a financial institution in Latin America. Olga, the COO, led the Colombian team at WorldSkills Abu Dhabi 2017, achieving notable success with eight medals of excellence, including three in technology categories.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Vision and Execution</h2>
          <p className="mt-4">
            Our vision is to shift the economic dynamics in favor of growing ventures, enabling them to fully capitalize on their relationships with their audiences. We are committed to providing the tools and infrastructure necessary to support this new era of the growing venture economy.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Problem</h2>
          <p className="mt-4">
            **Growing ventures are hindered by platform dependency, which dilutes earnings and fragments audience engagement, limiting direct and sustainable financial relationships.**
          </p>
          <p className="mt-4">
            Despite the transformative potential of digital platforms, growing ventures today face significant barriers in monetizing their relationships directly with their audiences. The current ecosystem overwhelmingly relies on intermediary platforms, which not only extract a substantial portion of the revenue but also control the critical data and engagement metrics that growing ventures need to foster and monetize their communities effectively. This dependency results in a diluted earning potential for growing ventures and a fragmented audience experience, where engagement is platform-centric rather than growing venture-focused. As a result, growing ventures are unable to establish a sustainable and direct financial relationship with their followers, which is essential for long-term success and independence.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Solution</h2>
          <p className="mt-4">
            Imagine a future where growing ventures fully own their relationships with their audience, free from platform constraints, and supported by direct, transparent financial interactions. Our solution leverages the power of Web3 and smart contracts to introduce a Token Membership system, which operates seamlessly across all major platforms. This model not only empowers growing ventures with the autonomy to set their own terms but also enables audiences to invest directly in the creativity they believe in, transforming every follower into a potential stakeholder. Together, we’re building a new economic framework where growing ventures flourish and communities thrive, all underpinned by security, transparency, and mutual growth.
          </p>
          <p className="mt-4">
            **Token Membership System:** Implement a decentralized subscription model where growing ventures and fans engage through a "Token Membership." This model operates independently of any specific platform, allowing growing ventures to maintain direct and continuous relationships with their audiences across multiple platforms like Instagram, X (formerly Twitter), YouTube, and Facebook.
          </p>
          <p className="mt-4">
            **Smart Contract Terms:** Growing ventures can set explicit terms for financial interactions, such as offering a percentage of their revenue in exchange for upfront investment (e.g., $100,000 USDC for 5% of future revenue as a singer). These terms are encoded in smart contracts, ensuring clarity, transparency, and enforceability through blockchain technology.
          </p>
          <p className="mt-4">
            **Cross-Platform Integration:** Despite the decentralized nature of the Token Membership, the model is designed to function seamlessly across all major social media platforms, which agree to honor these blockchain-based agreements. This ensures that growing ventures can reach their audiences wherever they are, without platform restrictions or discrepancies in terms and conditions.
          </p>
          <p className="mt-4">
            **Direct Investment in Creativity:** Audiences can directly invest in growing ventures, not unlike investing in startups, which fosters a more direct and financially supportive relationship between growing ventures and their communities. This system not only empowers growing ventures financially but also enhances their creative freedom and stability.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Market Opportunity in the Growing Venture Economy</h2>
          <p className="mt-4">
            **Rapid Increase in User Engagement:** User tipping jumped from 17% in 2021 to over 40% in 2023, with average tips between $5 and $10, highlighting a shift towards direct financial support from fans to growing ventures.
          </p>
          <p className="mt-4">
            **Expansive Growth:** The growing venture economy has surged by 314% since 2021, now including 200 million content creators globally who are utilizing advanced tools for growth and monetization.
          </p>
          <p className="mt-4">
            **Fan Participation:** Fans are increasingly proactive, wanting to engage more actively and invest in the growing ventures they support, reflecting a deeper economic and emotional investment in the growing venture economy.
          </p>
          <p className="mt-4">
            **Potential of Web3:** Web3 technologies facilitate a move towards the tokenization of people, brands, and content, driving a fully decentralized model that empowers growing ventures and fans alike.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Competitive Landscape</h2>
          <p className="mt-4">
            **Beyond Traditional Models:** Unlike traditional subscription platforms that simply manage payments and provide space while taking a cut, our platform ensures growing ventures truly own their communities through direct connections.
          </p>
          <p className="mt-4">
            **Reducing Friction:** While many Web3 social finance platforms introduce complexity that deters everyday users, our system minimizes friction, making it accessible and user-friendly.
          </p>
          <p className="mt-4">
            **Token-Based Compensation:** Our unique token-based system revolutionizes how growing ventures are compensated, allowing direct and transparent financial interactions between growing ventures and their communities.
          </p>
          <p className="mt-4">
            **Platform Agnostic:** Our model works independently of content distribution platforms, ensuring growing ventures can engage with their audience wherever they are, without being tied to any single service.
          </p>
          <p className="mt-4">
            **Focus on Adoption:** Our main focus is driving widespread adoption of our token model, benefiting individual growing ventures and the entire community, without directly competing with existing social platforms.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Growing Venture Token Utility</h2>
          <p className="mt-4">
            **Personalized Tokens:** Each growing venture issues their own transactional token, minted through staking on exclusive content, enhancing direct engagement and reward mechanisms.
          </p>
          <p className="mt-4">
            **Versatile Usage:** Tokens can be used by fans to purchase exclusive content, merchandise, concert tickets, and more—the possibilities are only limited by the growing venture’s imagination.
          </p>
          <p className="mt-4">
            **Token Exchange:** Community members can exchange these growing venture-specific tokens for a liquid network token, like USDC, providing flexibility and value realization.
          </p>
          <p className="mt-4">
            **Reward Cycle:** Growing ventures can exchange collected USDC and opt to burn tokens to share their success with the community, aligning growing venture and community interests through transparent financial interactions.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Token Sale and Strategy</h2>
          <p className="mt-4">
            **Initial Token Sale:** Launch a preliminary token sale to raise funds and build community interest, ensuring a strong start for platform engagement.
          </p>
          <p className="mt-4">
            **Vesting Periods:** Implement vesting periods for team members and advisors to align their interests with the long-term success and growth of the project.
          </p>
          <p className="mt-4">
            **Utility First Approach:** Prioritize establishing real, tangible utility for our tokens within the platform before initiating any major token sales.
          </p>
          <p className="mt-4">
            **Token Exchange Post-Vesting:** After the vesting periods, tokens will become exchangeable for growing venture-specific tokens, facilitating broader utility and integration within our ecosystem.
          </p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default About;
