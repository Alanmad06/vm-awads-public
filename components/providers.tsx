import { signIn } from "next-auth/react"

export default function Providers(){

    const handleProvider = async () =>{
      signIn('google',{redirectTo:'/memes'})
    
    }
    return(
        <div>
            <button onClick={()=>{handleProvider()}}>
                google
            </button>
        </div>
    )
}