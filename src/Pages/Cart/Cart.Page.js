import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
    const cart = useSelector((state) => state.cart.cart);

    const [items, setItems] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        setItems(totalQuantity);
        setPrice(totalPrice);
    }, [cart]);

    return (
        <div className='w-[1536px] max-[1536px]:w-full mx-auto min-h-[calc(100vh-76px-172px)]'>
            <div className="flex max-[800px]:flex-col gap-12 max-[1200px]:gap-8 max-[800px]:gap-4 py-12 max-[1200px]:py-10 max-[800px]:py-8 max-[500px]:py-6 mx-[50px] max-[1200px]:mx-[35px] max-[800px]:mx-4">
                <div className="w-3/5 max-[1200px]:w-[65%] max-[800px]:w-full border-2 border-[#000000] p-4 flex flex-col gap-6">
                    <h1 className='text-3xl max-[1200px]:text-2xl max-[800px]:text-xl max-[500px]:text-lg font-semibold'>Shopping cart</h1>

                    <div className="flex flex-col gap-4">
                        {cart.map(item => {
                            return (
                                <CartItem 
                                    key={item.id} 
                                    item={item} 
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="w-2/5 h-fit max-[1200px]:w-[35%] max-[800px]:w-full border-2 border-[#000000] p-4">
                    <h1 className='text-lg font-medium'>Subtotal &#40;{items} item{items > 1 && 's'}&#41;: <span className='font-bold'>${price}</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Cart;
