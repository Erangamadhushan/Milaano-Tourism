import { subServices } from "../../../assets/Services/content";

export default function SubServices() {
    return (
         subServices.map((subservice) => {
            return (
                <div className="p-5 scroll-up py-5 my-5  mx-auto w-[95%] max-w-[600px] shadow-lg">
                    <h2 className="text-3xl text-zinc-700 py-3">{subservice.title}</h2>
                    <p className="text-xl">{subservice.subTitle}</p>
                    <ul className="py-4">
                        {
                            subservice.item.map((item) => {
                                return (
                                    <li className="py-1">
                                        <p className=" text-lg">{item.title}</p>
                                        <p className="">-{item.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="py-3">
                        <a href="./findout" className="my-5 p-5 px-10 text-white bg-coral">Find Out</a>
                    </div>
                </div>
            )
        })
    )
}