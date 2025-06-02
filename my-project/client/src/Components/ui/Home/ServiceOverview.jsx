import { serviceOverview } from "../../../contents/home/serviceOverview";

export function ServiceOverview() {
    return (
        <div className="relative p-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center md:grid-cols- py-[3em] float:left">
                {
                    serviceOverview.map((service, index) => {
                        return (
                            <div className="w-[95%] scroll-items max-w-[320px] mx-auto min-h-[200px] p-3 py-5 group rounded-xl hover:rounded-lg duration-500 " key={`${index}-${service.title}`}>
                                <img src={service.icon} className="w-[50px] mx-auto" alt={service.title}/>
                                <h2 className="text-black text-center text-xl font-bold">{service.title}</h2>
                                <p className="text-gray-500 text-center">{service.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}