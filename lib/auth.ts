/*import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import { CredentialsProvider } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import GithubProviders from "next-auth/providers/github";

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if(!credentials)
            }
        }),
    ],
};*/