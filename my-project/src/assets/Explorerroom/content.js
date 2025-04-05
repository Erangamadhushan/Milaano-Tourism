import babyroom from './BabyRoom.jpg';
import familyroom from './FamilyRoom.jpg';
import LuxuryRoom from './LuxuryRoom.jpg';
import EconomyRoom from './EconomyRoom.jpg';

const roomCategory = [babyroom, familyroom, LuxuryRoom, EconomyRoom];
export const roomContent = [
    {
        room_type:"Standard/Economy Room",
        room_price: 2000,
        room_capacity: 2,
        room_image:roomCategory[0],
        room_description: "A standard room with basic amenities. Suitable for budget travelers.",
        room_features: [
            "Most basic and affordable room type",
            "Typically includes a queen or twin beds",
            "Basic amenities like TV, private bathroom, and minimal furnishings",
            "Suitable for budget-conscious travelers or short stays"
        ],
        oom_amenities: [
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    },
    {
        room_type: "Deluxe Room",
        room_price: 3500,
        room_capacity: 3,
        room_image:roomCategory[1],
        room_description: "A step up from standard rooms, offering more space and better amenities.",
        room_features: [
            "Slightly upgraded from standard rooms",
            "More spacious with better views",
            "Additional amenities like mini-refrigerator or coffee maker",
            "Often includes a seating area or balcony",
            "More comfortable bedding and slightly more sophisticated decor"
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    },
    {
        room_type: "Luxury Room",
        room_price: 5000,
        room_capacity: 4,
        room_image:roomCategory[2],
        room_description: "High-end rooms with premium amenities and services.",
        room_features: [
            "High-end accommodation with premium amenities",
            "Larger space with elegant furnishings",
            "High-quality bedding, often with designer linens",
            "Additional amenities like espresso machines, premium toiletries, and minibars",
            "Potentially includes access to exclusive hotel services."
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    },
    {
        room_type: "Suite Room",
        room_price: 7000,
        room_capacity: 4,
        room_image:roomCategory[3],
        room_description: "Spacious rooms with separate living areas and luxury amenities.",
        room_features: [
            "Separate living and sleeping areas",
            "Multiple rooms, often including a living room and bedroom",
            "Kitchenette or full kitchen in some cases",
            "Ideal for families or extended stays",
            "May include dining area and multiple bathrooms"
        ]
    },
    {
        room_type: "Executive Room",
        room_price: 8000,
        room_capacity: 4,
        room_image:roomCategory[0],
        room_description: "Rooms designed for business travelers with additional amenities.",
        room_features: [
            "Designed for business traverlers",
            "Work desk with ergonomic chair",
            "High-speed internet access",
            "Additional electical outlets and USB ports",
            "Sometimes includes access to business center or lounge"
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    },
    {
        room_type: "Family Room",
        room_price: 7500,
        room_capacity: 5,
        room_image:roomCategory[1],
        room_description: "Larger rooms or suites designed to accommodate families.",
        room_features: [
            "Specifically designed for families",
            "Multiple beds or adjoining rooms",
            "Child-friendly amenities like cribs or play areas",
            "Extra space for children to play",
            "Sometimes includes kid-specific entertainment options"
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    },
    {
        room_type: "Accessible Room",
        room_price: 6500,
        room_capacity: 2,
        room_image:roomCategory[2],
        room_description: "Rooms designed for guests with mobility or accessibility needs.",
        room_features: [
            "Specially designed for guests with disabilities",
            "Wider doorways and hallways",
            "Adapted bathroom with grab bars and roll-in showers",
            "Lower counters and accessible facilities",
            "Safety features for guests with mobility challenges"
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    }, {
        room_type: "Penthouse Room",
        room_price: 10000,
        room_capacity: 4,
        room_image:roomCategory[3],
        room_description: "Luxury rooms located on the top floor with stunning views.",
        room_features: [
            "Top-floor accommodation with panoramic views",
            "Largest and most expensive room category",
            "Panoramic views of the city or landscape",
            "Multiple bedrooms and bathrooms",
            "Private terrace or balcony",
            "Highest level of personalized service and amenities",
            "Often includes private check-in exclusively for penthouse guests",
            "Access to exclusive hotel services and facilities",
        ],
        room_amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Flat-screen TV",
            "Coffee Maker",
            "Room Service"
        ]
    }
];