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
      <div className='container'>
        <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
          {SERVICES_CARDS.map((service, index) => (
            <div key={index} className='lg:w-[25%] sm:w-[50%] w-full px-[8px] lg:mb-10 sm:mb-6 mb-5 relative group'>
              <div className='absolute -top-[18px] xl:-right-1 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                <img src={service.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 shadow-custom-2xl' />
              </div>
              <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-[19.2px] p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                {service.cardSvg}
                <h3 className="font-bold text-xl leading-custom-4xl text-white lg:pt-[19.4px] pt-4 pb-[6px]">
                  {service.title}
                </h3>
                <p className="font-bold text-xl leading-custom-4xl text-white lg:pt-[19.4px] pt-4 pb-[6px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
   </div>
  )
}

export default DoMoreBest