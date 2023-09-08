import React from 'react'
import Layout from './LandingLayout'
import bgMedico from '../../assets/bg-layout.jpeg'

const Home = () => {
  return (
    <Layout>
     <main className='w-full h-[80%] p-10'>
      <div className='w-full h-1/2 relative'>
        <img className='w-full h-full object-cover absolute' src={bgMedico}/>
        <div className='h-full p-10 flex flex-col justify-center items-start absolute bg-gradient-to-r from-[#000000] to-transparent text-white'>
          <h1 className='font-bold text-2xl'>Procesos legales simplificados a través de Soluciones Digitales</h1>
          <p className='text-lg'>
            Facilitamos la gestión de sus trámites a traves de la web de la Corte Suprema. Desde encontrar un precio y hacer reservas hasta enviar documentos y rastrear la carga.
          </p>
        </div>
      </div>
      <div className='w-full h-1/2 flex flex-row justify-evenly items-center cursor-default'>
        <div className='w-1/3 h-[80%] p-5 flex flex-col place-content-between rounded bg-greyIsh'>
          <div>
              <h3 className='text-lg font-semibold'>
                ¿Nuevo en Auto Legal Tracker?
              </h3>
          </div>
          <div>
            <p className='text-[17px]'>
              Regístrate gratis y comienza a administrar todos tus casos de forma automatizada y digital.
            </p>
          </div>
          <div>
            <a className='border-b-[1px] border-[#2e6eb8] text-[#2e6eb8] hover:text-[#0a305c]' href='#'>
              Regístrese ahora
            </a>
          </div>
        </div>
        <div className='w-1/3 h-[80%] p-5 flex flex-col place-content-between bg-greyIsh'>
          <div>
            <h3 className='text-lg font-semibold pb-2'>
              Como empezar...
            </h3>
          </div>
          <div>
            <p className='text-[17px]'>
              Guías paso a paso para empezar a utilizar nuestros servicios digitales.
            </p>
          </div>
          <div>
            <a className='border-b-[1px] border-[#2e6eb8] text-[#2e6eb8] hover:text-[#0a305c]' href='#'>
              Más información
            </a>
          </div>
        </div>
      </div>
     </main>
    </Layout>
  )
}

export default Home