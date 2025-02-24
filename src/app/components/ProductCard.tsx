import React from 'react'
import Image from 'next/image'

type ProductProps = {
 title: string;
 price: number;
 image: string;
}

export default function ProductCard({title, price, image}: ProductProps) {
  return (
    <div className='border rounded-lg p-4 shadow-lg bg-white w-64'>
     <Image src={image} alt={title} width={200} height={200} className='rounded-md'/>
     <h2 className='text-lg font-semibold mt-2'>{title}</h2>
     <p className="text-gray-700">Цена: {price}₸</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Купить
      </button>
    </div>
  )
}
