import Image from "next/image";
import CustomHeading from "./common/CustomHeading";
import { ROADMAP_LIST } from "../utils/helper";
import "aos/dist/aos.css";
const HowAllSomeWorks = () => {
  
  return (
    <div className="pt-[84px] pb-[124px] max-xl:py-20 max-lg:py-[60px] max-md:py-[30px] relative max-w-[1920px] mx-auto">
      <div className="!max-w-[591px] !mx-auto text-center">
        <CustomHeading
          title="How "
          styleTwo="text-dark-green"
          textTwo="AllSome "
          styleclassTwo=""
          titleTwo="Works?"
          className="!max-w-[591px] !mx-auto"
        />
      </div>

      <Image
        src="/assets/images/svg/line.svg"
        width={100}
        height={95}
        className="object-cover w-full absolute max-xl:translate-y-[44px] max-md:hidden 2xl:translate-y-[-3px] max-2xl:translate-y-0"
        alt="line"
      />
      <div className="container 2xl:mt-5 max-2xl:mt-0">
        <div className="flex items-center justify-evenly relative z-10 max-md:flex-wrap max-md:pt-6">
          {ROADMAP_LIST.map((obj, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-delay={
                i === 0
                  ? "100"
                  : i === 1
                  ? "300"
                  : i === 2
                  ? "500"
                  : "200"
              }
              className={`${
                i === 1
                  ? "mt-[52px]"
                  : i === 2
                  ? "mt-[25px]"
                  : "mt-[55px] max-lg:mt-[30px]"
              } max-md:mt-6`}
            >
              <div className="lg:size-[60px] shadow-[0_2px_10px_#36eb58] size-[42px] rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green flex items-center justify-center">
                <p className="text-white font-extrabold text-custom-2xl max-md:text-2xl max-sm:text-xl leading-custom-12xl font-kanit text-center ">
                  {obj.number}
                </p>
              </div>
              <h3 className="text-lg font-kanit font-medium text-black leading-custom-8xl pb-[7px] pt-[35px] max-lg:pt-6 max-md:pt-5">
                {obj.title}
              </h3>
              <p
                className={`text-base font-normal leading-6 opacity-80 ${
                  i === 1 ? "max-w-[218px]" : "max-w-[228px]"
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowAllSomeWorks;
