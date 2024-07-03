import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Privacy = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Política de Privacidad para el Servicio de Suscripción de NFTs de True Social Token</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <p>Fecha de Vigencia: 4 de octubre de 2023</p>
          <p>¡Bienvenido a True Social Token! True Social Token es una plataforma dedicada a conectar a los coleccionistas con NFTs únicos a través de un modelo de suscripción. "True Social Token", "nosotros", "nos" y "nuestro" se refieren a TOKSOL.IO, esta plataforma y los servicios ofrecidos por nosotros, incluyendo nuestro sitio web, aplicaciones móviles y otros servicios digitales. Esta Política de Privacidad es parte de nuestros Términos de Uso y describe cómo recopilamos, usamos y compartimos información.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Información que Proporcionas a True Social Token</h2>
          <p>Esta es información que proporcionas directamente a nosotros a través de varios medios, como la creación de cuenta, compras de suscripción y comunicaciones directas. Los tipos de información que generalmente recopilamos incluyen:</p>
          <ul className="list-disc ml-6">
            <li>Nombre y apellido</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información de pago (procesada a través de servicios de pago de terceros seguros)</li>
            <li>Dirección de billetera para transacciones de NFT</li>
            <li>Nombre de usuario y contraseña</li>
            <li>País y estado/provincia de residencia</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6">Información Recopilada Automáticamente</h2>
          <p>Cuando interactúas con nuestros Servicios, recopilamos automáticamente cierta información sobre tu dispositivo y tu uso de nuestros servicios, incluyendo:</p>
          <ul className="list-disc ml-6">
            <li>Dirección IP</li>
            <li>Información del dispositivo y de la conexión</li>
            <li>Datos de ubicación (derivados de la dirección IP)</li>
            <li>Tipo y configuración del navegador</li>
            <li>Información sobre tu actividad en nuestros Servicios</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6">Cómo Usamos Tu Información</h2>
          <p>Usamos la información que recopilamos para proporcionar y gestionar tu suscripción y transacciones, mejorar y personalizar nuestros Servicios, comunicarnos contigo sobre tu cuenta y actualizaciones de nuestros servicios, realizar análisis y monitoreo de rendimiento, y cumplir con obligaciones legales.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Compartir Tu Información</h2>
          <p>Compartimos información con proveedores de servicios que nos ayudan a proporcionar nuestros Servicios, como procesadores de pagos y servicios de alojamiento en la nube. Si lo requiere la ley, también podemos divulgar tu información a las autoridades o en procedimientos legales.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Tus Derechos y Opciones</h2>
          <p>Tienes ciertos derechos con respecto a la información que poseemos sobre ti. Puedes acceder, corregir o eliminar tu información personal, cambiar la configuración de tu cuenta y optar por no participar en ciertas actividades de procesamiento de datos.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Cambios en Esta Política de Privacidad</h2>
          <p>Podemos actualizar esta política de vez en cuando para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. Te notificaremos sobre cualquier cambio material publicando la nueva política en nuestro sitio web o a través de otros canales de comunicación.</p>
          
          <h2 className="text-2xl font-semibold mt-6">Contáctanos</h2>
          <p>Si tienes alguna pregunta sobre esta política de privacidad, nuestras prácticas o tus interacciones con nuestros servicios, por favor contáctanos en pablo@toksol.io.</p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Privacy;
