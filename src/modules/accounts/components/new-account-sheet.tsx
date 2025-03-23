import { z } from "zod"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

import { useNewAccount } from "@/modules/accounts/hooks/use-new-account"
import { AccountForm } from "@/modules/accounts/components/account-form"

import { insertAccountSchema } from "@/db/schema"

const formSchema = insertAccountSchema.pick({ name: true })

type FormValues = z.input<typeof formSchema>

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount()

    const onSubmit = (values: FormValues) => {
        console.log({ values })
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>Create a new account to track your transactions.</SheetDescription>
                    {/* TODO: Add form */}
                    <AccountForm onSubmit={onSubmit} disabled={false} defaultValues={{ name: "" }} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
