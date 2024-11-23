
 import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-gray-200 flex items-start justify-center min-h-screen pt-20'>
      <div className=' bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white s rounded-lg shadow-lg w-96 bg-opacity-100'>
      Develop by Furqan Ashraf
      <br>
        </br>
      ID=WMA324778 
      <h1 className='text-center font-extrabold p-2 text-2xl '>Application Form</h1>

      <form className='space-y-1 ' >
       <h1>Full Name</h1>   
       <input type="text" placeholder='Enter your Name' id='name' className='border-2 rounded-lg ' />
       <h1>Father  Name</h1>   
       <input type="text" placeholder='Enter Father  Name' id='name' className='border-2 rounded-lg ' />
       <h1>Your NIC No</h1>   
       <input type="text" placeholder='Enter NIC Number' id='name' className='border-2 rounded-lg ' />
       <h1>Your Mobile Number</h1> 
       <input type="number" placeholder='Enter NIC Number' id='name' className='border-2 rounded-lg ' />
       <h1>Gender</h1>
       Male<input type="radio" name="gender" value="male"  /> Female<input type="radio"  name="gender" value="male" /> 

       <h1>Date OF Birth</h1>   
       <input type="date" placeholder='Enter Your Date of Birth' id='name' className='border-2 rounded-lg ' />
       <h1>Your Country</h1>   
       <select
       id='country'
       className='border-2 rounded-lg ' 
        > <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="GB">United Kingdom</option>
        <option value="AU">Australia</option>
        <option value="IN">India</option>
        <option value="PK">Pakistan</option>
        <option value="CN">China</option>
        <option value="JP">Japan</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option></select>


      </form>
        <br>
        </br>
        <button className='w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300'>
        Submit
        </button>
       
      </div>
   
    </div>
  )
}





 // import React from 'react';

// const Home: React.FC = () => {
//   return (
//     <div className="bg-gray-200 flex items-center justify-center min-h-screen">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Application Form</h2>
//         <form className="space-y-4">
          
//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               placeholder="Enter your address"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="city">City</label>
//             <input
//               type="text"
//               id="city"
//               placeholder="Enter your city"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="state">State</label>
//             <input
//               type="text"
//               id="state"
//               placeholder="Enter your state"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="zip">Zip Code</label>
//             <input
//               type="text"
//               id="zip"
//               placeholder="Enter your zip code"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };



