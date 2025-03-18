import { Loader2 } from "lucide-react"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"

import { HeaderLogo } from "@/modules/dashboard/components/header-logo"
import { Navigation } from "@/modules/dashboard/components/navigation"
import { WelcomeMessage } from "@/modules/dashboard/components/welcome-msg"

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
    return (
        <header className="bg-gradient-to-b from-orange-700 to-orange-500 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <ClerkLoaded>
                        <UserButton />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-amber-600" />
                    </ClerkLoading>
                </div>

                <WelcomeMessage />
            </div>
        </header>
    )
}
