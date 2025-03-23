"use client"

import { Button } from "@/components/ui/button"
import { useNewAccount } from "@/modules/accounts/hooks/use-new-account"

type Props = {}

export default function DashboardPage({}: Props) {
    const { onOpen } = useNewAccount()

    return (
        <div>
            <Button onClick={onOpen}>Add an account</Button>
        </div>
    )
}
