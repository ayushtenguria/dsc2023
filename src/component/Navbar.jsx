import img from "../assets/react.svg";

export const Navbar = () => {
  return (
    <div className="">
      <nav className="shadow-lg">
        <div className="flex justify-around px-4 py-2 items-center text-lg mt-4">
          <div>
            <img src={img}></img>
          </div>
          <div className="flex justify-around space-x-14 items-center">
            <ul className="flex justify-between space-x-10 items-center">
              <li>What is Dsc</li>
              <li>How dsc works</li>
              <li>about</li>
              <li>Testimonial</li>
            </ul>
            <button className="px-3 py-2  rounded-full bg-slate-400">Register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
