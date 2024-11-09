import Link from "next/link";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
                <div className="text-left text-gray-400 font-bold">
                    <span className="text-black">Lost</span>Found
                </div>
                <div className="py-10">
                    <h2 className="text-3xl text-gray-950">Sign in to your Account</h2>
                    <div className="border-2 w-10 border-gray-900 inline-block mb-2"></div>
                    <p className="text-gray-900 my-3">Sign in using your email account</p>
                    <div className="flex flex-col items-center">
                        <input type="email" placeholder="Email" className="outline-none border-2 border-gray-200 text-black rounded-lg py-2 px-4 w-96 mb-3" />
                        <input type="password" placeholder="Password" className=" outline-none border-2 border-gray-200 text-black rounded-lg py-2 px-4 w-96 mb-3" />
                        <button className="btnblack w-96">Sign In</button>
                    
                    <div className="flex w-96 justify-between items-center text-gray-800 mt-5">
                        <label className="flex text-xs"><input type="checkbox" className="flex items-center mr-1" />Remember me</label>
                        <Link href="/forgotpassword" className="text-xs">Forgot Password?</Link>

                    </div>
                    </div> 
                </div>

            </div>
            <div className="w-2/5 bg-gray-950 rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2 text-white ">Hi There !!</h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="mb-10 ">Welcome back to the Lost and Found Platform</p>
                <Link href="/signup">
                    <button className="signupbtn inline-block">Sign Up</button>
                 </Link>

            </div>
        </div>
    </main>
  )
} 