import { services } from '../../../assets/Services/content';

export default function MainServices() {
    return (
        services.map((service, index) => {
            return (
                <div className="p-5 my-10  mx-auto w-[95%] max-w-[1000px] scroll-reveal shadow-md" >
                    <h2 className="text-3xl font-bold text-zinc-700 pb-3 ">{service.title}</h2>
                    <hr/>
                    <h3 className="text-2xl font-semibold text-zinc-700 py-3 underline">{service.subTitle}</h3>
                    <p className=" text-xl py-2">{service.description}</p>
                    <ul>
                        {
                            service.ex.map((example) => {
                                return (
                                    <li className=" text-lg text-black">{example}</li>
                                )
                            })
                        }
                    </ul>
                    <p className="py-2 text-lg text-zinc-700 underline">{service.featureTitle}</p>
                    <ul className="py-4">
                        {
                            service.featureList.map((feature) => {
                                return (
                                    <li className="py-2 text-md text-black">{feature}</li>
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