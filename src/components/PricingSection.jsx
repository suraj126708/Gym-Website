import Pricecard from "./SmallComponents/PriceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  // animaiton

  useGSAP(() => {
    gsap.from("#left-price", {
      x: -80,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#heading-price",
    });

    gsap.from("#right-price", {
      x: 80,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#heading-price",
    });
    gsap.from("#middle-price", {
      y: 80,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#heading-price",
    });

    gsap.from("#heading-price", {
      y: 160,
      opacity: 0,
      scale: 0.2,
      duration: 1,
    });
  });

  /////////////////////////////////

  return (
    <>
      <div
        id="price-card"
        className="h-[100vh] w-[100%] flex-col justify-center"
      >
        <h1
          id="heading-price"
          className="font-serif text-center text-green-500 text-4xl mt-8 mb-12"
        >
          READY TO START YOUR JOURNEY WITH US
        </h1>

        <div className=" flex justify-center items-center gap-4">
          <Pricecard id={"left-price"} />
          <Pricecard id={"middle-price"} />
          <Pricecard id={"right-price"} />
        </div>
      </div>
    </>
  );
}
