import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Serenity",
    rating: 4.5,
    address: { city: "Lagos", country: "Nigeria" },
    image: "/images/villa.jpg",
    description: "A serene villa near the beach...",
    category: ["Wi-Fi", "Air Conditioning", "Swimming Pool"],
    price: 150,
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/john.jpg",
        rating: 5,
        comment: "Wonderful stay! Highly recommended.",
      },
      {
        name: "Jane Smith",
        avatar: "/images/jane.jpg",
        rating: 4,
        comment: "Great location and clean rooms.",
      },
    ],
  },
  // Add more mock data...
];
