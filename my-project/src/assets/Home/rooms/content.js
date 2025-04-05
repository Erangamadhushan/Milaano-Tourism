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
        room_amenities: [
            "Air Conditioning",
            "Flat-screen TV",
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
    }
];