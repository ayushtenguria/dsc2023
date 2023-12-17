import sample from "../assets/globe.png";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="flex flex-row-reverse justify-between px-96 items-center pt-24">
          <div>
            <img className="h-96" src={sample}></img>
          </div>
          <div className="w-96 space-y-1">
            <p className="font-bold text-7xl">IEEE NSUT</p>
            <p className="font-bold text-7xl headingText">DSSYCS</p>
            <p className="font-bold text-xl text-gray-400 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="mb-10">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <button className="rounded-lg bg-blue-800 px-20 py-3 mt-10 text-white ">Click Here</button>
          </div>
        </div>
      </header>
    </div>
  );
};
