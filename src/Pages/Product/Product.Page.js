import React, { useEffect, useState } from 'react';
import { shopData } from '../../lib/arrays/shopData';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/cartSlice';

function Product() {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    function handleAddToCart() {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        if (productId) {
            const filteredProduct = shopData
                .flatMap(category => category.products)
                .find(product => product.id === productId);

            setProduct(filteredProduct);
        }
    }, [productId]);

    return (
        <div className="w-[1536px] max-[1536px]:w-full mx-auto min-h-[calc(100vh-76px-172px)]">
            <div className='flex flex-col gap-4 py-12 max-[1200px]:py-10 max-[800px]:py-8 max-[500px]:py-6 mx-[50px] max-[1200px]:mx-[35px] max-[800px]:mx-4'>
                <h1 className='text-4xl max-[1200px]:text-3xl max-[800px]:text-2xl max-[500px]:text-xl font-semibold'>{product?.name}</h1>

                <div className="flex max-[500px]:flex-col gap-8">
                    <div className="w-2/5 max-[1200px]:w-[35%] max-[800px]:w-[30%] max-[500px]:w-full h-[60vh] max-[500px]:h-[40vh] centered">
                        <img className='max-w-full max-h-full' src={product?.imageURL} alt="" />
                    </div>

                    <div className="w-3/5 max-[1200px]:w-[65%] max-[800px]:w-[70%] max-[500px]:w-full flex flex-col gap-6">
                        <p className='text-3xl max-[1200px]:text-2xl max-[800px]:text-xl max-[500px]:text-lg font-semibold'>${product?.price}</p>

                        <ul className='list-disc pl-4 text-base font-semibold flex flex-col gap-2'>
                            {product?.desc
                                ? product.desc
                                    .split('.')
                                    .filter(item => item.trim())
                                    .map((item, index) => (
                                        <li key={index}>{item.trim()}</li>
                                    ))
                                : <li>No description available</li>}
                        </ul>

                        <button onClick={handleAddToCart} className='outline-none w-fit mr-auto py-2 px-6 rounded-md border-2 border-[#000000] text-[#000000] font-semibold text-base hover:bg-[#000000] hover:text-[#FFFFFF] hover-transition'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
