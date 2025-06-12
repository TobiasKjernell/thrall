import Image from 'next/image'

const Logo = () => {
    return(
        <div className='logo'>
            <Image src="/logo.png" alt="Logo"  height={125} width={96} className='logo__link' priority />
        </div>
    )
}

export default Logo