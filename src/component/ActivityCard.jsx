import SpokeIcon from "@mui/icons-material/Spoke";

export const ActivityCard = () => {
  return (
    <div className="shadow-2xl rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 px-4 py-6 h-60 w-52">
      <div className="flex justify-center">
        <SpokeIcon
          className="text-white"
          fontSize="large"
          sx={{
            width: 50,
            height: 50,
          }}
        />
      </div>
      <p className="flex justify-center font-semibold text-white text-xl">Network</p>
      <p className="flex justify-center font-semibold text-gray-100 mt-5 ">Network and build Relationship with other volunteer within IEEE</p>
    </div>
  );
};
