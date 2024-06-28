import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Terms = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Terms of Service for True Social Token</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <p>Welcome to True Social Token! By using True Social Token, you agree to these terms, which create a binding legal agreement between you and True Social Token, Inc. These terms apply to all users of the True Social Token platform and its services, including our website, Web3 applications, APIs, and other digital services.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Your Account</h2>
          <p>You must be at least 13 years old to use True Social Token. By creating an account, you confirm that you are at least 13 years old and that you are responsible for your account’s activities. You must provide accurate information and keep this information up to date. To create or use an account on True Social Token, you must also be old enough to consent to the processing of your personal data in your jurisdiction or have permission from your parent or guardian if required.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Content and Creations</h2>
          <p>As a growing venture on True Social Token, you may establish a growing venture page to engage with users who support your digital content through subscriptions or one-time purchases. You retain ownership of the content you post, subject to our platform’s right to use and display your content as part of our services.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Payments and Subscriptions</h2>
          <p>Growing ventures may offer their content on a one-time or subscription basis. Prices may be displayed in the user's local currency and adjusted for blockchain transaction fees as determined by the network and True Social Token’s discretion. Growing ventures are responsible for complying with tax regulations and for setting realistic expectations within their offerings.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Intellectual Property</h2>
          <p>Growing ventures are responsible for ensuring they have all the necessary rights to the content they upload to True Social Token. The platform respects intellectual property laws and expects the same from its users.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Prohibited Conduct</h2>
          <p>Users must not engage in illegal activities, abuse the platform’s technical infrastructure, or conduct themselves in a manner that could be deemed as abusive or harmful to other users or the platform.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Termination and Suspension</h2>
          <p>True Social Token reserves the right to suspend or terminate accounts that violate these terms or engage in activities harmful to the platform or its users.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
          <p>We may modify these terms at any time. We will notify users of any material changes through our platform interfaces or via email.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>If you have any questions or concerns about these terms or our services, please contact us at pablo@toksol.io.</p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Terms;
