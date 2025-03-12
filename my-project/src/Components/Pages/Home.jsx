import React  from "react";
import { mainImg, latest, events, destinations, recaps, icons }  from '../../assets/Home/HomeResource.js';


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
                                <div className="w-full min-h-[90vh] flex justify-center items-center bg-gray-200" style={{backgroundImage:`url(${item})`,backgroundSize:"cover"}}>
                                    <div className="w-[100%] p-5 min-h-[90vh] text-center bg-[#222222a0] mx-auto">
                                        <div className="w-[100%] md:w-[60%] mx-auto min-h-[90vh] grid place-items-center items-center">
                                            <div>
                                                <h1 className=" text-[1.5em] md:text-[3em]  text-gray-100 font-bold py-3">Milaano Hotels, Your Luxury Gateway to Sri Lankan Paradise</h1>
                                                <p className="text-lg text-white">Welcome to Milaano Hotels, where international travelers discover the true essence of Sri Lankan hospitality. Nestled along Sri Lanka's pristine coastline, our exclusive property offers a perfect blend of luxury, comfort, and authentic cultural experiences designed specifically for our foreign guests.</p>
                                                <button type="button" class="mt-5 bg-blue-500 text-white text-lg p-5 px-[50px] font-semibold hover:bg-blue-600">Explorer </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="flex py-5 w-[100%] max-w-[1320px] mx-auto">
                    <div className="w-[100%] lg:w-[65%] p-3">
                        <h2 className="text-blue-500 text-[2em] md:ml-[40px] font-semibold">About Us</h2>
                        <h2 className="text-xl pt-5 md:ml-[40px]">Unwind in our stunning infinity pool overlooking the Indian Ocean. Our poolside service ensures refreshing beverages and light snacks are always within reach as you soak in the tropical sunshine.</h2>
                        <div class="grid p-3 py-5 mt-5 gap-3  grid-cols-1">
                            <div className=" border border-blue-500 min-h-[200px] p-3 py-5 group hover:bg-blue-400 hover:translate-y-[-10px] duration-500">
                                <img src={icons[0]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Rooms</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Our rooms are designed to provide you with the ultimate comfort and relaxation. Each room is equipped with modern amenities and stunning views of the ocean.</p>
                            </div>
                            <div className=" border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 hover:translate-y-[-10px] duration-500">
                                <img src={icons[1]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl  font-bold group-hover:text-white">Staff</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Our staff is dedicated to providing you with exceptional service and ensuring that your stay with us is nothing short of perfect.</p>
                            </div>
                            <div className="border border-blue-500 min-h-[200px] py-5 p-3 group hover:bg-blue-400 hover:translate-y-[-10px] duration-500">
                                <img src={icons[2]} className="w-[50px] mx-auto" alt="available rooms"/>
                                <h2 className="text-black text-center text-xl font-bold group-hover:text-white">Client</h2>
                                <p className="text-gray-500 text-center group-hover:text-white">Our clients are our top priority. We strive to provide them with the best possible experience and exceed their expectations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] lg:w-[30%]">

                    </div>
                </div>
                {/* <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg w-[85%] max-w-[1300px] mx-auto">
                    <h1 className="text-[1.5em] md:text-[3em] py-5 text-black font-semibold text-center">Milaano Tourism </h1>
                    <p className="text-center text-[1.25em] md:text-[1.5em]" >I'd be happy to provide you with some details about Sri Lankan tourism to use as content for your website. Here's some information you might find useful: Sri Lanka is an island nation in South Asia known for its diverse landscapes, rich cultural heritage, and warm hospitality. With its tropical climate, beautiful beaches, ancient cities, and abundant wildlife, it offers a wide range of experiences for tourists.</p>
                </div> */}
                <div className="relative w-[100%] max-w-[1320px] mx-auto flex gap-5">
                    <div className="grid py-5 w-[100%] lg:w-[75%] md:w-[70%]">
                        {
                            latest.map((item, index) => {
                                return (
                                    <div className="my-5 shadow-lg hover:shadow-md" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
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
                    <div className="grid py-5 w-[100%] lg:w-[20%] md:w-[25%]">
                        <div>
                            <h2 className=" text-center text-4xl text-black font-semibold ">News and Latest Event..</h2>
                        </div>
                        {
                            events.map((item, index) => {
                                return (
                                    <div className="w-[80vw] my-5 mx-auto max-w-[350px] shadow-md hover:shadow-lg  overflow-hidden object-cover text-center ">
                                        <div className="grid grid-cols-1 rounded-md shadow-md group" >
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
                                    <div className="" >
                                        <img className="max-h-[300px]" src={item} alt=""/>
                                    </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-5 py-10">
                <div className="p-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015322.2095558839!2d80.18777706428749!3d6.250238567687185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bad9013377%3A0x44238fe850f6f47e!2sSouthern%20Province!5e0!3m2!1sen!2slk!4v1736763874158!5m2!1sen!2slk" loading="lazy" style={{width:'95%',margin:'auto',height:'350px'}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="p-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2 py-5" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
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
                    <div className="grid gap-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
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