export function Exclusive({title, description}) {
    // This component is designed to showcase an exclusive offer or package.
    return (
        <div className="w-[95%] max-w-[350px] my-4 mx-auto p-6 bg-white rounded-lg shadow-xl shadow-zinc-300 scroll-up hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
            <h2 className="text-center text-[1.5em] text-zinc-700 py-3 font-semibold">{title}</h2>
            <p className="text-center text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}