import React  from "react";
import { mainImg, latest, events, destinations, recaps }  from '../../assets/Home/HomeResource.js';
import Swal from 'sweetalert2';

function Home() {

    // const showAlert = () => {
    //     Swal.fire('Hello!', 'This is a SweetAlert2 alert.', 'success');
    // };
    const myImgStyles = {
        backgroundSize:"cover"
    }

    const subContentParent = {
        position:"relative", justifyContent:"center", alignItems:"center",overflow:"hidden"
    }
    const myhoverContent = {
        position:"absolute", width:"100%", height:"100%", top:0, left:0, justifyContent:"center", 
        alignItems:"center", padding:".8em", transitionProperty:"hover", transitionDuraton:3, backgroundColor:"#2196fe"
    }
    return (
        <>
            <div className="grid gap-5">
                {
                    mainImg.map((item) => {
                        return (
                            <>
                                <div className="w-full min-h-[90vh] grid place-items-center" style={{backgroundImage:`url(${item})`,backgroundSize:"cover"}}>
                                    <div className="grid place-items-center grid-col-1 md:grid-cols-2 ">
                                        <div className="flex flex-col justify-content-center p-5">
                                            <h1 className="text-[4em] text-white font-bold py-3">Welcome to <br/>Sri Lanka</h1>
                                            <p className="text-lg text-white">Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Plak Strait.</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg w-[75%] max-w-[1200px] mx-auto">
                    <h1 className="text-4xl py-5 text-black font-bold text-center">Milaano Tourism </h1>
                    <p className="text-center text-lg" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minima provident sed vel commodi repudiandae expedita, iste dolor molestiae distinctio doloribus debitis laudantium placeat alias aperiam nulla? Libero ipsa nulla veritatis numquam cumque dicta, reiciendis earum optio! Sequi fugit consequuntur aspernatur odio, culpa tempore debitis animi id soluta delectus placeat.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  p-5  my-5 justify-center items-center">
                    <div className="grid place-items-center py-5 w-[100%]">
                        {
                            latest.map((item, index) => {
                                return (
                                    <div className="my-5 shadow-lg hover:shadow-md" data-aos="fade-down" data-aos-duration="1000">
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
                                    <div className="w-[80vw] my-5 mx-auto max-w-[360px] shadow-md hover:shadow-lg  overflow-hidden object-cover text-center " >
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

            <div className="grid justify-center grid-cols-1 md:grid-cols-2 p-5 py-10" >
                <div className="p-5" >
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

            <div >
                <h1 className="text-[2.5em] text-black text-center md:text-left font-semibold px-5">Explorer More Island Stories</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 py-5">
                    <div className="grid gap-2">
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[0]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 group" style={subContentParent} >
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[1]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                                </div>
                            </div>
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[2]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                                </div>
                            </div>
                        </div>
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[3]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 group" >
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[4]} class="w-[100%] " style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                                </div>
                            </div>
                            <div style={subContentParent} >
                                <div className="group">
                                    <div>
                                        <img src={recaps[7]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                    </div>
                                    <div style={myhoverContent} className="hidden  group-hover:flex">
                                        <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={subContentParent} className="group">
                            <div>
                                <img src={recaps[6]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                            </div>
                            <div style={myhoverContent} className="hidden  group-hover:flex">
                                <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                            </div>
                        </div>
                        <div className="grid">
                            <div style={subContentParent} className="group">
                                <div>
                                    <img src={recaps[8]} class="w-[100%]" style={myImgStyles} alt="default Image"/>
                                </div>
                                <div style={myhoverContent} className="hidden  group-hover:flex">
                                    <p className="text-lg text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam numquam delectus odio velit dolores in rerum quibusdam natus fugiat, at impedit error dolorum totam blanditiis tempora ut assumenda deserunt consectetur architecto.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" p-5 bg-bg-mainColor my-1">
                <div>
                    <h3 className="text-3xl px-5 font-semibold text-white">Subscribe Our Newslatter</h3>
                </div>
                <form action="">
                    <div className=" grid grid-cols-1 content-center items-center justify-center p-5 gap-3 md:grid-cols-2">
                        <div className="w-full">
                            <input type="text" id="newslatterEmail" placeholder="example123@gmail.com" className="w-full border border-green-400 focus:outline-none hover:outline-none p-4" name="newslatterEmail" required/>
                        </div>
                        <div className="">
                            <input type="submit" className=" text-lg bg-red-600 text-white p-4 px-7 hover:bg-red-500" value="Subscribe"/>
                        </div>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Home