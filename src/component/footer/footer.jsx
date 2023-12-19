import Logo from "../../assets/ieee-logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="p-20 bg-blue-800 text-white rounded-tl-[5rem] rounded-tr-[5rem]">
        <div className="flex flex-row justify-around">
          <div className="">
            <img src={Logo} alt="logo" />
            <p className="my-10 max-w-sm">
              © Copyright IEEE - All rights reserved. A not-for-profit
              organization, IEEE is the world's largest technical professional
              organization dedicated to advancing technology for the benefit of
              humanity.
            </p>
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <p>Address</p>
            <div>
              <p>Netaji Subhas University of Technology</p>
              <p>Sector -3,Dwarka</p>
              <p>New Delhi - 110078</p>
            </div>
            <div>
              <p>ieee@nsut.ac.in</p>
            </div>
            <div>
              <p className="font-semibold">Prerna Yadav</p>
              <p>Section Student Representative : +91 99999 99999</p>
              <p className="font-semibold">Ashmita</p>
              <p>Section Student Representative : +91 99999 99999</p>
            </div>
          </div>
          <div className="">
            <p>Link</p>
            <ul className="mt-4 flex flex-col space-y-1">
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
              <li>
                <a className="hover:underline" href="">
                  Link
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div></div>
            <div>
              <h2 className="font-semibold text-lg">
                Interested in sponsoring us?
              </h2>
            </div>
            <div>
              <a href="">
                <button className="mt-5 font-semibold buttonGrad text-slate-700 px-6 py-2 rounded-xl hover:shadow-black hover:shadow-md">
                  Sponsor Us
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul></ul>
        </div>
      </footer>
    </>
  );
};
