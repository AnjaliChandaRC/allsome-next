import Image from 'next/image'
import { FOOTER_ICONS, FOOTER_LIST } from '../../utils/helper';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black lg:rounded-t-[40px] rounded-t-[20px] relative overflow-hidden">
      <Image className='w-full h-auto absolute z-0 top-0 left-0 max-2xl:top-[-20%] max-2xl:left-[-20%] max-md:left-0 max-md:top-0 pointer-events-none ' src="/assets/images/webp/footer-top-layer.webp" width={582} height={529} alt="footer top layer" />
      <div className='container relative z-10'>
        <div className="flex max-md:flex-col justify-between md:pt-16 sm:pt-10 pt-8">
          <div className="w-full md:w-4/12 lg:w-5/12">
            <a href={'/'}><Image src="/assets/images/webp/footer-logo.webp" width={173} height={32} alt="logo" /></a>
            <p className='text-white/70 pt-5'>AllSome is where the logistics works</p>
            <p className='text-white/70 sm:pt-[38px] pt-7 pb-4'>Social Media:</p>
            <div className="flex gap-2.5">
              {FOOTER_ICONS.map((obj, i) => (
                <Link key={i} href={obj.directLink} target='_blank' className='size-[28.91px] !cursor-pointer flex items-center justify-center bg-gradient-to-bl to-lemon via-dark-green from-green rounded-full transition-all duration-300 ease-linear relative shadow-[0_2px_10px_#36eb58] hover:scale-110 hover:shadow-xl hover:to-yellow-400 hover:via-orange-500 hover:from-teal-500'>{obj.icon}</Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-5">
            </div>
          </div>
          <div className="flex text-white w-full md:w-7/12 lg:w-5/12 min-[]: justify-between pt-10 max-sm:gap-x-12 gap-y-8 max-sm:flex-wrap">
            {FOOTER_LIST.map((obj, index) => (
              <div key={index}>
                <p className='text-white/50 text-sm pb-2.5'>{obj.title}</p>
                <ul className="space-y-2">
                    {obj.links.map((items, i) => (
                      <li key={i}>
                        <a href={items.directLink} className="cursor-pointer hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-alld">{items.name}</a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-9 border-t border-white/10"></div>
      <div className="container flex justify-between items-center sm:pt-[22px] sm:pb-[33px] py-5 max-[480px]:flex-col-reverse min-[480px]:gap-y-5 gap-3">
        <p className='text-white/50 text-sm leading-custom-3xl'>(c) {new Date().getFullYear()} ALLSOME. All Right Reserved.</p>
        <div className="flex items-center gap-[26px] text-white">
          <Link href={'#contact'} className='cursor-pointer hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-all leading-custom-10xl'>Sign up</Link>
          <Link href={'#contact'} className='cursor-pointer hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-all leading-custom-10xl'>Log in</Link>
        </div>
      </div>
      <Image className='w-full h-auto absolute pointer-events-none right-0 bottom-0 max-xl:bottom-[-20%] max-md:bottom-0 ' src="/assets/images/webp/footer-bottom-layer.webp" width={551} height={340} alt="footer bottom layer" />
    </div>
  )
}

export default Footer