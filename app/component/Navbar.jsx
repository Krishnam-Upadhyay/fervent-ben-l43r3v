import Link from 'next/link';
const Navbar = ()=>{
    return( 
        <nav className='flex flex-row font-bold text-red-900 bg-purple-400  justify-center  text-xl'>
            <Link href="/" className='px-6'>Home</Link>
            <Link href="/about" className='px-6'>About</Link>
            <Link href="/contact" className='px-6'>Contact</Link>
            
        </nav>);
}

export default Navbar;