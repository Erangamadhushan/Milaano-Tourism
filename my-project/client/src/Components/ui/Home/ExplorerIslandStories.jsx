export function EXplorerIslandStories({ recaps, content }) {
    return (
        <div className="relative flex justify-center items-center overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-full h-full">
                <img 
                    src={recaps} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    alt="Sri Lanka destination story"
                />
            </div>
            <div className="absolute inset-0 bg-zinc-600 bg-opacity-80 flex justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-white text-sm md:text-lg leading-relaxed font-medium">
                    {content}
                </p>
            </div>
        </div>
    );
}