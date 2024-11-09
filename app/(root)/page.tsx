import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1 className='heading'>Welcome to the Lost and Found Platform</h1>
        <h2 className='sub-heading'>Lost or found something?<br />Let us help you</h2>
        <div className="space-x-2 flex justify-center items-center">
          <Link href="/Found">
            <button className="btnblack">Declare Found Item</button>
          </Link>
          <Link href="/Lost">
            <button className="btnwhite">Search Lost Items</button>
          </Link>
        </div>
      </section>

      <div className="about">
        <div className="w-1/2">
        <Image src="/images/bg_spring-homepage.png" alt="hero" width={500} height={300} />
        </div>
        <div className="w-1/2">
         <h2 className="heading">About Us</h2>
         <p className="text">We are a platform that helps you find your lost items. We also help you declare items you have found. We are here to make the world a better place by helping you find your lost items.</p>
        </div>
      </div>  

      <div className="howwecanhelp flex-col">
        <h2 className="heading !text-white">How we can help you</h2>
        <h2 className="sub-heading !text-white">We can help you find your lost items and also help you declare items you have found</h2>
        <div className="w-1/3">
        {/* icon with text and description */}
        </div>
        <div className="w-1/3">
        </div>
        <div className="w-1/3">
        </div>
      </div>  

      </div>
  )
} 