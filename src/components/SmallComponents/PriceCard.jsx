import PricingProperties from "./PricingListProperties";

export default function Pricecard({ id }) {
  return (
    <div
      id={id}
      className={`${
        id === "middle-price"
          ? "h-[78vh] bg-gradient-to-r from-lime-600 to-teal-600"
          : "h-[70vh] bg-white"
      } w-[50vh] p-6 text-black flex flex-col justify-evenly items-center rounded-sm shadow-lg`}
    >
      <i className="fa-solid fa-dumbbell text-4xl mb-3" />
      <h2 className="text-xl font-semibold">BASE PLAN</h2>
      <h1 className="text-4xl font-bold">$ 300</h1>
      <ul className="space-y-2 w-full text-center">
        <PricingProperties />
        <PricingProperties />
        <PricingProperties />
      </ul>
      <button className="mt-4 px-9 py-3 bg-yellow-500 text-black font-semibold rounded-sm hover:bg-yellow-600 transition-colors duration-300">
        JOIN NOW
      </button>
    </div>
  );
}
