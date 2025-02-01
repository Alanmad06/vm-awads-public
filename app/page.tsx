import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {

  const authSession = await auth()

  return (
    <div>
      <p>Bienvenido {(authSession) ? authSession.user?.name : ''} a los</p>
      <h1>VM AWARDS</h1>
      {(authSession) ? 
      <button>Comienza a votar Ahora !</button> :
       <button>
        <Link href='/login'>
        Registrate para empezar a votar !</Link>
      
      </button>}
    </div>
  );
}
