export function Exclusive({title, description}) {
    // This component is designed to showcase an exclusive offer or package.
    return (
        <div className="w-[95%] max-w-[350px] my-4 mx-auto p-4 shadow-xl shadow-zinc-300 scroll-up">
            <h2 class="text-center text-[1.5em] text-zinc-700 py-3">{ title }</h2>
            <p class="text-center">{ description }</p>
        </div>
    )
}