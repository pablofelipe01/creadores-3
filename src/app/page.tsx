'use client';

import React, { useState, useEffect } from 'react';
import { NavBar } from "../../components/NavBar";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent"; // Asegúrate de que esta es la ruta y el estilo de importación correctos
import { ConnectButton } from "@/app/thirdweb";
import { chain } from "@/app/chain";
import { client } from "@/app/client"; 
import { useActiveAccount } from 'thirdweb/react';
import { stakingData } from '../../utils/data';
import dynamic from 'next/dynamic';
import { FaWallet, FaUser, FaDiscord, FaChevronDown, FaChevronUp, FaVideo, FaHandshake, FaGift, FaUserCog } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importa el hook useRouter

const Staking = dynamic(() => import('../../components/Staking'), { ssr: false });

const Home = () => {
  const [isStakingVisible, setIsStakingVisible] = useState(false);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isFAQVisible, setIsFAQVisible] = useState<boolean>(false);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);
  const account = useActiveAccount();
  const router = useRouter(); // Usa el hook useRouter

  useEffect(() => {
    if (account) {
      setIsStakingVisible(true);
    } else {
      setIsStakingVisible(false);
    }
  }, [account]);

  const handleConnectClick = () => {
    const connectButton = document.querySelector('.connect-button');
    if (connectButton) {
      (connectButton as HTMLElement).click();
    }
  };

  const handleEmprendimientoClick = () => {
    setIsIframeVisible(true);
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const toggleFAQSection = () => {
    setIsFAQVisible(!isFAQVisible);
  };

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  const handlePasoAPasoClick = () => {
    router.push('/tutorials'); // Redirige a /tutorials
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow">
        {!isStakingVisible && (
          <header className="relative h-screen flex flex-col items-center justify-center text-center">
            <div className="w-64 h-48 mx-auto mb-8">
              <Image 
                src="/images/6.png" 
                alt="Promotional Image" 
                width={256} 
                height={192} 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <button 
                onClick={toggleVideo} 
                className="bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-400 to-purple-500 text-white py-2 px-6 rounded-lg hover:opacity-90 transition flex items-center space-x-2"
              >
                <FaVideo className="text-xl" />
                <span>Ver Video</span>
              </button>
              <button 
                onClick={handlePasoAPasoClick} 
                className="bg-gradient-to-r from-red-500 via-orange-400 via-yellow-300 via-green-400 via-blue-400 to-purple-500 text-white py-2 px-6 rounded-lg hover:opacity-90 transition flex items-center space-x-2"
              >
                <FaVideo className="text-xl" />
                <span>Paso a Paso</span>
              </button>
            </div>
            <br />


            <div className="max-w-5xl mx-auto bg-purple-900 bg-opacity-20 p-6 rounded-lg mb-8">
  <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
    <div className="bg-purple-800 bg-opacity-10 p-4 rounded-lg flex-1">
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
        <FaHandshake className="mr-2 text-purple-300" /> Transforma la relación con tus seguidores
      </h3>
      <p className="text-gray-200">
        ¡Únete a <b>True Social Token</b> y transforma la relación con tus seguidores! Ofrecemos un innovador programa de lealtad basado en tecnología Web 3 que incluye puntos de recompensa.
      </p>
    </div>
    
    <div className="bg-purple-800 bg-opacity-10 p-4 rounded-lg flex-1">
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
        <FaGift className="mr-2 text-purple-300" /> Loyalty Pass (LP)
      </h3>
      <p className="text-gray-200">
        Con nuestro <b>Loyalty Pass (LP)</b>, podrás ofrecer acceso a contenido exclusivo y recompensas únicas, mientras fortaleces tu conexión directa con tus seguidores sin intermediarios ni algoritmos.
      </p>
    </div>
    
    <div className="bg-purple-800 bg-opacity-10 p-4 rounded-lg flex-1">
      <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
        <FaUserCog className="mr-2 text-purple-300" /> Espacio personalizado
      </h3>
      <p className="text-gray-200">
        Crea un espacio personalizado e integrado con tus redes sociales y lleva tu marca al siguiente nivel. ¡Regístrate hoy y descubre el poder de una relación verdaderamente independiente y descentralizada con tu audiencia!
      </p>
    </div>
  </div>
</div>


            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <button 
                onClick={handleEmprendimientoClick} 
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
              >
                Estoy interesad@
              </button>
              <button 
                onClick={() => window.open('https://discord.gg/YjkJ6mrG', '_blank')} 
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition flex items-center justify-center space-x-2"
              >
                <FaDiscord className="text-xl" />
                <span>Únete a nuestra comunidad</span>
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4 custom-margin-bottom"> {/* Aplica la clase personalizada aquí */}
              Al conectar o crear una billetera, estás aceptando los <a href="/terms" className="text-blue-400 hover:underline">términos y condiciones</a> de este sitio web y sus aplicaciones.
            </p>
          </header>
        )}
        {isStakingVisible && (
          <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stakingData.map((staking) => (
              // @ts-ignore
              <Staking key={staking.id} data={staking} />
            ))}
          </section>
        )}
        {isIframeVisible && (
          <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 p-5 rounded-lg z-50 w-11/12 h-[90vh] max-w-5xl overflow-hidden shadow-lg">
            <iframe
              src="https://wabvdze4ske.typeform.com/to/EIYtv9E8"
              className="w-full h-full border-none"
            ></iframe>
            <button
              onClick={() => setIsIframeVisible(false)}
              className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
            >
              Cerrar
            </button>
          </div>
        )}
        {isVideoVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-5xl p-4">
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/AMe6HJriKZw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <button
                onClick={toggleVideo}
                className="absolute top-2 right-2 bg-gray-800 text-white py-2 px-5 rounded-lg cursor-pointer transition-colors hover:bg-red-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
        <section className="max-w-5xl mx-auto mt-16">
          <div 
            className="flex justify-between items-center cursor-pointer mb-6" 
            onClick={toggleFAQSection}
          >
            <h2 className="text-3xl font-semibold text-white">Preguntas Frecuentes</h2>
            {isFAQVisible ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
          </div>
          {isFAQVisible && (
            <div className="text-white">
              {[
                {
                  "question": "¿Por qué nuestro logo es morado?",
                  "answer": "Nuestro logo es morado en honor a nuestro hijo David. El morado es el color que representa la epilepsia, una condición con la que David ha vivido desde que era un bebé. Este color simboliza nuestra lucha y compromiso personal, y nos recuerda cada día por qué hacemos lo que hacemos."
                },             
                {
                  "question": "¿Qué es TRUE SOCIAL TOKEN (TST)?",
                  "answer": "TRUE SOCIAL TOKEN (TST) es una herramienta poderosa que te apoya en hacer lo que amas, conectándote directamente con tu comunidad. Sin intermediarios ni algoritmos que interfieran, TST te da la oportunidad de ser independiente."
                },
                {
                  "question": "¿Cómo funciona?",
                  "answer": "Con TST puedes crear tu propio programa de lealtad vendiendo Loyalty Passes (LP) y te conectas directamente de tu comunidad."
                },
                {
                  "question": "¿Cómo empiezo?",
                  "answer": "Después de registrarte, puedes comenzar configurando tu perfil, añadiendo tus cuentas de redes sociales y pensando en cómo tu comunidad podría apoyarte."
                },
                {
                  "question": "¿Qué es un LP?",
                  "answer": "LP significa Loyalty Pass. Funciona de manera similar a las Millas, pero de tu emprendimiento. Los LP son pases exclusivos para tu comunidad."
                },
                {
                  "question": "¿Para qué sirve?",
                  "answer": "Lo más importante es que los LP generan “Puntos de Recompensa” y estos puntos pueden usarse para lo que tu quieras, pero algo muy importante es que tambien pueden cambiarse por dinero."
                },
                {
                  "question": "¿Algo más puedo hacer con los LP?",
                  "answer": "Sí, puedes distribuir contenido exclusivo, beneficios especiales, descuentos, conciertos privados, enlaces a transmisiones en vivo, grupos de WhatsApp, una tarjeta de cumpleaños personal (el límite está en tu creatividad). Solo los usuarios que han comprado tu LP y la almacenan en su billetera TST tienen acceso. TST te permite vivir de tu comunidad y liberarte de algoritmos secretos."
                },
                {
                  "question": "¿Cómo funcionan los LP?",
                  "answer": "Tan pronto como un fan compra un LP, se almacena en su billetera TST (porque técnicamente es un NFT). Ahora tu fan tiene derecho a todos los beneficios de ese nivel. Recomendamos ofrecer diferentes niveles de LP, variando en el precio y los beneficios. Cuanto mayor sea el pago, mayor será la recompensa."
                },
                {
                  "question": "¿Cómo hago que la gente me apoye en TST?",
                  "answer": "Depende completamente de ti. Un buen comienzo es compartir tu enlace donde publicas tu contenido (YouTube, Instagram, Twitch, etc.), recordar a tus seguidores en tus podcasts o videos y explicarles qué significa para ti."
                },
                {
                  "question": "¿Necesito tener conocimientos sobre blockchain o web3?",
                  "answer": "Absolutamente no. Hemos diseñado nuestro software para que sea simple y fluido para cualquier usuario."
                },
                {
                  "question": "¿Puedo seguir usando y operando mis otras plataformas como Cameo, Patreon, OnlyFans?",
                  "answer": "¡Por supuesto! Tú, el emprendimiento, puedes seguir usando tus otras cuentas y canales de redes sociales."
                },
                {
                  "question": "¿Qué es una billetera?",
                  "answer": "Una billetera es un hogar para tu activo digital. Se usan para enviar, recibir, almacenar y mostrar activos digitales. Es como una billetera real, solo que menos desordenada. Aprende más: https://learn.rainbow.me/understanding-web3"
                },
                {
                  "question": "¿Qué es un NFT?",
                  "answer": "Un token no fungible (NFT) es un activo digital único que representa la propiedad de artículos únicos. Nos da la capacidad de tokenizar cosas como arte, coleccionables o casi cualquier cosa. Muchos llaman a los NFTs un certificado de propiedad o autenticidad. Están almacenados en la blockchain y, por lo tanto, son completamente transparentes y no pueden ser manipulados."
                },
                {
                  "question": "¿Qué es un Punto de Recompensa?",
                  "answer": "Un Punto de Recompensa es un token fungible con liquidez suficiente para ser cambiado por dólares digitales en cualquier momento."
                },
                {
                  "question": "¿Dónde puedo aprender más sobre blockchain y web3?",
                  "answer": "Un buen comienzo es aquí: https://ethereum.org/en/learn"
                },
                
              ].map((faq, index) => (
                <div key={index} className="mb-4">
                  <div 
                    className="flex justify-between items-center cursor-pointer" 
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    {activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {activeFAQ === index && <p className="mt-2 text-yellow-400 font-light">{faq.answer}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
        <br />
        <Footer />
        <CookieConsent /> {/* Incluye el componente CookieConsent aquí */}
      </main>
    </div>
  );
};

export default Home;
