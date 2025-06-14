import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <div className="text-gray-600 mt-1">
        ⭐ {property.rating} · {property.address.city}, {property.address.country}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-full h-80 object-cover rounded-lg" />
        {/* Add more images if available */}
      </div>

      {/* Description Tabs Placeholder */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">What this place offers</h2>
        <ul className="flex flex-wrap gap-2">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
