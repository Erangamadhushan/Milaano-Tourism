import react from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useScrollReveal from '../hooks/scrollReveal.js';

function Notfound() {
    useScrollReveal();
    return (
        <div className="w-[95%] max-w-[1200px] min-h-[50vh] mx-auto p-5 my-10 ">
            <h1 className="text-[1.5em] md:text-[3em] text-center text-red-500 font-bold py-10">404 Not Found</h1>
            <p className="text-center text-lg">The page you are looking for does not exist.</p>
        </div>
    )
}

export default Notfound;