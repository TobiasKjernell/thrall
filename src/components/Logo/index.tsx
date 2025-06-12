import Link from 'next/link';
import Image from 'next/image'

const Logo = () => {
    return(
        <div className='logo'>
            <Link href="/">     
            <Image src="/logo.png" alt="Logo"  height={125} width={96} className='logo__link' priority />
            </Link>
        </div>
    )
}

export default Logo