import Link from "next/link"
import Image from "next/image"

type Props = {}

export const HeaderLogo = (props: Props) => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.svg" alt="logo-finance" width={28} height={28} />
                <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
            </div>
        </Link>
    )
}
