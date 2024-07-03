// src/app/team/page.tsx
import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const teamMembers = [
  {
    name: 'Pablo',
    position: 'CEO/CTO',
    linkedinUrl: 'https://www.linkedin.com/in/pablo-f-acebedo/',
    imgUrl: '/images/pablo.jpg',
  },
  {
    name: 'Pilu',
    position: 'COO',
    linkedinUrl: 'https://www.linkedin.com/in/janesmith',
    imgUrl: '/images/pilu.png',
  },
  {
    name: 'Paolo',
    position: 'Advisor',
    linkedinUrl: 'https://www.linkedin.com/in/paolomiscia/',
    imgUrl: '/images/paolo.png',
  },
  {
    name: 'Angela',
    position: 'Partner',
    linkedinUrl: 'https://www.linkedin.com/in/angela-maria-acosta-a99687a1/',
    imgUrl: '/images/mona.png',
  },
  {
    name: 'Yesika',
    position: 'Partner',
    linkedinUrl: 'https://www.linkedin.com/in/yesika-padilla-91036653/',
    imgUrl: '/images/yesi.png',
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-transparent border border-blue-500 p-6 rounded-lg text-center text-white transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
              />
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-400">{member.position}</p>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 block"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      <Footer />
      </main>
    </div>
  );
};

export default Team;
