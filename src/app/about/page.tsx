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
            Imagina un sistema donde las audiencias pueden invertir en emprendimientos en crecimiento como invierten en startups. Un emprendimiento en crecimiento podría establecer los términos desde el principio, por ejemplo, ofreciendo $100,000 USDC por el 5% de sus ingresos como cantante. Todos estos términos se codificarían en un contrato inteligente. Este enfoque no solo proporcionaría condiciones claras y transparentes desde el principio, sino que también garantizaría la transparencia y ejecutabilidad a través de la tecnología blockchain. Es una manera revolucionaria de apoyar el trabajo creativo, brindando a los emprendimientos en crecimiento y sus seguidores más seguridad y beneficios mutuos.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Nuestro Futuro</h2>
          <p className="mt-4">
            En este mundo imaginado, los emprendimientos en crecimiento tienen completa propiedad de sus relaciones con sus audiencias, y cualquier persona interesada en invertir en creatividad puede hacerlo. Esto crea una dinámica donde tener una idea convincente y la pasión por perseguirla puede convertirse realísticamente en un medio de vida sostenible. Democratiza la economía creativa, permitiendo que más individuos prosperen a partir de sus esfuerzos artísticos e innovaciones, apoyados directamente por aquellos que valoran y creen en su trabajo.
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

          <h2 className="text-2xl font-semibold mt-6">Problema</h2>
          <p className="mt-4">
            **Los emprendimientos en crecimiento están obstaculizados por la dependencia de las plataformas, lo que diluye las ganancias y fragmenta el compromiso de la audiencia, limitando las relaciones financieras directas y sostenibles.**
          </p>
          <p className="mt-4">
            A pesar del potencial transformador de las plataformas digitales, los emprendimientos en crecimiento hoy enfrentan barreras significativas para monetizar sus relaciones directamente con sus audiencias. El ecosistema actual depende abrumadoramente de plataformas intermediarias, que no solo extraen una porción sustancial de los ingresos, sino que también controlan los datos y métricas de compromiso críticos que los emprendimientos en crecimiento necesitan para fomentar y monetizar sus comunidades de manera efectiva. Esta dependencia resulta en un potencial de ganancias diluido para los emprendimientos en crecimiento y una experiencia fragmentada para la audiencia, donde el compromiso es centrado en la plataforma en lugar de enfocado en el emprendimiento. Como resultado, los emprendimientos en crecimiento no pueden establecer una relación financiera directa y sostenible con sus seguidores, lo cual es esencial para el éxito a largo plazo y la independencia.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6">Solución</h2>
          <p className="mt-4">
            Imagina un futuro donde los emprendimientos en crecimiento poseen completamente sus relaciones con su audiencia, libres de restricciones de plataforma, y apoyados por interacciones financieras directas y transparentes. Nuestra solución aprovecha el poder de Web3 y los contratos inteligentes para introducir un sistema de Membresía Token, que opera sin problemas en todas las principales plataformas. Este modelo no solo empodera a los emprendimientos en crecimiento con la autonomía para establecer sus propios términos, sino que también permite a las audiencias invertir directamente en la creatividad en la que creen, transformando a cada seguidor en un potencial accionista. Juntos, estamos construyendo un nuevo marco económico donde los emprendimientos en crecimiento prosperan y las comunidades prosperan, todo respaldado por seguridad, transparencia y crecimiento mutuo.
          </p>
          <p className="mt-4">
            **Sistema de Membresía Token:** Implementar un modelo de suscripción descentralizado donde los emprendimientos en crecimiento y los fans se relacionan a través de una "Membresía Token." Este modelo opera independientemente de cualquier plataforma específica, permitiendo que los emprendimientos en crecimiento mantengan relaciones directas y continuas con sus audiencias en múltiples plataformas como Instagram, X (anteriormente Twitter), YouTube y Facebook.
          </p>
          <p className="mt-4">
            **Términos de Contrato Inteligente:** Los emprendimientos en crecimiento pueden establecer términos explícitos para las interacciones financieras, como ofrecer un porcentaje de sus ingresos a cambio de una inversión inicial (por ejemplo, $100,000 USDC por el 5% de los ingresos futuros como cantante). Estos términos se codifican en contratos inteligentes, asegurando claridad, transparencia y ejecutabilidad a través de la tecnología blockchain.
          </p>
          <p className="mt-4">
            **Integración Multi-Plataforma:** A pesar de la naturaleza descentralizada de la Membresía Token, el modelo está diseñado para funcionar sin problemas en todas las principales plataformas de redes sociales, que acuerdan honrar estos acuerdos basados en blockchain. Esto asegura que los emprendimientos en crecimiento puedan llegar a sus audiencias dondequiera que estén, sin restricciones de plataforma ni discrepancias en términos y condiciones.
          </p>
          <p className="mt-4">
            **Inversión Directa en Creatividad:** Las audiencias pueden invertir directamente en los emprendimientos en crecimiento, de manera similar a cómo invierten en startups, lo que fomenta una relación más directa y de apoyo financiero entre los emprendimientos en crecimiento y sus comunidades. Este sistema no solo empodera financieramente a los emprendimientos en crecimiento, sino que también mejora su libertad creativa y estabilidad.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Oportunidad de Mercado en la Economía de los Emprendimientos en Crecimiento</h2>
          <p className="mt-4">
            **Aumento Rápido en el Compromiso de los Usuarios:** Las propinas de los usuarios saltaron del 17% en 2021 a más del 40% en 2023, con propinas promedio entre $5 y $10, destacando un cambio hacia el apoyo financiero directo de los fans a los emprendimientos en crecimiento.
          </p>
          <p className="mt-4">
            **Crecimiento Expansivo:** La economía de los emprendimientos en crecimiento ha aumentado un 314% desde 2021, incluyendo ahora a 200 millones de creadores de contenido a nivel mundial que utilizan herramientas avanzadas para el crecimiento y la monetización.
          </p>
          <p className="mt-4">
            **Participación de los Fans:** Los fans son cada vez más proactivos, queriendo participar más activamente e invertir en los emprendimientos en crecimiento que apoyan, reflejando una inversión económica y emocional más profunda en la economía de los emprendimientos en crecimiento.
          </p>
          <p className="mt-4">
            **Potencial de Web3:** Las tecnologías Web3 facilitan un movimiento hacia la tokenización de personas, marcas y contenido, impulsando un modelo completamente descentralizado que empodera tanto a los emprendimientos en crecimiento como a los fans.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Paisaje Competitivo</h2>
          <p className="mt-4">
            **Más Allá de los Modelos Tradicionales:** A diferencia de las plataformas de suscripción tradicionales que simplemente gestionan los pagos y proporcionan espacio mientras se llevan una parte, nuestra plataforma asegura que los emprendimientos en crecimiento realmente posean sus comunidades a través de conexiones directas.
          </p>
          <p className="mt-4">
            **Reducción de Fricciones:** Mientras muchas plataformas de finanzas sociales Web3 introducen complejidad que disuade a los usuarios cotidianos, nuestro sistema minimiza las fricciones, haciéndolo accesible y fácil de usar.
          </p>
          <p className="mt-4">
            **Compensación Basada en Tokens:** Nuestro sistema único basado en tokens revoluciona la forma en que los emprendimientos en crecimiento son compensados, permitiendo interacciones financieras directas y transparentes entre los emprendimientos en crecimiento y sus comunidades.
          </p>
          <p className="mt-4">
            **Independiente de la Plataforma:** Nuestro modelo funciona independientemente de las plataformas de distribución de contenido, asegurando que los emprendimientos en crecimiento puedan interactuar con su audiencia dondequiera que estén, sin estar atados a ningún servicio en particular.
          </p>
          <p className="mt-4">
            **Enfoque en la Adopción:** Nuestro principal enfoque es impulsar la adopción generalizada de nuestro modelo de tokens, beneficiando a los emprendimientos en crecimiento individuales y a toda la comunidad, sin competir directamente con las plataformas sociales existentes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Utilidad del Token para Emprendimientos en Crecimiento</h2>
          <p className="mt-4">
            **Tokens Personalizados:** Cada emprendimiento en crecimiento emite su propio token transaccional, acuñado a través de staking en contenido exclusivo, mejorando los mecanismos de compromiso y recompensa directa.
          </p>
          <p className="mt-4">
            **Uso Versátil:** Los tokens pueden ser utilizados por los fans para comprar contenido exclusivo, mercancía, entradas para conciertos y más; las posibilidades están limitadas solo por la imaginación del emprendimiento en crecimiento.
          </p>
          <p className="mt-4">
            **Intercambio de Tokens:** Los miembros de la comunidad pueden intercambiar estos tokens específicos de los emprendimientos en crecimiento por un token de red líquido, como USDC, proporcionando flexibilidad y realización de valor.
          </p>
          <p className="mt-4">
            **Ciclo de Recompensa:** Los emprendimientos en crecimiento pueden intercambiar USDC recolectado y optar por quemar tokens para compartir su éxito con la comunidad, alineando los intereses del emprendimiento en crecimiento y la comunidad a través de interacciones financieras transparentes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Venta de Tokens y Estrategia</h2>
          <p className="mt-4">
            **Venta Inicial de Tokens:** Lanzar una venta preliminar de tokens para recaudar fondos y generar interés comunitario, asegurando un fuerte comienzo para el compromiso con la plataforma.
          </p>
          <p className="mt-4">
            **Períodos de Consolidación:** Implementar períodos de consolidación para los miembros del equipo y asesores para alinear sus intereses con el éxito y crecimiento a largo plazo del proyecto.
          </p>
          <p className="mt-4">
            **Enfoque en la Utilidad:** Priorizar el establecimiento de una utilidad real y tangible para nuestros tokens dentro de la plataforma antes de iniciar cualquier venta importante de tokens.
          </p>
          <p className="mt-4">
            **Intercambio de Tokens Post-Consolidación:** Después de los períodos de consolidación, los tokens serán intercambiables por tokens específicos de los emprendimientos en crecimiento, facilitando una mayor utilidad e integración dentro de nuestro ecosistema.
          </p>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default About;
