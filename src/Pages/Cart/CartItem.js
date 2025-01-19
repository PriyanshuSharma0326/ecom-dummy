import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCartItemQuantity, removeFromCart } from '../../Features/cartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();

    const mediaContainerRef = useRef(null);
    const [mediaContainerHeight, setMediaContainerHeight] = useState(0);

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

    function handleAddToCart() {
        const { quantity, ...product } = item;
        dispatch(addToCart(product));
    }

    function decreaseQuantity() {
        if(item.quantity > 1) {
            dispatch(decreaseCartItemQuantity(item.id));
        }
        else {
            deleteItem();
        }
    }

    function deleteItem() {
        dispatch(removeFromCart(item.id));
    }

    return (
        <div className='flex gap-4 border-b pb-4 border-[#000000]'>
            <div ref={mediaContainerRef} className="w-2/5 centered" style={{ height: `${mediaContainerHeight}px` }}>
                <img className='max-w-full max-h-full' src={item.imageURL} alt="" />
            </div>

            <div className="w-3/5 flex flex-col gap-3">
                <h1 className='text-xl max-[1200px]:text-lg font-semibold line-clamp-1'>{item.name}</h1>

                <p className='text-base font-semibold'>${item.price}</p>

                <div className="flex items-center gap-3">
                    <button onClick={handleAddToCart} className='text-2xl font-semibold size-8 text-center rounded-full outline-none'>+</button>

                    <p className='text-base font-semibold'>{item.quantity}</p>

                    <button onClick={decreaseQuantity} className='text-2xl font-semibold size-8 text-center rounded-full outline-none'>-</button>
                </div>

                <button onClick={deleteItem} className='outline-none w-fit mr-auto mt-auto'>Delete</button>
            </div>
        </div>
    );
}

export default CartItem;
