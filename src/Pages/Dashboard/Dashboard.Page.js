import React, { useEffect, useRef, useState } from 'react';
import { shopData } from '../../lib/arrays/shopData';
import ProductCard from '../../Components/ProductCard/ProductCard';

function Dashboard() {
    const containerRef = useRef(null);

    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.clientHeight);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });
    
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
    
        updateHeight();

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} style={{ minHeight: `calc(100vh - 76px - 32px - ${containerHeight}px)` }} className='w-[1536px] max-[1536px]:w-full mx-auto'>
            <div className="py-12 max-[1200px]:py-10 max-[800px]:py-8 max-[500px]:py-6 grid grid-cols-4 max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[500px]:grid-cols-1 gap-x-6 gap-y-6 mx-[50px] max-[1200px]:mx-[35px] max-[800px]:mx-4">
                {shopData.map(category => {
                    return (
                        <ProductCard 
                            key={category.products[0].id} 
                            product={category.products[0]}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Dashboard;
