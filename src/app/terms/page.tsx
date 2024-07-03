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
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Términos de Servicio de True Social Token</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <p>¡Bienvenido a True Social Token! Al usar True Social Token, aceptas estos términos, que crean un acuerdo legal vinculante entre tú y True Social Token, Inc. Estos términos se aplican a todos los usuarios de la plataforma True Social Token y sus servicios, incluyendo nuestro sitio web, aplicaciones Web3, API y otros servicios digitales.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Tu Cuenta</h2>
          <p>Debes tener al menos 13 años para usar True Social Token. Al crear una cuenta, confirmas que tienes al menos 13 años y que eres responsable de las actividades de tu cuenta. Debes proporcionar información precisa y mantener esta información actualizada. Para crear o usar una cuenta en True Social Token, también debes tener la edad suficiente para dar tu consentimiento para el procesamiento de tus datos personales en tu jurisdicción o tener permiso de tu padre o tutor si es necesario.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Contenido y Creaciones</h2>
          <p>Como un emprendimiento en crecimiento en True Social Token, puedes establecer una página de emprendimiento en crecimiento para interactuar con usuarios que apoyan tu contenido digital a través de suscripciones o compras únicas. Conservas la propiedad del contenido que publicas, sujeto al derecho de nuestra plataforma de usar y mostrar tu contenido como parte de nuestros servicios.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Pagos y Suscripciones</h2>
          <p>Los emprendimientos en crecimiento pueden ofrecer su contenido de manera única o por suscripción. Los precios pueden mostrarse en la moneda local del usuario y ajustarse por las tarifas de transacción de blockchain según lo determine la red y a discreción de True Social Token. Los emprendimientos en crecimiento son responsables de cumplir con las regulaciones fiscales y de establecer expectativas realistas dentro de sus ofertas.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Propiedad Intelectual</h2>
          <p>Los emprendimientos en crecimiento son responsables de asegurarse de tener todos los derechos necesarios para el contenido que suben a True Social Token. La plataforma respeta las leyes de propiedad intelectual y espera lo mismo de sus usuarios.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Conducta Prohibida</h2>
          <p>Los usuarios no deben participar en actividades ilegales, abusar de la infraestructura técnica de la plataforma o comportarse de manera que pueda considerarse abusiva o dañina para otros usuarios o la plataforma.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Terminación y Suspensión</h2>
          <p>True Social Token se reserva el derecho de suspender o terminar cuentas que violen estos términos o participen en actividades perjudiciales para la plataforma o sus usuarios.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Cambios en los Términos</h2>
          <p>Podemos modificar estos términos en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio material a través de las interfaces de nuestra plataforma o por correo electrónico.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Contáctanos</h2>
          <p>Si tienes alguna pregunta o inquietud sobre estos términos o nuestros servicios, por favor contáctanos en pablo@toksol.io.</p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Terms;
