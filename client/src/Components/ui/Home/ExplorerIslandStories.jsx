export function EXplorerIslandStories({ recaps, content }) {
    const myImgStyles = { backgroundSize:"cover" }
    const subContentParent = {
        position:"relative", justifyContent:"center", alignItems:"center",overflow:"hidden"
    }
    const myhoverContent = {
        position:"absolute", width:"100%", height:"100%", top:0, left:0, justifyContent:"center", 
        alignItems:"center", padding:".8em", transitionProperty:"hover", transitionDuraton:3, backgroundColor:"#52525b"
    }

    return (
        <div style={subContentParent} className="group">
            <div>
                <img src={recaps} class="w-[100%]" style={myImgStyles} alt="default Image"/>
            </div>
            <div style={myhoverContent} className="hidden  group-hover:flex">
                <p className="text-center text-white text-[1em] md:text-[1.5em]">{content}</p>
            </div>
        </div>
    );
}