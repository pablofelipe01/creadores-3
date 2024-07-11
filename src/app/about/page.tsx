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
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Acerca de True Social Token</h1>
        <div className="bg-transparent border border-blue-500 p-6 rounded-lg text-white">
          <h2 className="text-2xl font-semibold mt-6">Nuestra Visión</h2>
          <p className="mt-4">
            Revolucionar la economía de los emprendimientos en crecimiento permitiendo relaciones directas e independientes de la plataforma entre los emprendimientos y sus audiencias utilizando tecnología Web3 descentralizada. Nuestra plataforma empodera a los emprendimientos en crecimiento para maximizar su compromiso y ganancias sin restricciones de intermediarios.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Nuestra Misión</h2>
          <p className="mt-4">
            Ayudamos a los emprendimientos en crecimiento a prosperar monetizando sus comunidades a través de un modelo revolucionario de Membresía Token Web3. A medida que los emprendimientos en crecimiento tienen éxito, nos aseguramos de que ellos y sus comunidades reciban compensación financiera, incentivando su éxito colectivo.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Por Qué</h2>
          <p className="mt-4">
            La historia ha demostrado consistentemente que la tecnología desvía el poder de las instituciones establecidas y lo coloca directamente en manos de los individuos. La visión original de Internet era descentralizar el poder, colocándolo directamente en manos de las personas. Esta concentración de poder en manos de unas pocas plataformas probablemente no sea una tendencia sostenible. En los próximos años, seremos testigos de un cambio significativo en el poder de las plataformas a un grupo conocido como emprendimientos en crecimiento.
          </p>
          <p className="mt-4">
            Imagina un mundo donde los emprendimientos en crecimiento realmente posean sus relaciones con sus audiencias, no simplemente alquilándolas, sino poseyéndolas completamente. Este escenario redefiniría la dinámica entre los emprendimientos en crecimiento y sus seguidores, fomentando conexiones más profundas y mayor autonomía sobre sus producciones creativas. Hoy en día, los emprendimientos en crecimiento dependen en exceso de un número limitado de plataformas, lo que puede restringir su autonomía e influencia.
          </p>
          <p className="mt-4">
            A medida que las plataformas reconocen cada vez más el valor que aportan los emprendimientos en crecimiento, las audiencias también están más conscientes del papel crítico que desempeñan en el ecosistema. Hoy, estamos al borde de una nueva era de Internet: Web3. Esta tecnología ofrece el potencial de revolucionar cómo los emprendimientos en crecimiento establecen relaciones financieras directas con sus audiencias, empoderándolos con mayor control e independencia.
          </p>
          <p className="mt-4">
            Imagina un nuevo modelo: una suscripción entre un emprendimiento en crecimiento y un fan que sea independiente de cualquier plataforma única pero que funcione sin problemas en todas las principales plataformas como Instagram, X (anteriormente Twitter), YouTube y Facebook. Estas plataformas acordarían honrar una "Membresía Token," un enfoque descentralizado y agnóstico de la plataforma que empodera a los emprendimientos en crecimiento para mantener relaciones directas con sus fans sin estar sujetos a las reglas o modelos de ingresos de las plataformas individuales. Esto permitiría una mayor libertad creativa y una conexión más fuerte y estable entre los emprendimientos en crecimiento y sus audiencias.
          </p>
          <p className="mt-4">
            Imagina un sistema donde las audiencias pueden apoyar a los emprendimientos en crecimiento como apoyan a sus artistas favoritos. Un emprendimiento en crecimiento podría establecer los términos desde el principio, por ejemplo, ofreciendo recompensas exclusivas a cambio de la participación en el programa de lealtad. Todos estos términos se codificarían en un contrato inteligente. Este enfoque no solo proporcionaría condiciones claras y transparentes desde el principio, sino que también garantizaría la transparencia y ejecutabilidad a través de la tecnología blockchain. Es una manera revolucionaria de apoyar el trabajo creativo, brindando a los emprendimientos en crecimiento y sus seguidores más seguridad y beneficios mutuos.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Nuestro Futuro</h2>
          <p className="mt-4">
            En este mundo imaginado, los emprendimientos en crecimiento tienen completa propiedad de sus relaciones con sus audiencias, y cualquier persona interesada en apoyar la creatividad puede hacerlo. Esto crea una dinámica donde tener una idea convincente y la pasión por perseguirla puede convertirse realísticamente en un medio de vida sostenible. Democratiza la economía creativa, permitiendo que más individuos prosperen a partir de sus esfuerzos artísticos e innovaciones, apoyados directamente por aquellos que valoran y creen en su trabajo.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Innovación Pionera</h2>
          <p className="mt-4">
            Hemos sido pioneros en una transición sin problemas de Web2 a Web3, asegurando que los usuarios experimenten los beneficios de la tecnología blockchain sin la fricción habitual. Al aprovechar el protocolo ERC-4337 (Smart Wallets), hemos creado una plataforma fácil de usar que se integra sin problemas con las principales cuentas de redes sociales, mejorando la accesibilidad y el compromiso del usuario.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Liderazgo</h2>
          <p className="mt-4">
            Pablo, el actual CEO, escribió su primera línea de código en 1984 y fue pionero en la creación de la primera página web para una institución financiera en América Latina. Olga, la COO, lideró al equipo colombiano en WorldSkills Abu Dhabi 2017, logrando un notable éxito con ocho medallas de excelencia, incluidas tres en categorías de tecnología.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Visión y Ejecución</h2>
          <p className="mt-4">
            Nuestra visión es cambiar la dinámica económica a favor de los emprendimientos en crecimiento, permitiéndoles capitalizar completamente sus relaciones con sus audiencias. Estamos comprometidos a proporcionar las herramientas e infraestructura necesarias para apoyar esta nueva era de la economía de los emprendimientos en crecimiento.
          </p>

          <p className="mt-4">
            **Integración Multi-Plataforma:** A pesar de la naturaleza descentralizada de la Membresía Token, el modelo está diseñado para funcionar sin problemas en todas las principales plataformas de redes sociales, que acuerdan honrar estos acuerdos basados en blockchain. Esto asegura que los emprendimientos en crecimiento puedan llegar a sus audiencias dondequiera que estén, sin restricciones de plataforma ni discrepancias en términos y condiciones.
          </p>
          <p className="mt-4">
            **Apoyo Directo a la Creatividad:** Las audiencias pueden apoyar directamente a los emprendimientos en crecimiento, de manera similar a cómo lo harían con programas de lealtad, lo que fomenta una relación más directa y de apoyo entre los emprendimientos en crecimiento y sus comunidades. Este sistema no solo empodera financieramente a los emprendimientos en crecimiento, sino que también mejora su libertad creativa y estabilidad.
          </p>

          
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default About;
