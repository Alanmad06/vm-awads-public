'use client'

export default function Container({children , category} : {children : React.ReactNode , category : string} ) {
  return (
   <div className="container">
         <div className="container_aux" >
           <span className="container__categoria">{category} DEL AÑO</span>
           {children}
           <span className="container__titulo_3">VOTA POR TU FAVORITO</span>
         </div>
         <span className="container__titulo">VM AWARDS</span>
         <span className="container__titulo_2">VM AWARDS</span>
       </div>
  );
}