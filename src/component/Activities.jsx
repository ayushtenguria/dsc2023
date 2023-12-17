import { ActivityCard } from "./ActivityCard";

export const Activities = () => {
  return (
    <section className="my-24">
      <div className="flex justify-center">
        <p className="headingText text-5xl font-bold">DSC Activities</p>
      </div>
      <div className="flex justify-between px-96 my-28">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </section>
  );
};
