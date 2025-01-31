import Image from 'next/image'
import CustomHeading from '../components/common/CustomHeading'
import CustomButton from '../components/common/CustomButton'

const Shoppers = () => {
  return (
    <div className='pt-10 pb-20 max-xl:py-12 max-lg:py-[60px] max-md:py-[30px] overflow-hidden'>
      <div className='container'>
        <div className='flex items-center justify-between xl:gap-10 max-lg:flex-wrap max-lg:justify-center w-full'>
          <div className='max-lg:text-center w-full'>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green pb-[7px]'>
              Know where are your shoppers
            </p>
            <CustomHeading
              title='Be where your '
              textTwo='shoppers' 
              titleTwo=' are'
              styleclassTwo='after:absolute after:lg:!bottom-[5px] after:md:!bottom-[0px]'
              styleclass='max-w-[487px] max-lg:max-w-none font-bold'
            />
            <div className='flex items-center gap-3 pt-10 max-lg:justify-center max-lg:!pt-7 max-md:!pt-5'>
              <CustomButton
                title='Start for free'
                styleclass='!w-[166px] h-[52px] max-lg:!h-[48px] max-lg:!w-[140px] bg-black text-white hover:!text-black hover:bg-white'
              />
              <CustomButton
                title='Request demo'
                styleclass='w-[158px] h-[52px] max-lg:!h-[48px] max-lg:!w-[140px] hover:!bg-black hover:text-white before:!bg-black'
              />
            </div>
          </div>
          <div className='w-full max-lg:flex max-lg:justify-center max-lg:pt-12 pt-1'>
            <Image
              src='/assets/images/webp/shoppers-earth.webp'
              alt='shoppers-earth'
              width={503}
              height={490}
              className='pointer-events-none xl:!max-w-[503px] !h-[490px] max-xl:!max-w-[450px] max-xl:!h-[420px] max-lg:!h-[420px] block max-md:!max-w-[310px] max-md:!h-[288px] animate-spin-slow'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoppers
