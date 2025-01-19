import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Features/cartSlice';

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const mediaContainerRef = useRef(null);
    const [mediaContainerHeight, setMediaContainerHeight] = useState(0);

    function handleAddToCart(e) {
        e.preventDefault();
        dispatch(addToCart(product));
    }

    useEffect(() => {
        const updateHeight = () => {
            if (mediaContainerRef.current) {
                setMediaContainerHeight(mediaContainerRef.current.clientWidth);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        if (mediaContainerRef.current) {
            resizeObserver.observe(mediaContainerRef.current);
        }

        updateHeight();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <Link to={`/products/${product.id}`} className='border-2 border-[#000000] flex flex-col rounded-lg'>
            <div className="flex flex-col gap-4 p-8">
                <h1 className='text-center text-base font-bold line-clamp-1'>{product.name}</h1>

                <div ref={mediaContainerRef} className="w-full centered" style={{ height: `${mediaContainerHeight}px` }}>
                    <img className='max-w-full max-h-full' src={product.imageURL} alt={product.name} />
                </div>
            </div>

            <div className="text-center py-3 bg-[#000000]">
                <p className='text-[#FFFFFF] text-base font-semibold'>Price: ${product.price}</p>
            </div>

            <div className="px-8 py-4">
                <button onClick={handleAddToCart} className='outline-none hover-transition w-full py-3 border-2 border-[#000000] text-[#000000] text-sm font-semibold rounded-md hover:bg-[#000000] hover:text-[#FFFFFF]'>Add to cart</button>
            </div>
        </Link>
    );
}

export default ProductCard;
