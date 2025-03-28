import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { roomContent } from '../../assets/Explorerroom/content.js';
import useScrollReveal from '../../hooks/scrollReveal.js';

function Exploreroom() {
    useScrollReveal();
    const [room, setRoom] = useState(null);

    return (
        <div className="w-[95%] max-w-[1200px] min-h-[50vh] mx-auto p-5 my-10 shadow-md">
            <div className="">
                <div className="">
                    
                </div>
            </div>
        </div>
    )
}

export default Exploreroom;