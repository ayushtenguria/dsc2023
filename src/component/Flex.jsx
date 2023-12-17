export const Flex = () => {
  return (
    <section className="bg-blue-800 my-20">
      <div className="flex justify-center items-center rounded-md text-white">
        <div className="mx-10">
          <p className="text-4xl font-bold insideText">1200+</p>
          <p className="text-2xl font-bold">Participants</p>
          <button className="mt-5 font-semibold buttonGrad text-slate-700 px-6 py-2 rounded-xl">
            Click here
          </button>
        </div>
        <div className="my-2 mx-28 rounded-xl h-[200px] bg-slate-50 w-[2px]"></div>
        <div className="mx-10">
          <p className="text-4xl font-bold insideText">40+</p>
          <p className="text-2xl font-bold">Speaker</p>
          <button className="mt-5 font-semibold buttonGrad text-slate-700 px-6 py-2 rounded-xl">
            Click here
          </button>
        </div>
      </div>
    </section>
  );
};
