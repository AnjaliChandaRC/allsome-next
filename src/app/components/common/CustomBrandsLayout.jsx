import React from 'react';
import Image from 'next/image';
import CustomHeading from './CustomHeading';
import CustomDescription from './CustomDescription';
import CustomButton from './CustomButton';

const CustomBrandsLayout = ({
    title, description, buttonText, reverse, myImage, bgColor, colSize, contentSize,imageSize = "",imageWidth = auto,imageHeight = auto}) => {
    return (
        <div className={`flex items-center !justify-center flex-wrap lg:!justify-between gap-5 relative ${bgColor} ${reverse ? "flex-row-reverse" : "flex-row"}`}>
            <div className={`lg:w-[41.66%] w-full flex justify-center ${colSize}`}>
                <Image
                    src={myImage}
                    width={imageWidth}
                    height={imageHeight}
                    alt='image'
                    className={`${imageSize}`}
                />
            </div>
            <div className={`lg:w-1/2 w-full flex flex-col lg:justify-start justify-center lg:items-start items-center ${contentSize}`}>
                <CustomHeading
                    styleclass={'lg:max-w-[559px] w-full xl:!text-custom-5xl xl:!leading-custom-14xl lg:!text-custom-3xl md:!text-4xl !text-2xl font-kanit font-semibold max-lg:text-center sm:pb-[21px] pb-4 md:max-w-[550px] lg:max-w-[420px] xl:max-w-[560px] w-full max-lg:mx-auto'}
                    title={title}
                />
                <CustomDescription
                    styleclass={'lg:max-w-[462px] max-w-[570px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center'}
                    description={description}
                />
                <CustomButton
                    styleclass={'lg:mt-[25px] mt-4 !px-[22px] border border-black !py-[10px] bg-black text-white !w-[107px] !h-12 !hover:w-full !hover:text-black'}
                    title={buttonText}
                />
            </div>
        </div>
    );
};

export default CustomBrandsLayout;
