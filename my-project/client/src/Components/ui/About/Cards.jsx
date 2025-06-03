import React from 'react';
export function Cards({ person, index }) {
    return (
        <div className="w-[90%] md:w-[300px] bg-white shadow-lg rounded-lg p-3 m-2 scroll-up" key={index}>
            <img src={person.image} alt="" className="h-[200px] object-cover " />
            <h1 className="text-[1.5em] font-bold text-zinc-600 text-center py-3">{person.name}</h1>
            <p className="text-lg font-semibold">{person.role}</p>
            <p className="text-gray-500">{person.email}</p>
            <div className="flex justify-center persons-center gap-2 py-3">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-[1.5em] text-zinc-500 hover:text-zinc-800"></i></a>
                <a href={person.facebook} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook text-[1.5em] text-zinc-500 hover:text-zinc-800"></i></a>
            </div>

        </div>
    )
}