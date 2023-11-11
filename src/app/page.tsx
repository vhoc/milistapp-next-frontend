import Image from 'next/image'
import logoNav from '../assets/logo-landing-nav.png'
import mockupHome from '../assets/mockup_home.png'
import btnGooglePlay from '../assets/google-play-badge.png'
import imgAppRegister from '../assets/app-registration.png'
import imgEmail from '../assets/email.png'
import imgAddProduct from '../assets/add-product.png'
import imgCustomize from '../assets/customize.png'
import imgShare from '../assets/share-button.png'
import imgShareMsg from '../assets/share-message.png'
import { titilliumRegular } from './ui/fonts'

export default function Home() {
  return (
    <>
        {/* all the other elements */}
        <div id="detail" className={`${titilliumRegular.className} leading-normal tracking-normal text-white gradient`}>
          
          {/* <Outlet /> */}

          
          <nav id="header" className="w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              <div className="pl-4 flex items-center">
                <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                  {/* <!--Icon from: http://www.potlabicons.com/ --> */}
                  <Image src={logoNav} width={175} height={40} alt='MiListApp' />
                </a>
              </div>
              {/* <div className="block lg:hidden pr-4">
                <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
                  </li>
                </ul>
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  Action
                </button>
              </div> */}
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          </nav>
          {/* <!--Hero--> */}
          <div className="pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center gap-5">
              {/* <!--Left Col--> */}
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                {/* <p className="uppercase tracking-loose w-full">What business are you?</p> */}
                <h1 className="my-4 text-7xl font-bold" style={{ lineHeight: '3.5rem' }}>
                  Todos tus productos y servicios
                </h1>
                <h2 className="leading-normal text-center text-4xl mb-8 font-light w-full md:text-left">
                  ¡a la vista de todos!
                </h2>
                {/* GOOGLE PLAY BUTTON */}
                <div className="w-full flex justify-center md:justify-normal" >
                  <a href="#">
                    <Image src={btnGooglePlay} width={200} height={40} alt="Descarga la App" />
                  </a>
                </div>
                <div className="w-full flex justify-center md:justify-normal" >
                  <p>* Próximamente para iPhone</p>
                </div>
              </div>
              {/* <!--Right Col--> */}
              <div className="py-6 text-center">
                <Image src={ mockupHome } width={360} height={770} alt="Vista principal de la App" />
              </div>
            </div>
          </div>
          <div className="relative -mt-12 lg:-mt-24">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                  <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                </g>
                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                  <path
                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <section className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Descarga la App
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    1. Regístrate con un email y elige una contraseña
                  </h3>
                  <p className="text-gray-600 mb-8">
                    En 3 sencillos pasos estarás listo para publicar tus productos o servicios y compartirlos con un solo botón.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Ingresa al menos una forma de contacto, puede ser un número de whatsapp, un perfil o página de facebook, un teléfono para llamadas, 
                    o un correo electrónico. Esto es para que la gente pueda contactarte si les gusta uno de tus productos.
                  </p>
                </div>
                <div className="w-full sm:w-1/2 p-6">
                  <Image src={imgAppRegister} width={469} height={277} alt="Proceso de registro de usuario" />
                </div>
              </div>

              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <Image src={imgEmail} width={470} height={200} alt="Vista del mensaje de correo de activación de cuenta."/>
                </div>
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      2. Activa tu cuenta
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Revisa tu correo y activa tu cuenta desde el botón del mensaje que te llegará al registrarte. 
                      Si no ves el correo de activación, busca en tu carpeta de "Spam", "Correo no deseado", o en "Todos".
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center">

                <div className="w-5/6 sm:w-1/2 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    3. Da de alta tus productos
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Toma una foto o elígela de la galería, ponle un nombre, un precio y una descripción ¡y listo!
                  </p>
                  <p className="text-gray-600 mb-8">
                    Ingresa al menos una forma de contacto, puede ser un número de whatsapp, un perfil o página de facebook, un teléfono para llamadas, 
                    o un correo electrónico. Esto es para que la gente pueda contactarte si les gusta uno de tus productos.
                  </p>
                </div>

                <div className="w-full sm:w-1/2 p-6">
                  <Image src={imgAddProduct} width={400} height={628} alt="Vista para agregar un producto nuevo al catálogo." />
                </div>
              </div>

              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <Image src={imgCustomize} width={500} height={370} alt="Vista para personalizar el aspecto del catálogo." />
                </div>
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Personaliza tu catálogo
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Dale a tu catálogo tu toque personal o el de tu marca o negocio.
                    </p>

                    <p className="text-gray-600 mb-8">
                      Define una imagen de portada, colores de fondo y de texto, 
                      el nombre de tu catálogo y un slogan. Próximamente habrá más opciones de personalización.                      
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section className="bg-white border-b py-8" >
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
              <h2 className="w-full mt-2 text-5xl font-bold leading-tight text-center text-gray-800">
                UN BOTÓN
              </h2>
              <h2 className="w-full mb-2 text-4xl font-bold leading-tight text-center text-gray-800">
                para compartir TODOS tus productos
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
                  
                </div>
              </div>
              <div className="w-full text-md text-gray-800 px-6 text-center">
                <p>
                  Olvídate de subir una y otra vez docenas de fotos de tus productos en grupos de WhatsApp, en Facebook o donde sea.
                </p>
                <p>
                  Tocando un botón podrás compartir un enlace web donde tus contactos podrán mirar todos tus productos y servicios.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap flex-col sm:flex-row items-center justify-center w-full gap-10">
                
                <Image src={imgShare} width={460} height={329} style={{ height: '329px' }} alt="Botón para compartir el catálogo."/>
                <Image src={imgShareMsg} width={460} height={563} alt="Mensaje de compartir el catalogo." />
                
              </div>
              
            </div>
          </section>

          <section className="bg-white border-b py-8" id="privacidad">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12" id="privacidad">
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Aviso de Privacidad
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="w-full text-md text-gray-800 px-6">
                      <p>
                        Fecha de Última Actualización: 8 de noviembre de 2023
                      </p>
                      <br />
                      <p>
                      En "MiListApp", nos tomamos muy en serio la protección de tus datos personales. Este Aviso de Políticas de Privacidad tiene como objetivo informarte sobre cómo recopilamos, utilizamos y protegemos la información que nos proporcionas al utilizar nuestra aplicación. Te recomendamos leer detenidamente este aviso para que estés al tanto de tus derechos y cómo manejamos tus datos.
                      </p>
                      <br />
                      <h3>
                        1. Datos que Recopilamos:
                      </h3>

                      <p>
                        Al utilizar "MiListApp", podemos recopilar los siguientes datos personales:
                      </p>

                      <ul className="list-disc pl-6 mb-6">
                        <li>
                          <strong>Nombre del Usuario:</strong> Necesitamos tu nombre para personalizar tu experiencia en la aplicación.
                        </li>
                        <li>
                          <strong>Email del Usuario:</strong> Utilizamos tu dirección de correo electrónico para facilitar la comunicación contigo y para restablecer tu contraseña en caso de que la olvides.
                        </li>
                        <li>
                          <strong>Números Telefónicos del Usuario:</strong> OPCIONAL - Si decides proporcionarnos tu número de teléfono, lo usaremos para fines de autenticación y para mejorar la seguridad de tu cuenta.
                        </li>
                        <li>
                          <strong>Redes Sociales del Usuario: </strong> OPCIONAL - Si decides vincular tus redes sociales a "MiListApp", podremos acceder a ciertos datos públicos de tu perfil, como tu foto de perfil y nombre de usuario, para brindarte una experiencia más personalizada.
                        </li>
                      </ul>

                      <h3>
                      2. Uso de tus Datos Personales:
                      </h3>

                      <p>Utilizamos tus datos personales para los siguientes fines:</p>

                      <ul className="list-disc pl-6 mb-6">
                        <li>Personalizar tu experiencia en la aplicación.</li>
                        <li>Enviar notificaciones relevantes sobre tus listas y recordatorios.</li>
                        <li>Facilitar la comunicación contigo.</li>
                        <li>Mejorar la seguridad de tu cuenta.</li>
                        <li>Proporcionar una experiencia más personalizada, si decides vincular tus redes sociales.</li>
                      </ul>
                      
                      <h3>
                      3. Compartir tus Datos Personales:
                      </h3>
                      
                      <p>Entendemos la importancia de la privacidad, por lo que no compartiremos tus datos personales con terceros sin tu consentimiento, a menos que estemos legalmente obligados a hacerlo.</p>

                      <h3>
                      4. Derechos del Titular:
                      </h3>

                      <p>Tienes derechos sobre tus datos personales, incluyendo el acceso, rectificación, cancelación u oposición al tratamiento de los mismos. Puedes ejercer estos derechos enviando una solicitud a [correo electrónico de contacto].</p>
                      

                      <h3>5. Seguridad de tus Datos Personales:</h3>
                      <p>En "MiListApp", implementamos medidas de seguridad para proteger tus datos personales contra el acceso no autorizado y la divulgación. Utilizamos tecnologías de cifrado y prácticas de seguridad estándar de la industria.</p>

                      <h3>6. Cambios en el Aviso de Privacidad:</h3>
                      <p>Nos reservamos el derecho de actualizar este Aviso de Políticas de Privacidad en cualquier momento. Te notificaremos de cualquier cambio a través de la aplicación o por correo electrónico.</p>

                      <h3>7. Contacto:</h3>
                      <p>Si tienes alguna pregunta o inquietud sobre este Aviso de Políticas de Privacidad o la forma en que tratamos tus datos personales, puedes contactarnos en privacidad@milist.app</p>
                      <br />
                      <p>
                      Gracias por confiar en "MiListApp" para gestionar tu listado de productos y servicios. Tu privacidad es importante para nosotros, y trabajamos arduamente para proteger tus datos personales y brindarte la mejor experiencia posible.
                      </p>

                    </div>
                      
                </div>
                
              </div>
              
            </div>
          </section>
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                ¡Es gratis!
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>

              <div className="flex flex-col justify-center pt-12 my-12 sm:my-4 text-center">
                <p>
                  Puedes tener hasta 100 productos en tu catálogo de forma completamente gratis.
                </p>
                <p>
                  Próximamente haremos disponible un plan premium que te permitirá tener muchos más productos en tu catálogo y otras
                  ventajas más que te ayudarán a tener más visibilidad y alcance.
                </p>
              </div>
              {/* <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                  <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                      Gratis
                    </div>
                    <ul className="w-full text-center text-sm">
                      <li className="border-b py-4">Hasta 100 productos</li>
                      <li className="border-b py-4">Personaliza tu catálogo</li>
                      <li className="border-b py-4">1 catálogo por cuenta</li>
                    </ul>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                      $0
                      <span className="text-base"></span>
                    </div>
                    <div className="flex items-center justify-center">
                      
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="w-full p-8 text-3xl font-bold text-center">Premium</div>
                    <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                    <ul className="w-full text-center text-base font-bold">
                      <li className="border-b py-4">Hasta 500 productos</li>
                      <li className="border-b py-4">Personaliza tu catálogo</li>
                      <li className="border-b py-4">1 catálogo por cuenta</li>
                    </ul>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-4xl font-bold text-center">
                      $40
                      <span className="text-base">/ por mes</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                  <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                      Premium x 12 meses
                    </div>
                    <ul className="w-full text-center text-sm">
                      <li className="border-b py-4">Hasta 500 productos</li>
                      <li className="border-b py-4">Personaliza tu catálogo</li>
                      <li className="border-b py-4">1 catálogo por cuenta</li>
                    </ul>
                  </div>
                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                      $390
                      <span className="text-base">/ por 12 meses</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
          {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
          <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                <g className="wave" fill="#f8fafc">
                  <path
                    d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
                  ></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                  <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path
                      d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                      opacity="0.100000001"
                    ></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <section className="flex flex-col items-center container mx-auto text-center py-6 mb-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
              ¿Qué esperas?
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <h3 className="my-4 text-3xl leading-tight">
              ¡Descarga la App y publica tu negocio!
            </h3>
            <div>
              <a href="#">
                <Image src={btnGooglePlay} width={200} height={60} alt="Descarga la App" />
              </a>
            </div>
            <p className="text-xl">* Próximamente para iPhone</p>
            
          </section>
          {/* <!--Footer--> */}
          {/* <footer className="bg-white">
            <div className="container mx-auto px-8">
              <div className="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 mb-6 text-black">
                  <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                    
                    
                    <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                      <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                      <path
                        className="plane-take-off"
                        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                      />
                    </svg>
                    LANDING
                  </a>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-gray-500 md:mb-6">Links</p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-gray-500 md:mb-6">Social</p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-gray-500 md:mb-6">Company</p>
                  <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer> */}
        </div>
      </>
  )
}
