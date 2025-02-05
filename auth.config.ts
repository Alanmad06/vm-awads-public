import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig = {
    pages :{
        signIn : '/login',
        error : '/error'
    },
    callbacks :{
    authorized({auth,request : {nextUrl}}){
       
        const isLoggedIn = !!auth?.user
        const pathname = nextUrl.pathname
        if((pathname!=='/register' && pathname!=='/login' && pathname!=='/') && !isLoggedIn){
            return Response.redirect(new URL('/', nextUrl));
        }

        return true

    }
    },
    providers:[]


} satisfies NextAuthConfig