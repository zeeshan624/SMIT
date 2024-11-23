import Image from 'next/image'
import hero from '../../../public/iphone/hero.jpg'
import hero1 from '../../../public/iphone/blue.jpg'
import one from '../../../public/iphone/b.jpg'
import a from '../../../public/iphone/a.jpg'
import d from '../../../public/iphone/d.jpg'
import c from '../../../public/iphone/c.jpg'
import m1 from '../../../public/iphone/1.jpg'
import m2 from '../../../public/iphone/2.jpg'
import m3 from '../../../public/iphone/3.jpg'
export default function Home() {
  return (
    //  <div>
    //   {/* <Link href={'./saylaniform'}><h1>Saylani Form</h1></Link>
    //   <Link href={'./mainpage'}><h1>Signup Page</h1></Link>
    //   <Link href={'./practice'}><h1>Regisration Page</h1></Link> */}

    //  </div>

    <div >



      <div >
        <ol className='flex gap-4 justify-center font-light text-sm w-[100%] bg-customGray2 font'>
          <li>Store</li>
          <li>MAC</li>
          <li>IPAD</li>
          <li>IPHONE</li>
          <li>VISON</li>
          <li>AIRPODS</li>
          <li>ENATAIRTAINMINET</li>
          <li>SUPPORT</li>
        </ol>
      </div>




      {/* hero section */}
      <div className=" relative h-[70vh] w-full">
        <Image src={hero} alt='i' fill className='object-cover '></Image>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
          {/* First Heading */}
          <h1 className="text-white text-4xl font-bold">iPHONE 16 PRO</h1>

          {/* Second Heading */}
          <h1 className="text-white text-2xl font-semibold">Experience the Future</h1>



        </div>
      </div>



      {/* hero section */}
      <div className=" relative h-[70vh] w-full mt-2">
        <Image src={hero1} alt='i' fill className='object-cover '  ></Image>
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
          {/* First Heading */}
          <h1 className="text-white text-4xl font-bold">iPHONE 16 PRO</h1>

          {/* Second Heading */}
          <h1 className="text-white text-2xl font-semibold">Experience the Future</h1>
        </div>
      </div>

      {/* body1 */}
      <div className="flex gap-2 m-2">
        {/* First Image Section */}
        <div className="flex-1 relative">
          {/* Image */}
          <Image
            src={a}
            alt="i"
            className="w-[993px] h-[579px]"
          />
          {/* Text and Button */}
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-white">iPHONE Air Pods</h2>
            <div className='flex gap-1'>

              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                Learn More
              </button>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full" >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Image Section */}

        <div className="flex-1 relative">
          {/* Image */}
          <Image
            src={one}
            alt="i"
            className="w-[993px] h-[579px]"
          />
          {/* Text and Button */}
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-blue-600">Smart Card</h2>

            <div className='flex gap-1'>

              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                Learn More
              </button>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full" >
                Buy Now
              </button>
            </div>
          </div>
        </div>



      </div>



      <div className="flex gap-2 m-2">
        {/* First Image Section */}
        <div className="flex-1 relative">
          {/* Image */}
          <Image
            src={c}
            alt="i"
            className="w-[993px] h-[521px]"
          />
          {/* Text and Button */}
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-black">iPHONE Watch</h2>
            <div className='flex gap-1'>

              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                Learn More
              </button>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full" >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Second Image Section */}

        <div className="flex-1 relative">
          {/* Image */}
          <Image
            src={d}
            alt="i"
            className="w-[993px] h-[521px]"
          />
          {/* Text and Button */}
          <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
            <h2 className="text-xl font-bold text-blue-600">Smart Card</h2>

            <div className='flex gap-1'>

              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                Learn More
              </button>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full" >
                Buy Now
              </button>
            </div>
          </div>
        </div>



      </div>


{/* 3rd section  */}

<div className='flex h-[40vh] w-[100%]'>

  <div className='p-2'>
    <Image src={m1} alt='a'></Image>
  </div>
  <div className='p-2'>
    <Image src={m2} alt='a'></Image>
  </div>
  <div className='p-2'>
    <Image src={m3} alt='a'></Image>
  </div>

</div>



{/* 4th section paragrap */}

<div className='flex bg-customGray '>
<p className='p-4 text-[12px] text-gray-400 justify-center ml-[12%] mr-[12%]'>
1. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
2. Trade  in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to U.S. English, as part of an iOS 18, iPadOS 18, and macOS Sequoia update. English (Australia, Canada, Ireland, New Zealand, South Africa, UK) language support available this December. Some features, additional platforms, and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, Vietnamese, and others, will be coming over the course of the next year.
A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.
Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.
____________________________________________________________________________________________________________________________________________________
</p>
</div>

<div className='bg-customGray flex flex-row-reverse items-center  justify-around'>

<div>
  <h1 className='text-[15px] font-bold text-black'>Shop and Learn</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>

<div>
  <h1 className='text-[15px] font-bold text-black'>Apple Store</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>
<div>
  <h1 className='text-[15px] font-bold text-black'>Book</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>
<div>
  <h1 className='text-[15px] font-bold text-black'>Contact Us</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>
<div>
  <h1 className='text-[15px] font-bold text-black'>Learn More</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>
<div>
  <h1 className='text-[15px] font-bold text-black'>Shop and Learn</h1>
<ol className='text-customGray1'>
  <li>Book</li>
  <li>Order</li>
  <li>Apple</li>
  <li>Items</li>
  <li>Ipad</li>
  <li>Ihone</li>
  <li>Mac</li>
  <li>Watch</li>
  <li>Air Pods</li>
  <li>Vision</li>
</ol>
</div>

</div>


    </div>

  )
}




