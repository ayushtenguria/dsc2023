import { Card } from "./Card";

export const Committe = () => {
  return (
    <section>
      <div>
        <div className="flex justify-center text-5xl font-extrabold mt-32 mb-16">
          <p className="headingText">Student Activities Committee</p>
        </div>
        <div className="flex justify-evenly mb-8">
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};
