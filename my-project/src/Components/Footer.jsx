import { NavLink } from "react-router-dom"
export default function Footer() {
    return (
        <div className="grid">
            <div className="grid grid-cols-2 bg-gray-800 md:grid-cols-4 custom:grid-cols-2">
                <div className="grid p-5 py-10">
                    <a href="https://www.srilanka.travel/" className="text-white hover:text-orange-400" target="_blank">Sri Lanka Travel</a>
                    <a href="https://nationalholidayresorts.lk/" className="text-white hover:text-orange-400" target="_blank">National Holiday Resorts</a>
                    <a href="https://www.slithm.edu.lk/" target="_blank" className="text-white hover:text-orange-400">Sri Lanka Institude of Tourism & Hotel Management</a>
                    <a href="https://www.worldtravelawards.com/" target="_blank" className="text-white hover:text-orange-400">Tourism Awards</a>
                </div>
                <div className="grid p-5 py-10 items-center">
                    <a target="_blank" className="text-white hover:text-orange-400" href="https://www.google.lk/maps/@7.8417541,80.7728782,7.75z">Site Map</a>
                    <a href="/aboutus" className="text-white hover:text-orange-400">Complaints</a>
                </div>
                <div className="bg-bg-mainColor p-3 py-10">
                    <div className="grid gap-1">
                        <a href="/contact" className="text-white hover:text-orange-400 font-bold text-xl">Contact Us</a>
                        <h4  className="text-white font-bold text-xl">Address</h4>
                        <p className="text-white">
                            Sri Lanka Tourism Development
                            Authority
                            No 80.Galle road.
                            Colombo 03
                        </p>
                        <h4 className="text-white font-bold text-xl">Telephone</h4>
                        <p className="text-white">
                            +94 112345678/
                            0123456789
                        </p>
                    </div>
                </div>

                <div className="bg-bg-mainColor p-3 py-10">
                    <div className="text-white">
                        <h4 className="font-bold text-xl">Fax</h4>
                        <p>
                            +94 112 444165/2426984
                        </p>
                        <h4 className="font-bold text-xl">Email</h4>
                        <p>
                            info@beautysrilanka.travel
                        </p>
                    </div>
                </div>

            </div>
            <div class="bg-gray-900 p-3">
                <h1 className="text-white text-center">Powered by EM956 Community</h1>
            </div>
            
            
        </div>
    )
}

