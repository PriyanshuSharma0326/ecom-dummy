import React from 'react';

function Input({ inputOptions, labelText, errorText }) {
    return (
        <div className='w-full flex flex-col gap-2 max-[500px]:gap-1'>
            <div className="flex items-center justify-between">
                <label htmlFor={inputOptions.id} className='text-base font-semibold text-[#000000]'>{labelText}</label>
            
                <p className='text-sm text-[#EF4444]'>{errorText}</p>
            </div>

            <input 
                className='outline-none border border-[#BFBFBF] bg-[#F3F3F3] px-3 max-[500px]:px-4 py-4 max-[500px]:py-2 rounded-[9px] text-base text-[#000000] placeholder:text-[#666666]' 
                { ...inputOptions } 
            />
        </div>
    );
}

export default Input;

