import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { shopData } from '../../lib/arrays/shopData';

function Footer() {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productsList = shopData
            .flatMap(category => category.products)

            const randomNumber = Math.floor(Math.random() * productsList.length);

            const randomProduct = productsList[randomNumber];
            
            setProduct(randomProduct);
    }, []);

    return (
        <div className='px-[50px] shadow-[0_0_8px_0_#00000045] centered'>
            <div className="py-12 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#454545]">
                <Link to={`/products/${product?.id}`} className='font-semibold'>Flash sale</Link>
                <Link to='/'>Dashboard</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
                <a href='https://www.github.com/PriyanshuSharma0326' target='_blank' rel='noreferrer'>GitHub</a>
                <a href='https://www.linkedin.com/in/PriyanshuSharma0326' target='_blank' rel='noreferrer'>LinkedIn</a>
            </div>
        </div>
    );
}

export default Footer;
