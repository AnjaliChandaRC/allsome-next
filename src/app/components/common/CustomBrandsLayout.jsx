import React from 'react';
import Image from 'next/image'
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
import CustomButton from './CustomButton';

const CustomBrandsLayout = ({ title, description, buttonText, reverse, myImage ,bgColor = "" }) => {
    return (
            <div
                className={`flex items-center justify-center flex-wrap lg:justify-between gap-5 ${bgColor} ${reverse ? "flex-row-reverse" : "flex-row"
                    }`}>
            <div className='lg:w-[41.66%] w-full'>
                    <Image src={myImage}
                        width={455}
                        height={467}
                        alt='image'
                    />
                </div>
            <div className="lg:w-1/2 w-full flex flex-col lg:justify-start justify-center lg:items-start items-center">
                <CustomHeading styleclass={'lg:max-w-[559px] w-full max-lg:text-center xl:!text-custom-5xl xl:!leading-custom-15xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold sm:pb-[21px] pb-4'} title={title} />
                <CustomDescription styleclass={'lg:max-w-[462px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center'} description={description} />
                <CustomButton styleclass={'lg:mt-[25px] mt-4 !px-[22px] border border-black !py-[10px] bg-black text-white !w-[107px] !h-12 !hover:w-full !hover:text-black'} title={buttonText} />
                </div>
            </div>
    );
};

export default CustomBrandsLayout;
