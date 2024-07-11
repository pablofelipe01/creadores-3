import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const teamMembers = [
  {
    name: 'Pablo',
    position: 'CEO/CTO',
    linkedinUrl: 'https://www.linkedin.com/in/pablo-f-acebedo/',
  },
  {
    name: 'Pilu',
    position: 'COO',
    linkedinUrl: 'https://www.linkedin.com/in/janesmith',
  },
  {
    name: 'Paolo',
    position: 'Advisor',
    linkedinUrl: 'https://www.linkedin.com/in/paolomiscia/',
  },
  {
    name: 'Angela',
    position: 'Partner',
    linkedinUrl: 'https://www.linkedin.com/in/angela-maria-acosta-a99687a1/',
  },
  {
    name: 'Yesika',
    position: 'Partner',
    linkedinUrl: 'https://www.linkedin.com/in/yesika-padilla-91036653/',
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
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Nuestro Equipo</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/images/equipo.png"
            alt="Equipo"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <ul className="list-disc pl-6">
            {teamMembers.map((member) => (
              <li key={member.name} className="mb-2">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {member.name} - {member.position}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Team;
