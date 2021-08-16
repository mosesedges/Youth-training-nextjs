import Link from 'next/Link';
import Image from 'next/image'

const Navbar = () => {
    return ( 
        
            
        <nav>
        <div className='logo'>
            <Image src='/logo.png' height='60px' width='80px' className='image' />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/showcase/portraits'><a>Portraits</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
        </nav>
         
     );
}
 
export default Navbar;