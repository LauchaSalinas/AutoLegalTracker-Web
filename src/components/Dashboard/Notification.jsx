import React from 'react'

const Notification = () => {
  return (
    /*
        hacer controlador notification (?)
        -que devuelve y como 

        array => map {
            componente
            <CardNotification
                text
                value    
            >
        }

        redireccion 

    */
        <>
        <div className='flex items-center w-[22%] h-2/3 p-5 border-2 bg-white rounded-md drop-shadow-md'>
            <p className='text-lg'>
            Tienes <span className='font-bold'>20 casos</span> automatizados  ➡️​
            </p>
        </div>
        <div className='flex items-center w-[22%] h-2/3 p-5 border-2 bg-white rounded-md drop-shadow-md'>
            <p className='text-lg'>
            Tienes <span className='font-bold'>5 casos</span> en este mes ➡️​
            </p>
        </div>
            <div className='flex items-center w-[22%] h-2/3 p-5 border-2 bg-white rounded-md drop-shadow-md'>
            <p className='text-lg'>
            Tienes <span className='font-bold'>5 turnos</span> esta semana ➡️​
            </p>
        </div>
            <div className='flex items-center w-[22%] h-2/3 p-5 border-2 bg-white rounded-md drop-shadow-md'>
            <p className='text-lg'>
            Tienes <span className='font-bold'>15 notificaciones</span> sin responder ➡️​
            </p>
        </div>  
        </>
  )
}

export default Notification