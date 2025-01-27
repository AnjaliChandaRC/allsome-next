import React from 'react'

const DoMoreBest = () => {
   const SERVICES_CARDS = [
    {
      circle: "/assets/images/webp/white-circle.webp",
      title: "Smart Contract ", 
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.", 
    }, 
     { 
       circle: "/assets/images/webp/white-circle.webp", 
       title: "Smart Contract ", 
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.", 
     }, 
     { 
       circle: "/assets/images/webp/white-circle.webp", 
       title: "Smart Contract ", 
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.", 
     }, 
     { 
       circle: "/assets/images/webp/white-circle.webp", 
       title: "Smart Contract ", 
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.", 
     }, 
     { 
       circle: "/assets/images/webp/white-circle.webp", 
       title: "Smart Contract ", 
       description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.", 
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