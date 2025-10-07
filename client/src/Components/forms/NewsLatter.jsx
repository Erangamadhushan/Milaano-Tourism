import React from 'react';
export function NewsLatter() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.newslatterEmail.value;
        // Handle the email submission logic here, e.g., send it to an API
        console.log("Email submitted:", email);
        e.target.reset(); // Reset the form after submission
    };

    return (
        <div>
            <div>
                <h3 className="text-3xl px-5 font-semibold text-zinc-500">Subscribe Our Newslatter</h3>
            </div>
            <form onSubmit={handleSubmit} >
                <div className=" grid grid-cols-1 content-center items-center justify-center p-5 gap-3 md:grid-cols-2">
                    <div className="w-full">
                        <input type="text" id="newslatterEmail" placeholder="example123@gmail.com" className="w-full border border-zinc-400 text-zinc-500 focus:outline-none hover:outline-none p-4" name="newslatterEmail" required/>
                    </div>
                    <div className="">
                        <input type="submit" className=" text-lg bg-zinc-600 text-white p-4 px-7 hover:bg-zinc-800 cursor-pointer" value="Subscribe"/>
                    </div>
                </div>
            </form>
        </div>
    )
}