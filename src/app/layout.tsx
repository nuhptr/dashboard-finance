import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import "./globals.css"

import { QueryProviders } from "@/providers/query-provider"
import { SheetProvider } from "@/providers/sheet-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Finance Dashboard",
    description: "Dashboard for tracking personal finances",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    {/* Implement @tanstack/react-query */}
                    <QueryProviders>
                        <SheetProvider />
                        {children}
                    </QueryProviders>
                </body>
            </html>
        </ClerkProvider>
    )
}
