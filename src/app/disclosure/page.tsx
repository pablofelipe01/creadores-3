import React from 'react';
import { NavBar } from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const LiabilityPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <NavBar />
      <main className="relative py-16 px-4 flex-grow pt-40 container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Política de Responsabilidad</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-semibold mt-6">Divulgación General</h2>
          <p className="mt-4">
            True Social Token no es un asesor financiero, ni proporciona asesoramiento financiero, asesoramiento de inversión o cualquier otro servicio de asesoramiento. El contenido y los servicios proporcionados por True Social Token son solo para fines informativos y de entretenimiento y no deben considerarse como asesoramiento financiero profesional.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Sin Institución Financiera</h2>
          <p className="mt-4">
            True Social Token no es un banco, corredor o cualquier otro tipo de institución financiera. No mantenemos, gestionamos ni invertimos fondos en nombre de los usuarios. Todas las transacciones realizadas en la plataforma True Social Token son directamente entre usuarios y creadores de contenido, y True Social Token no participa ni se responsabiliza por los resultados de estas transacciones.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Relaciones de Inversión</h2>
          <p className="mt-4">
            Todas las relaciones de inversión facilitadas a través de la plataforma True Social Token son únicamente entre los inversores y los creadores de contenido. True Social Token no respalda, recomienda ni garantiza ninguna oportunidad de inversión ni el desempeño de ningún creador de contenido.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Limitación de Responsabilidad</h2>
          <p className="mt-4">
            Al utilizar la plataforma True Social Token, aceptas liberar a True Social Token de cualquier y toda responsabilidad, reclamaciones, daños o gastos que surjan o estén relacionados con tu uso de la plataforma. True Social Token no es responsable de ninguna pérdida o daño incurrido como resultado de inversiones realizadas a través de la plataforma, incluidos, entre otros, pérdidas financieras, pérdida de datos o daño reputacional.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Sin Garantías</h2>
          <p className="mt-4">
            True Social Token no garantiza la exactitud, integridad o puntualidad de la información proporcionada en la plataforma. Todo el contenido y los servicios se proporcionan "tal cual" sin garantía de ningún tipo, ya sea expresa o implícita.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Responsabilidad del Usuario</h2>
          <p className="mt-4">
            Los usuarios son los únicos responsables de realizar su propia investigación y diligencia debida antes de tomar cualquier decisión de inversión. True Social Token anima a los usuarios a buscar el consejo de un asesor financiero calificado antes de realizar cualquier inversión.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Cambios en Esta Política de Responsabilidad</h2>
          <p className="mt-4">
            True Social Token se reserva el derecho de modificar esta política en cualquier momento. Cualquier cambio se publicará en esta página y entrará en vigor inmediatamente después de su publicación. Es responsabilidad de los usuarios revisar periódicamente esta política para estar al tanto de las actualizaciones.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Contáctanos</h2>
          <p className="mt-4">
            Si tienes alguna pregunta o inquietud sobre esta política, por favor contáctanos en pablo@toksol.io.
          </p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default LiabilityPolicy;
