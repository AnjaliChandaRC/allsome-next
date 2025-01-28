import React from 'react';

const CustomBrandsLayout = ({ title, description, buttonText, reverse, bgColor = "bg-white" }) => {
    return (
            <div
                className={`p-6 rounded-xl flex items-center justify-center gap-4 ${bgColor} ${reverse ? "flex-row-reverse" : "flex-row"
                    }`}
            >
                <div className="w-[400px] h-[400px] bg-black"></div>
                <div className="max-w-[400px]">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">
                        {buttonText}
                    </button>
                </div>
            </div>
    );
};

export default CustomBrandsLayout;

