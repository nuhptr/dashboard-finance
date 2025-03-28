import { z } from "zod"
import { Trash } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

import { insertAccountSchema } from "@/db/schema"

const formSchema = insertAccountSchema.pick({ name: true })

type FormValues = z.input<typeof formSchema>

type props = {
    id?: string
    defaultValues?: FormValues
    onSubmit: (values: FormValues) => void
    onDelete?: () => void
    disabled?: boolean
}

export const AccountForm = ({ id, defaultValues, onSubmit, onDelete, disabled }: props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    })

    const handleSubmit = (values: FormValues) => {
        onSubmit(values)
    }

    const handleDelete = () => {
        onDelete?.()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
                <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input disabled={disabled} placeholder="e.g. Cash, Bank, Credit Card" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
            <Button className="w-full" disabled={disabled}>
                {id ? "Save changes" : "Create account"}
            </Button>
            {/* TODO: !! means "not null or undefined" */}
            {!!id && (
                <Button type="button" disabled={disabled} onClick={handleDelete} className="w-full" variant="outline">
                    <Trash className="mr-2 size-4" />
                    Delete account
                </Button>
            )}
        </Form>
    )
}
