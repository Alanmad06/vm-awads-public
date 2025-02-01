"use client"

import { useRouter } from "next/navigation"



export default function SignOutButton() {
    const router = useRouter()

    const handleSignOut = async () => {
        try {
            const result = await fetch('api/signout', {
                method: 'POST',
            })

            router.replace('/')

        } catch (error) {
            console.error(error)
        }

    }

    return (

        <button onClick={handleSignOut}>

            <div className="hidden md:block">Sign Out</div>
        </button>

    )
}