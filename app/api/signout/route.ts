import { signOut } from "@/auth"



import { NextResponse } from "next/server"


export  async function POST(){
   
    try {
        await signOut()
        
        return NextResponse.json({message: 'BIEN'})
        
    } catch (error) {
        return NextResponse.json({error: `MAL ${error}`})
        
    }
}