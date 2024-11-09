import React from 'react';
import {auth, signOut, signIn} from "@/auth";
import Link from 'next/link';


const Navbar = async () => {
    const session = await auth();
  return (
    <header className='header'>
        <nav className='container mx-auto flex justify-between items-center'>
            <Link href="/">
                <h1 className='text-xl font-bold'>Lost and Found Platform</h1>
            </Link>
            <div className='flex space-x-6'>
                    <Link href={'Found'}>
                        <h1 className='hover:underline'>Declare Found Item</h1>
                    </Link>
                    <Link href="/Lost">
                        <h1 className='hover:underline'>Search Lost Items</h1>
                    </Link>
            </div>
            <div> 
                {session && session?.user ? (
                <>
                <Link href={`/user/${session?.user?.id}`}>
                   <span className='hover:underline'>{session?.user?.name}</span>
                </Link>
                <form action={async() => {
                    "use server";
                    await signOut({redirectTo:"/"})
                 }}>
                    <button type="submit" className='hover:underline'>Sign Out</button>
                </form>
                </>
                ) : (
                    <form action={async () => {
                        "use server";
                        await signIn('credentials', { callbackUrl: '/' })}
                        }>
                            <button type="submit" className='hover:underline mx-auto'>Sign In</button> 
                    </form>
                )}

            </div>   
        </nav>
    </header>
  )
}

export default Navbar