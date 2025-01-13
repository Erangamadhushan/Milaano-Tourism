import React  from "react";
import { latest }  from '../../assets/Home/HomeResource.js';

function Home() {
    return (
        <>
            {/* <div className="grid text-green-400">
                <h1 className="font-bold text-3xl">This is a Home Page </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>
                <button type="button" onClick={()=>window.alert("hello This is a home page")}>Click Me</button>
            </div> */}
            <div className="grid">
                <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg">
                    <h1 className="text-4xl py-5 text-blue-400 font-bold text-center">Milaano Tourism </h1>
                    <p className="text-center text-lg" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minima provident sed vel commodi repudiandae expedita, iste dolor molestiae distinctio doloribus debitis laudantium placeat alias aperiam nulla? Libero ipsa nulla veritatis numquam cumque dicta, reiciendis earum optio! Sequi fugit consequuntur aspernatur odio, culpa tempore debitis animi id soluta delectus placeat.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-5 justify-center">
                    <div className="w-[80vw] max-w-[600px]">
                        <div className="max-w-[380px]">
                            <div className="grid grid-cols-1 rounded-md border border-blue-500">
                                <div className="p-3">
                                    <img className="" src={latest[0]} alt="lorem20"/>
                                </div>
                                <div className="px-3">
                                    <h1 className="text-2xl text-blue-400 font-bold">Lorem, ipsum</h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[380px]">
                            <div className="grid grid-cols-1 rounded-md border border-blue-500">
                                <div className="p-3">
                                    <img className="" src={latest[1]} alt="lorem20"/>
                                </div>
                                <div className="px-3">
                                    <h1 className="text-2xl text-blue-400 font-bold">Lorem, ipsum</h1>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-[380px]">
                            <div className="grid grid-cols-1 rounded-md border border-blue-500">
                                <div className="p-3">
                                    <img className="" src={latest[2]} alt="lorem20"/>
                                </div>
                                <div className="px-3">
                                    <h1 className="text-2xl text-blue-400 font-bold">Lorem, ipsum</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className=" text-center text-2xl text-blue-500">News and Latest Event..</h2>
                        </div>
                        <div className="max-w-[380px] text-center ">
                            <div className="grid grid-cols-1 rounded-md border border-blue-500">
                                <div className="p-3">
                                    <img className="" src={latest[3]} alt="lorem20"/>
                                </div>
                            </div>

                        </div>
                        <div className=" w-[80vw] mx-auto max-w-[380px] text-center ">
                            <div className="grid grid-cols-1 rounded-md border border-blue-500">
                                <div className="p-3">
                                    <img className="max-h-[300px]" src={latest[4]} alt="lorem20"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home