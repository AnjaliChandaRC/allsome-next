import CustomHeading from './common/CustomHeading'
import Image from 'next/image'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const AutomateYourOperations = () => {
  return (
    <div className='bg-light-green lg:rounded-[40px] rounded-[20px]'>
      <div className='container lg:max-w-[1109px] mx-auto'>
        <div className='lg:flex-row flex lg:py-[112px] sm:py-12 py-10 justify-between flex-col gap-7'>
          <div className='flex lg:justify-start justify-center'>
            <Image
              src="/assets/images/webp/automate-image.webp"
              width={435}
              height={443}
              className='object-cover lg:max-w-[435px] max-w-[335px] lg:h-[443px] w-full pointer-events-none'
              alt="automate-image"
            />
          </div>
          <div className='lg:w-[483px] w-full flex flex-col lg:items-start items-center justify-center'>
            <CustomHeading styleclass="lg:max-w-[482px] xl:!text-custom-5xl lg:!text-custom-3xl md:!text-4xl !text-2xl font-kanit font-semibold sm:pb-7 pb-4 max-lg:text-center" title={'Automate your operations'} />
            <CustomDescription styleclass="max-w-[463px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center w-full max-lg:mx-auto" description="Build your e-commerce operation teams with ready software, modules, workforce, and more - all within AllSome. Once sold, orders will be shipped out automatically." />
            <CustomButton styleclass="sm:mt-[27px] mt-4 !py-[10px] !px-[22px] !bg-black text-white !w-[107px] !h-12 !hover:w-full !hover:text-black" title="Sign up" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutomateYourOperations