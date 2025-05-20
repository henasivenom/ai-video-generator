import React, { useState } from 'react'
import Image from 'next/image'

function SelectStyle({onUserSelect}) {
  const styleOptions = [
    {
      name: 'Realistic',
      image: '/real.jpg'
    },
    {
      name: 'Cartoon',
      image: '/cartoon.jpg'
    },
    {
      name: 'WaterColor',
      image: '/watercolor.jpg'
    },
    {
      name: 'GTA',
      image: '/gta.jpg'
    },
    {
      name: 'Comic',
      image: '/comic.jpg'
    }
  ];
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <div className="mt-12">
        <h2 className='font-bold text-xl text-primary'>Style </h2>
      </div>
      <p className='text-gray-500'>Select your video style</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
        {styleOptions.map((style, index) => (
          <div
            key={index}
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${selectedOption === style.name ? 'border-4 border-primary' : ''}`}
            onClick={() => 
                {setSelectedOption(style.name)
                onUserSelect('imageStyle', style.name) // Assuming onUserSelect is defined in the parent component
                }}
          >
            <Image
              src={style.image}
              alt={style.name}
              width={100}
              height={100}
              className='h-40 object-cover rounded-lg w-full'
            />
            <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg'>
              {style.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle
