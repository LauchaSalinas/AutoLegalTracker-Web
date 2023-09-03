import React from 'react'

/*
  ver -> ver datos de notificacion 
  toggle -> activar o desactivar automatizacion
  accion -> lista z-index por encima del contenido
*/
// This component its a row-acordeon that contains the Cases information
const NotificationRow = ({nameCase, dateCase, resume, open, statusCase}) => {

  return (
    <>
      <div className={`${open ? 'max-h-36 opacity-100' : 'max-h-0 opacity-0'} bg-white overflow-hidden transition ease-in duration-300 border-t-2`}>
          <div className="p-3 flex flex-row gap-5">
            <div>
              {dateCase} 
            </div> 
            <div>
              CASO {statusCase} 
            </div>
            <div>
              <p>Nombre: {nameCase} - Resumen: {resume} </p>  
            </div> 
          </div>
      </div>
    </>
  )
}

export default NotificationRow