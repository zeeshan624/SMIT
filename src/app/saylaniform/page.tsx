import Image from 'next/image'
import fb from '@/app/image/facebook.0d22b4d986cc357e30b7.png'
import inst from "@/app/image/instagram.1506b398fa46f19bb324.png"
import logo from "@/app/image/logo.22bf709605809177256c.png"
import youtube from "@/app/image/youtube.25bcb63515915fad0160.png"

export default function Home() {
  return (
   <div>
  <div className="flex justify-center  ">
    <div ><Image src={logo} alt='logo' height={68} width={250}/></div> </div>
    
    
    <div className="flex justify-center items-center flex-row mt-2">
  {/* First Div */}
  <div className="flex flex-1 justify-center items-center gap-1">
    <Image src={fb} alt="icon" height={30} width={30} />
    <Image src={inst} alt="icon" height={30} width={30} />
    <Image src={youtube} alt="icon" height={30} width={30} />
  </div>

  {/* Second Div */}
  <div className="flex-grow  text-center text-[24px]">
    Registration Form - SMIT
  </div>

  {/* Third Div */}
  <div className="flex flex-1 justify-center items-center">
    Student Portal
  </div>
</div>

<div className='flex justify-center mt-4'>
  <p>Services - Education - Registration</p>
</div>


<div className='flex justify-center gap-3 mt-4  '>
  <div>Registration</div>
  <div>Download ID Card</div>
  <div>Result</div>
</div>
    
<div className='mr-4 ml-4'>

<div className="flex justify-center w-[100% ]  space-x-4">
  {/* First Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name1">
      Full Name
    </label>
    <input
      type="text"
      id="name1"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name2">
      Full Name
    </label>
    <input
      type="text"
      id="name2"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>

<div className="flex justify-center w-[100% ]  space-x-4">
  {/* First Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name1">
      Full Name
    </label>
    <input
      type="text"
      id="name1"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name2">
      Full Name
    </label>
    <input
      type="text"
      id="name2"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
    
<div>

<div className="flex justify-center w-[100% ]  space-x-4">
  {/* First Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name1">
      Full Name
    </label>
    <input
      type="text"
      id="name1"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name2">
      Full Name
    </label>
    <input
      type="text"
      id="name2"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
<div className="flex justify-center w-[100% ]  space-x-4">
  {/* First Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name1">
      Full Name
    </label>
    <input
      type="text"
      id="name1"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name2">
      Full Name
    </label>
    <input
      type="text"
      id="name2"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
<div className="flex justify-center w-[100% ]  space-x-4">
  {/* First Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name1">
      Full Name
    </label>
    <input
      type="text"
      id="name1"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Second Field */}
  <div className="flex flex-col w-[50%]">
    <label className="block text-gray-700 font-medium mb-1" htmlFor="name2">
      Full Name
    </label>
    <input
      type="text"
      id="name2"
      placeholder="Enter your full name"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>


</div>
</div>
  </div>
 

  )
}



