import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const bannerImage = 'https://firebasestorage.googleapis.com/v0/b/electronics-store-react.appspot.com/o/banner.jpeg?alt=media&token=4568f65f-81f4-4856-9d9b-3ff43aa7be51&_gl=1*1c5rmnv*_ga*MTUzNjc3MDU5Mi4xNjkzNzk5NTQ3*_ga_CW55HF8NVT*MTY5NjgyOTYzMC4xMjIuMS4xNjk2ODMwNDIxLjYwLjAuMA..';

function SharedLayout() {
    const { pathname } = useLocation();

    return (
        <>
            {
                !pathname.includes('auth') ? 
                <div className='max-w-screen h-screen'>
                    <Header />

                    {
                        pathname === '/' && 
                        <div className="w-full relative overflow-hidden">
                            <img className='w-full h-full object-cover' src={bannerImage} alt="" />

                            <div className="w-full h-full absolute top-0 left-0 bg-[#00000045] flex items-center ">
                                <h1 className='mx-[50px] max-[1200px]:mx-[35px] max-[800px]:mx-4 text-[#FFFFFF] text-4xl max-[1200px]:text-3xl max-[800px]:text-2xl max-[500px]:text-xl font-semibold'>E-commerce app</h1>
                            </div>
                        </div>
                    }

                    <Outlet />

                    <Footer />
                </div> : 
                <Outlet />
            }
        </>
    );
}

export default SharedLayout;
