import Image from 'next/image'

const CustomSlider = ({ dataList, customClassStyle, classStyle }) => {
  const repeatedDataList = [...dataList, ...dataList,...dataList]
// custom-slider-data
  return (
    <div className={`overflow-hidden keyframe-slider ${classStyle}`}>
      <div className={`slide-scroll flex ${customClassStyle}`}>
        {/* custom-slider-map */}
        {repeatedDataList.map((obj, index) => (
          <div
            key={index}
            className='slide-item flex justify-center items-center w-[150px] m-0 max-md:!w-[140px]'
          >
            <Image
              width={obj.width}
              height={obj.height}
              className='!object-cover !h-auto !w-auto'
              src={obj.image}
              alt='company-image'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomSlider
