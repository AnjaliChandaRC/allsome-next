import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import 'aos/dist/aos.css';

const SalesOpportunity = () => {
  return (
    <div className='xl:pt-[79px] xl:pb-[125px] lg:py-16 py-[60px]'>
      <div className='xl:max-w-[1440px] mx-auto'>
        <div className='container mx-auto'>
          <div className='lg:flex-row flex flex-col relative max-lg:flex-col-reverse gap-7'>
            <div data-aos="fade-left" className='xl:max-w-[560px] lg:max-w-[450px] w-full flex flex-col lg:items-start items-center justify-center xl:pt-10'>
              <CustomHeading styleclass="xl:!text-custom-5xl xl:!leading-custom-14xl lg:!text-custom-3xl md:!text-4xl !text-2xl font-kanit font-semibold max-lg:text-center sm:pb-[21px] pb-4"
                title={'Maximize sales opportunity with ready inventory'} />
              <CustomDescription styleclass="max-w-[436px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center max-lg:mx-auto"
                description="Be where your shoppers are, both online and offline. Appear to the right audience at the right time, both online and offline to generate sales for you." />
              <CustomButton styleclass="sm:mt-[25px] mt-4 !py-[10px] !px-[22px] !bg-black text-white max-lg:mx-auto !w-[107px] !h-12 !hover:w-full !hover:text-black" title="Sign up" />
            </div>
            <div data-aos="fade-right" className='flex lg:justify-start justify-center xl:absolute -right-24'>
              <Image
                src="/assets/images/webp/sales.webp"
                width={682}
                height={438}
                className='object-cover lg:max-w-[682px] max-w-[550px] xl:h-[438px] w-full pointer-events-none'
                alt="sales opportunity"
              />
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default SalesOpportunity