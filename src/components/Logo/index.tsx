import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    return(
        <div className='logo'>
            <Link href="/">     
            <Image src="/logoUpdate.jpg" alt="Logo"  height={125} width={96} className='logo__link' priority />
            </Link>
        </div>
    )
}

export default Logo