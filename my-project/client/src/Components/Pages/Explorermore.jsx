import React from "react";
import { explorerContent } from "../../assets/Explorermore/explorerContent.js"
import useScrollReveal from '../../hooks/scrollReveal.js';
const Explorermore = () => {
    useScrollReveal();
  return (
    <div>
      <div className="w-[95%] mx-auto max-w-[1200px] my-10 scroll-up">
        <h3 className="py-3 text-[1.25em] md:text-[1.5em] text-center text-zinc-600">Sri Lanka's luxury hotels blend traditional hospitality with modern extravagance to create memorable experiences for discerning guests. The island's rich culture and natural beauty provide a perfect backdrop for exceptional hotel services tailored to special customers.</h3>
      </div>
      <div className="w-[95%] flex flex-wrap justify-center items-baseline mx-auto max-w-[1400px] my-5">
            {
              explorerContent.items.map((item, index) => {
                return (
                  <>
                    <div className="w-[95%] max-w-[400px] min-h-[420px]  mx-5 my-5 p-5 border border-zinc-200 rounded-lg shadow-md  scroll-up">
                      <h3 className="text-2xl text-center text-zinc-600 font-bold">{item.title}</h3>
                      <p className="text-center text-md text-gray-500 py-3 font-bold">{item.description}</p>
                      <ul className="text-md text-gray-500">
                        {
                          item.explorerItems.map((explorerItem, index) => {
                            return (
                              <li key={index} className="py-1">
                                {explorerItem}
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  
                  </>
                )
              })
            }
      </div>
    </div>
  );
};

export default Explorermore;