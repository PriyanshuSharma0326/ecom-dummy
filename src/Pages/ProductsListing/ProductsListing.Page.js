import React, { useEffect, useState } from 'react';
import { shopData } from '../../lib/arrays/shopData';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../Features/appSlice';

function ProductsListing() {
    const dispatch = useDispatch();

    const selectedCategory = useSelector((state) => state.app.selectedCategory);

    const [filteredList, setFilteredList] = useState([]);

    function handleSelectCategory(category) {
        dispatch(selectCategory(category));
    }

    useEffect(() => {
        if(selectedCategory) {
            const filteredCategory = shopData.filter(category => category.title === selectedCategory);

            setFilteredList(filteredCategory[0].products);
        }
    }, [selectedCategory]);

    return (
        <div className='w-[1536px] max-[1536px]:w-full mx-auto min-h-[calc(100vh-76px-32px)]'>
            <div className="no-scrollbar pt-4 flex items-center gap-4 px-[50px] max-[1200px]:px-[35px] max-[800px]:px-4 overflow-x-scroll">
                {shopData.map(category => {
                    return (
                        <button key={category.id} onClick={() => handleSelectCategory(category.title)} className={`hover-transition outline-none py-2 px-4 text-nowrap font-semibold border-2 border-[#000000] rounded-md text-sm hover:bg-[#000000] hover:text-[#FFFFFF] ${selectedCategory === category.title && 'bg-[#000000] text-[#FFFFFF]'}`}>{category.title}</button>
                    );
                })}
            </div>

            <div className="py-12 max-[1200px]:py-10 max-[800px]:py-8 max-[500px]:py-6 grid grid-cols-4 max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 gap-x-6 gap-y-6 mx-[50px] max-[1200px]:mx-[35px] max-[800px]:mx-4">
                {
                    filteredList.length > 0 ? 
                    <>
                        {filteredList.map(product => {
                            return (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                />
                            );
                        })}
                    </> : 
                    <>
                        {shopData.map(category => {
                            return category.products.map(product => {
                                return (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                    />
                                );
                            });
                        })}
                    </>
                }
            </div>
        </div>
    );
}

export default ProductsListing;
