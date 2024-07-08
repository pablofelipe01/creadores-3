'use client';

import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Tutorials = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-24"> {/* Adjusted padding top */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Videos & Tutorials</h1>
        <div className="flex justify-center mb-8">
          <div style={{ maxWidth: '854px', width: '100%' }}>
            <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
             
              <iframe 
                width="854" 
                height="480" 
                src="https://www.youtube.com/embed/yEaoyCnWX-s?si=mKnXbbBO2bpiwq5u" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} 
               
              ></iframe>
             
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <div style={{ maxWidth: '854px', width: '100%' }}>
            <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
            <iframe 
                src="https://embed.ted.com/talks/lang/en/adam_mosseri_a_creator_led_internet_built_on_blockchain" 
                width="854" 
                height="480" 
                style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }} 
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen
              ></iframe>
              
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Tutorials;
