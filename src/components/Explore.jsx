import React from 'react'

const Explore = ({title, placesAPI}) => {
  return (
    <>
      <div className='relative my-7 md:mt-3'>
        <div className='travigo-container'>
          <div className='flex items-center justify-center text-center mb-11 md:mb-7'>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl text-center px-4
            text-slate-900 font-bold filter drop-shadow-lg'>{title}</h1>
          </div>
          <div className='flex flex-wrap px-10 gap-5'>
            {placesAPI?.map((val, i) => (
              <div key={i} className='flex items-center gap-5 sm:gap-3 rounded-lg
              transition-all duration-300 cursor-pointer hover:bg-emerald-300 hover:scale-105' >
                <div className='flex items-center'>
                  <img src={val.placeImg} alt={val.location}  className='w-20 h-20 sm:w-16
                  sm:h-16 rounded-lg filter drop-shadow-lg' />
                </div>
                <div>
                  <h1 className='text-lg sm:text-sm font-bold'>{val.location}</h1>
                  <p className='font-normal lg:text-sm text-base sm:text-xs'>{val.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore
