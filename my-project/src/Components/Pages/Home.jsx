import React  from "react";
import { latest, events, destinations }  from '../../assets/Home/HomeResource.js';

function Home() {
    
    return (
        <>
            <div className="grid gap-5">
                {
                    
                }
                <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg">
                    <h1 className="text-4xl py-5 text-black font-bold text-center">Milaano Tourism </h1>
                    <p className="text-center text-lg" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minima provident sed vel commodi repudiandae expedita, iste dolor molestiae distinctio doloribus debitis laudantium placeat alias aperiam nulla? Libero ipsa nulla veritatis numquam cumque dicta, reiciendis earum optio! Sequi fugit consequuntur aspernatur odio, culpa tempore debitis animi id soluta delectus placeat.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  p-5  my-5 justify-center items-center">
                    <div className="flex justify-center flex-col py-5 w-[100%]">
                        {
                            latest.map((item, index) => {
                                return (
                                    <div className="my-5 shadow-lg hover:shadow-md">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 rounded-md ">
                                            <div className="p-3">
                                                <img className="" src={item} alt="lorem20"/>
                                            </div>
                                            <div className="p-5">
                                                <h1 className="text-2xl text-center text-blue-400 font-bold">Lorem, ipsum</h1>
                                                <p className="text-center" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minima provident sed vel commodi repudiandae expedita, iste dolor molestiae distinctio doloribus debitis laudantium placeat alias aperiam nulla? Libero ipsa nulla veritatis numquam cumque dicta, reiciendis earum optio! Sequi fugit consequuntur aspernatur odio, culpa tempore debitis animi id soluta delectus placeat.</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=" mx-auto">
                        <div>
                            <h2 className=" text-center text-4xl text-black font-semibold ">News and Latest Event..</h2>
                        </div>
                        
                        {
                            events.map((item, index) => {
                                return (
                                    <div className="w-[80vw] my-5 mx-auto max-w-[360px] shadow-md hover:shadow-lg  overflow-hidden object-cover text-center ">
                                        <div className="grid grid-cols-1 rounded-md shadow-md group">
                                            <div className="p-3">
                                                <img className="max-h-[300px]" src={item.img} alt={item.desc}/>
                                            </div>
                                            <div className="p-3">
                                                <h2 className=" text-2xl text-center text-blue-500">{item.title}</h2>
                                                <p>{item.desc}</p>
                                            </div>
                                            <div className="p-3 my-3">
                                                <a href="/aboutus" className=" p-3 bg-blue-500 border text-white rounded-lg group-hover:bg-transparent transition-[3s] group-hover:border-blue-500 group-hover:text-blue-500">Explorer More ..</a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-5 py-10">
                <div className="p-5">
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-black">Destination  Guide</h2>
                        <p className="text-[2.5em] ">Holiday in Sri Lanka</p>
                        <p className="text-lg py-10">Sri Lanka is a meeting place of friendly faces who share their homes and trade; a space for spiritual healing; a land for learning from the old and the new; a hub of commercial activity; a spot for tranquility. Sri Lanka casts a spell unlike anywhere else. It draws people in, not with artificial attractions and grand gestures, but by spellbinding soul and sincerity.</p>
                        <a href="/findout" className="border border-blue-500 p-5 text-lg hover:bg-blue-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
                <div className="p-5 grid">
                    {
                        destinations.map((item, index) => {
                            return (
                                <>
                                    <div className="">
                                        <img className="max-h-[300px]" src={item} alt=""/>
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-5 py-10">
                <div className="p-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015322.2095558839!2d80.18777706428749!3d6.250238567687185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bad9013377%3A0x44238fe850f6f47e!2sSouthern%20Province!5e0!3m2!1sen!2slk!4v1736763874158!5m2!1sen!2slk" loading="lazy" style={{width:'95%',margin:'auto',height:'350px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="p-5">
                    <div className="">
                        <h2 className="text-[3.5em] font-extrabold text-black">Things to do</h2>
                        <p className="text-[2.5em] ">in Sri Lanka</p>
                        <p className="text-lg py-10">We want to share Sri Lanka's extraordinarily diverse and authentic story with the rest of the world. We want to help you discover the many thousands of different ways in which you can fall in love with our home & plan the perfect trip; local experts, local perspective and all the best tips on where to eat, what to do, who to meet, how to get there and where to make your next favourite memory.</p>
                        <a href="/findout" className="border border-blue-500 p-5 text-lg hover:bg-blue-500 hover:text-white">Find Out More </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home