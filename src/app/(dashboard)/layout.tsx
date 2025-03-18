import { Header } from "@/modules/dashboard/components/header"

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div className="px-3">{children}</div>
        </>
    )
}
