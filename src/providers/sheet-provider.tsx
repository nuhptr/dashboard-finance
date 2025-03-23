"use client"

// useMountedState is a hook that returns a boolean indicating whether the component is mounted or not.
import { useMountedState } from "react-use"

import { NewAccountSheet } from "@/modules/accounts/components/new-account-sheet"

export const SheetProvider = () => {
    const isMounted = useMountedState()

    if (!isMounted) return null

    return (
        <>
            <NewAccountSheet />
        </>
    )
}
