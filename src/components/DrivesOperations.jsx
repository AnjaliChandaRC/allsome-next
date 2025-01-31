import CustomHeading from "../components/common/CustomHeading";
import Image from "next/image";
import CustomButton from "../components/common/CustomButton";
import { OPERATIONS_LIST } from '../app/utils/helper';
import { LearnMoreIcon } from '../app/utils/icons';

const DrivesOperations = () => {
  return (
    <div className="bg-light-green pt-[59px] pb-[79px] rounded-[40px] max-xl:py-16 max-lg:py-[40px] max-md:my-[30px] max-lg:rounded-[20px]">
      <div className="container">
        <CustomHeading
          styleclass="max-w-[915px] mx-auto text-center"
          text="AllSome"
          title=" drives operations for every e-commerce business"
        />
        <p className="text-center pt-[22px] opacity-80 font-normal text-base leading-6 pb-[49px] max-xl:py-6">
          Our customers come from all e-commerce space and we have moved
          millions!
        </p>
        {/* operations-list */}
        <div className="flex items-center gap-[20px] max-xl:flex-wrap max-xl:justify-center">
          {OPERATIONS_LIST.map((obj, i) => (
            <div
              key={i}
              // animation-name
              data-aos="fade-up"
              // cards-delay
              data-aos-delay={["100", "200", "400", "600", "800"][i] || "200"}
            >
              <div className="bg-white hover:!shadow-[0px_1px_5px_5px_#36eb58] transition-all ease-linear duration-300 rounded-lg pt-[31px] pb-[17px] h-[284px] shadow-[0px_5px_12px_0px_#D1EFE9] min-w-[212px] max-xl:min-w-[240px] max-md:min-w-[260px] flex items-center justify-center flex-col ">
                <Image
                  src={obj.cardIcon}
                  width={64}
                  height={81}
                  className="object-cover h-auto w-auto mx-auto pointer-events-none"
                  alt="icons"
                />
                <h4 className="text-center font-medium text-lg leading-custom-8xl pt-5 font-kanit">
                  {obj.title}
                </h4>
                <p
                  className={`text-center max-w-[174px] mx-auto leading-6 font-normal text-base pt-[19px] opacity-80 ${
                    i === 4 ? "pb-[41px]" : "pb-[17px]"
                  }`}
                >
                  {obj.description}
                </p>
                <button className="flex items-center gap-[3px] hover:text-blue-500 drive-operation-btn justify-center text-base font-semibold leading-6 text-center text-dark-green mx-auto transition-all ease-linear duration-300">
                  Learn more
                  <LearnMoreIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <CustomButton
          title="Meet our customers"
          styleclass="mt-[44px] max-lg:mt-10 max-md:mt-7 max-sm:mt-5 before:!bg-black hover:!text-white mx-auto max-md:!h-[48px] px-[33px] max-md:min-w-[170px] max-md:px-0 min-w-[222px] h-[52px] flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default DrivesOperations;
