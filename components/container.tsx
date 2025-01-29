
/* import { useCandidates } from "@/context/candidatesContext"; */

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
     {/*     <span style={{position: 'absolute', top: '0', right: '0', width: '100px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white'}}>{
          candidates && candidates.map((candidate)=>{
            return(
              <p key={`${candidate.candidate.id} ${candidate.category}`}  >
                {candidate.candidate.name}
                {candidate.candidate.id}
                {candidate.category}
              </p>
            )
          })}
         </span> */}
       </div>
  );
}