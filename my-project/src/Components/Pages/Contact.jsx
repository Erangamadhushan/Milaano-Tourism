import React  from "react";
export default function Contact() {
    return (
        <>
            <div className="grid text-green-400">
                <h1 className="font-bold text-3xl">This is a Contact Page </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>
                <button type="button" onClick={()=>window.alert("hello This is a home page")}>Click Me</button>
            </div>
        </>
    )
}