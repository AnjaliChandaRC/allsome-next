import React from 'react'

const DoMoreBest = () => {
   const SERVICES_CARDS = [
    {
      circle: "/assets/images/webp/white-circle.webp",
       title: "Multiple channels",
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.",
    },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Ship fast",
       description: "Domestic, international, Cash on Delivery (COD), standard, same day, one hour or self pick up.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "E-commerce malls",
       description: "Free access to 3,000+ locations. Be next to your shopper to make the experience real.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Shareable maps",
       description: "Get discovered through world maps, share with single click and welcome shoppers.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Try before purchase",
       description: "Let shoppers find and order the most suitable one, they will definitely return again!",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Return & exchange",
       description: "Return to store and exchange same day. Free shipping and 10x faster return experience.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Customizable operations",
       description: "Share your e-commerce procedures and outlets execute as instructed. Take control and work from anywhere.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Inventory reports",
       description: "Clean & report for inbound, in-store and shipped SKUs. By orders, locations and dates.",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Giveaway & samples",
       description: "Reach more shoppers with your trial sets and let the products sell for themselves!",
     },
     {
       circle: "/assets/images/webp/white-circle.webp",
       title: "Data insights",
       description: "Get actionable insights and know how your shoppers interact with your products in real life.",
     },
  ];
  return (
    <div className='bg-black'>
      <div className='container max-w-[1178px] mx-auto'>
        <div className='flex flex-row flex-wrap xl:gap-[22px] max-xl:justify-between xl:pt-[108px] lg:pt-20 md:pt-12 pt-9'>
          {SERVICES_CARDS.map((service, index) => (
            <div key={index} className='xl:max-w-[270px] xl:w-full md:w-[31.33%] sm:w-[48%] w-full mb-10'>
              <div className='w-[60px] h-[60px] rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green'></div>
                {/* <img src={service.circle} alt="circle" className='w-[60px] h-[68px]' /> */}
                <h3 className="font-kanit font-medium text-lg leading-custom-8xl text-white pt-[19px] pb-[11px]">
                  {service.title}
                </h3>
                <p className="font-normal text-base leading-6 text-white opacity-70 xl:max-w-[250px]">
                  {service.description}
                </p>
            </div>
          ))}
        </div>
      </div>
   </div>
  )
}

export default DoMoreBest