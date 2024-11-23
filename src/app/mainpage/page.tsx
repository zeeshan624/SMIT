import Link from "next/link";

export default function HomePage() {
  return (
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 min-h-screen flex">
          {/* Left Section */}
          <div className=" flex items-center justify-center">
          <div>

          <p className="ml-5 text-slate-800 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias blanditiis, nam ea natus reiciendis quasi illum earum tenetur. Quasi, adipisci eligendi maiores temporibus vel sunt quam reprehenderit quod consequatur.</p>
          <br></br>
          <Link href={"/"}><button className="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
            Sign Up
          </button>
          </Link>
          </div>
          
             
              
          </div>
          
          {/* Vertical Line */}
          <div className="border-2 border-violet-100 min-h-screen ml-[30%] flex"></div>

          {/* Right Section */}
          <div className="w-4/5  flex items-center justify-center">
              <div className=" bg-slate-800 px-4 py-4 rounded-lg">
                  <div >
                    <h1 className=" space-y-1 text-gray-100">
                    Email

                    </h1>
                    <input type="text" placeholder="Email" />
                    <br></br>
                    
                  </div>

                  <div >
                    <h1 className=" space-y-1 text-gray-100">
                    Password

                    </h1>
                    <input type="text" placeholder="Password" />
                    <br></br>
                    
                  </div>
                  <br></br>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Login
          </button>

              </div>
          </div>
      </div>
  );
}
