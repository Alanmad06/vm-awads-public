import { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages :{
        signIn : '/login'
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