import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px] "
        src="/logo.png"
        alt="logo"
        height={60}
        width={60}
      />
    </Link>
  )
}

export default Logo