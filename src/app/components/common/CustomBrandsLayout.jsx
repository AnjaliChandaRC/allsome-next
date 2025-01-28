import React from 'react';
import Image from 'next/image'

const CustomBrandsLayout = ({ title, description, buttonText, reverse, myImage ,bgColor = "" }) => {
    return (
            <div
                className={`p-6 rounded-xl flex items-center justify-between gap-4 ${bgColor} ${reverse ? "flex-row-reverse" : "flex-row"
                    }`}
            >
            <div>
                <Image src={myImage}
                    width={400}
                    height={400}
                    alt='image'
                />
                </div>
                <div className="max-w-[400px]">
                <h2 className="lg:max-w-[398px] xl:!text-custom-5xl xl:!leading-custom-15xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold sm:pb-[21px] pb-4">{title}</h2>
                <p className="lg:max-w-[434px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center">{description}</p>
                    <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">
                        {buttonText}
                </button>
                
                </div>
            </div>
    );
};

export default CustomBrandsLayout;
