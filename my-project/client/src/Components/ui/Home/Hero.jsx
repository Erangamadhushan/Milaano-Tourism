import React from 'react';
import { mainImg } from '../../../assets/Home/HomeResource';
export function Hero() {
    return (
        <div className="w-full min-h-[90vh] flex justify-center items-center bg-gray-200" style={{backgroundImage:`url(${mainImg})`,backgroundSize:"cover"}}>
            <div className="w-[100%] p-5 min-h-[90vh] text-center bg-[#222222a0] mx-auto">
                <div className="w-[100%] md:w-[60%] mx-auto min-h-[90vh] grid place-items-center items-center">
                    <div className="scroll-reveal">
                        <h1 className=" text-[1.5em] md:text-[3em]  text-gray-100 font-bold py-3">Milaano Hotels, Your Luxury Gateway to Sri Lankan Paradise</h1>
                        <p className="text-lg text-white">Welcome to Milaano Hotels, where international travelers discover the true essence of Sri Lankan hospitality. Nestled along Sri Lanka pristine coastline, our exclusive property offers a perfect blend of luxury, comfort, and authentic cultural experiences designed specifically for our foreign guests.</p>
                        <div className="py-4 my-3">
                            <a href="/explorermore" class="mt-5 bg-zinc-500 text-white text-lg p-5 px-[50px] font-semibold hover:bg-zinc-600">Explorer </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}