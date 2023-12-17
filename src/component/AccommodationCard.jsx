import { Link } from "react-router-dom";

const AccommodationCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-xl font-semibold">
          Accommodation Title
        </h2>
        <p className="text-gray-600 mt-2">Accommodation content goes here.</p>
      </div>
      <div className="px-4 py-2">
        {/* <Link to="/booking-form">
          <button className="bg-blue-500 text-white rounded px-4 py-2">Book Now</button>
        </Link> */}
        <a href="/booking-form">
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default AccommodationCard;
