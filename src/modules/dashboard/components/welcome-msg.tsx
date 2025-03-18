"use client"

import { useUser } from "@clerk/nextjs"

type Props = {}

export const WelcomeMessage = ({}: Props) => {
    const { user, isLoaded } = useUser()

    return (
        <div className="space-y-4 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium">
                Welcome Back{isLoaded ? ", " : " "}
                {user?.firstName}
            </h2>
            <p className="text-sm lg:text-base text-orange-200">This is your financial report</p>
        </div>
    )
}
