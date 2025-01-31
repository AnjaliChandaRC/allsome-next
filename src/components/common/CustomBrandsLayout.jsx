import Image from 'next/image';
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
import CustomButton from './CustomButton';

const CustomBrandsLayout = ({ obj }) => {
    // custom-section-layout
    return (
        <div className={`${obj.bgColor ? `bg-${obj.bgColor} lg:rounded-[40px] rounded-[20px] xl:py-[112px] lg:py-20 md:py-[60px] py-[40px]` : ''} ${obj.key === 'layout-custom-one' ? 'max-lg:pb-[60px]' : ''} ${obj.key === 'layout-custom-three' ? 'lg:pt-[79px] lg:pb-20 xl:pb-[100px] pb-[60px] pt-10' : ''}${obj.key === 'layout-custom-two' ? '' : ''}`} id={obj.key}>
            <div className='container'>
                <div className={`flex max-lg:!flex-wrap max-lg:flex-col-reverse ${obj.isReverse ? "flex-row-reverse" : "lg:!flex-row"} ${obj.key === 'layout-custom-one' ? 'max-lg:gap-7 lg:pb-[68px]' : ''}${obj.key === 'layout-custom-two' ? 'max-lg:gap-7' : ''}${obj.key === 'layout-custom-three' ? 'max-lg:gap-0' : ''} items-center justify-between max-lg:justify-center max-lg:items-center max-lg:mx-auto`}>                    <div data-aos="fade-left" className={`flex-1 flex flex-col max-lg:justify-center max-lg:items-center text-center lg:text-left max-w-[419px] ${obj.key === 'layout-custom-two' ? 'max-w-[465px]' : obj.key === 'layout-custom-three' ? 'max-w-[560px]' : ''}`}>
                    <CustomHeading
                        styleclass={'lg:max-w-[559px] w-full xl:!text-custom-5xl xl:!leading-custom-14xl lg:!text-custom-3xl md:!text-4xl !text-2xl font-kanit font-semibold max-lg:text-center md:max-w-[550px] lg:max-w-[420px] xl:max-w-[560px] w-full max-lg:mx-auto'}
                        title={obj.heading}/>
                    <CustomDescription
                        styleclass={`!text-black !opacity-80 !font-normal max-lg:mx-auto ${obj.key === 'layout-custom-one' ? 'lg:pt-[21px] lg:pb-[25px] py-4' : ''} ${obj.key === 'layout-custom-two' ? 'lg:pt-[28px] lg:pb-[27px] py-4' : ''} ${obj.key === 'layout-custom-three' ? 'lg:py-[25px] py-4 max-w-[450px] w-full' : ''}`}
                        description={obj.description}
                    />
                    <CustomButton
                        styleclass={'!px-[22px] border border-black !py-[10px] bg-black text-white !w-[107px] !h-12 !hover:w-full !hover:text-black'}
                        title='sign-up'/>
                </div>
                    <div data-aos="fade-right" className={`flex justify-center ${obj.key === 'layout-custom-two' ? '!justify-center xl:ml-8' : ''} ${obj.key === 'layout-custom-one' ? 'xl:!mr-[62px]' : ''} ${obj.key === 'layout-custom-three' ? 'xl:!-mr-14' : ''}`}>
                        <Image
                            src={obj.image}
                            width={obj.width}
                            height={obj.height}
                            alt={obj.alt}
                            className={`pointer-events-none object-cover ${obj.key === 'layout-custom-three' ? 'max-sm:max-w-[350px]' : 'max-sm:max-w-[300px] max-lg:max-w-[400px]'}`}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CustomBrandsLayout