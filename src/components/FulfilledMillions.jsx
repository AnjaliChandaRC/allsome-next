import CustomSlider from '../components/common/CustomSlider'
import CustomHeading from '../components/common/CustomHeading'
import { MILLIONS_LIST_ONE, MILLIONS_LIST_TWO, MILLIONS_LIST_THREE } from '../app/utils/helper'
import Image from 'next/image'

const FulfilledMillions = () => {
  return (
    <div className='lg:pt-[89px] lg:pb-[76px] md:py-14 py-12 max-w-[1920px] mx-auto relative'>
      <Image
        src='/assets/images/webp/left-ellipse.webp'
        width={471}
        height={241}
        className='object-cover lg:block hidden sm:max-w-[300px] max-sm:h-[200px] max-w-[100px] lg:max-w-[471px] w-full absolute left-0 lg:top-[43.5%] z-10'
        alt='ellipse-left'
      />
      <Image
        src='/assets/images/webp/right-ellipse.webp'
        width={471}
        height={241}
        className='object-cover lg:block hidden sm:max-w-[300px] max-w-[100px] max-sm:h-[200px] lg:max-w-[471px] w-full absolute right-0 lg:top-[43.5%] z-10'
        alt='ellipse-right'
      />
      <CustomHeading
        styleclass='max-w-[746px] mx-auto text-center font-kanit'
        title='We have fulfilled '
        textTwo='millions'
        styleclassTwo=''
      />
      <div className='lg:pt-[63px] sm:pt-12 pt-8'>
        <div className='!py-[7px]'>
          <CustomSlider
            dataList={MILLIONS_LIST_ONE}
            customClassStyle={'slide-scroll'}
          />
        </div>
        <div className='lg:!mt-[18px] !mt-4'>
          <CustomSlider
            dataList={MILLIONS_LIST_TWO}
            customClassStyle={'slide-reverse'}
          />
        </div>
        <div className='lg:!mt-[18px] !mt-4'>
          <CustomSlider
            dataList={MILLIONS_LIST_THREE}
            customClassStyle={'slide-scroll'}
          />
        </div>
      </div>
    </div>
  )
}

export default FulfilledMillions
