export function BookRoom() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-5 w-[95%] max-w-[800px] mx-auto justify-center">
                    <h2 className="text-white font-bold text-[1.75em] md:text-[3em]">Discover A Brand Luxurious Hotel</h2>
                    <p className="text-white text-[1.25em] md:text-[1.75] py-5">Our opulent rooms and suites redefine luxury with handcrafted furniture, Egyptian cotton linens, and panoramic views. Indulge in marble bathrooms with rainfall showers, smart climate control, and curated mini-bars featuring artisanal selections for an unparalleled retreat.</p>
                    <div className="py-4">
                    <a href="/bookroom" className=" hover:bg-zinc-400 m-4 my-10 p-5 hover:text-white duration-300 bg-white text-zinc-500 font-bold ">Book Room</a>
                    </div>
            </div>
        </div>
    )
}