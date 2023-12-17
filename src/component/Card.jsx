import rachna from "../assets/Rachana.jpg";

export const Card = () => {
  return (
    <div className="shadow-2xl rounded-lg bg-gray-100 px-4 py-6 ">
      <img className="h-56 mb-4" src={rachna} alt="" />
      <p className="font-semibold text-xl">Prof. Rachana Garg</p>
      <p className="font-semibold text-gray-400">SAC Chair</p>
    </div>
  );
};
