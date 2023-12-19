import Galleria from "./gallery/Gallery";

export const Gallery = () => {
  return (
    <>
      <section className="bg-blue-800 my-20">
        <div>
          <div className="flex justify-center">
            <p className="text-5xl font-bold insideText">Galleria</p>
          </div>
          <div>
            <Galleria/>
          </div>
        </div>
      </section>
    </>
  );
};
