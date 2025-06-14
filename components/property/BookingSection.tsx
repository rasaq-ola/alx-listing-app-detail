import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diffTime = Math.abs(outDate.getTime() - inDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return isNaN(diffDays) ? 0 : diffDays;
  };

  const nights = calculateNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
      </div>

      <div className="mt-4 text-sm">
        Total payment: <strong>${total}</strong>
      </div>

      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
