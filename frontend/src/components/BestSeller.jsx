import React, { useContext, useState, useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const BestSeller = () => {
    const {products} = useContext(ShopContext);  
    const[bestSeller,setBestSeller] = useState([]);
    

    useEffect(() => {
        // console.log('Products in BestSeller:', products); // Debug log
        if (products.length > 0) {
            const bestProduct = products.filter((item) => (item.bestSeller));
            setBestSeller(bestProduct.slice(0, 5));
            // console.log('Filtered Best Products:', bestProduct); // Log filtered products
        }
    }, [products]);
    
    
    

return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Shop our most-loved styles that customers can’t get enough of. These bestsellers are flying off the shelves—grab yours before they’re gone!
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
        </div>
    </div>
  )
}

export default BestSeller
