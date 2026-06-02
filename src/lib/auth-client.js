import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "https://sun-cart-psi.vercel.app",
});


export const { 
    useSession, 
    signIn, 
    signOut, 
    signUp 
} = authClient;