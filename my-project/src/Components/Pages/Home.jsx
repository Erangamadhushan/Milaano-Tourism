import React  from "react";

function Home() {
    return (
        <>
            <div className="grid text-green-400">
                <h1 className="font-bold text-3xl">This is a Home Page </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>
                <button type="button" onClick={()=>window.alert("hello This is a home page")}>Click Me</button>
            </div>
        </>
    )
}

export default Home