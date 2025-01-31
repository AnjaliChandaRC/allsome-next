import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import { INTEGRATIONS_DATA } from '../utils/helper'
import { INTEGRATIONS_DATA_POSITION } from '../utils/helper'

const ApiIntegrations = () => {
  return (
    <div className='xl:pt-[130px] pt-[60px] xl:pb-[196px] md:pb-[445px] sm:pb-[330px] pb-[200px] overflow-hidden'>
      <div className='xl:max-w-[1440px] mx-auto'>
        <div className='container mx-auto relative'>
          <div className="xl:flex-row flex flex-col gap-7">
            <div className='xl:max-w-[560px] md:mb-6 lg:mb-0 w-full flex flex-col xl:items-start items-center justify-center xl:pt-10'>
              <CustomHeading styleclass="xl:!text-custom-5xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold max-xl:text-center max-w-[501px]"
                title="API & " textTwo="Integrations"/>
              <CustomDescription styleclass="xl:max-w-[438px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-xl:text-center md:py-8 py-6"
                description="Connect AllSome to your e-commerce stores, delivery partners, service providers and more." />
              <CustomButton styleclass="!py-[10px] !px-[22px] !bg-black text-white !max-w-[223px] !w-full max-xl:mx-auto" title="View integration guide" />
            </div>
            <div className="max-w-[773px] w-full xl:absolute md:absolute md:right-[38px] lg:relative max-lg:bottom-0 xl:-right-12 max-xl:!mx-auto max-xl:grid">
              <div className="relative">
                {INTEGRATIONS_DATA.map((image, index) => (
                  <Image
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    width={231}
                    height={84}
                    className={`object-cover pointer-events-none md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A] ${image.animation} ${INTEGRATIONS_DATA_POSITION[index]}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiIntegrations