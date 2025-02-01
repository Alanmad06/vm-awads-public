import { auth } from "@/auth";

export default async function Home() {

  const authSession = await auth()

  return (
    <div>
      <p>Bienvenido {(authSession) ? authSession.user?.name : ''} a los</p>
      <h1>VM AWARDS</h1>
      {(authSession) ? 
      <button>Comienza a votar Ahora !</button> :
       <button>
        Registrate para empezar a votar !
      </button>}
    </div>
  );
}
