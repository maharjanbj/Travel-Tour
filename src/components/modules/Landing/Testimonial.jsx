import React from "react";
import CardSlider from "../common/CardSlider";
import img20 from "../../../assets/images/img20.jpg";
import img21 from "../../../assets/images/img21.jpg";
import img22 from "../../../assets/images/img22.jpg";
import img9 from "../../../assets/images/img9.jpg"

const Testimonial = () => {
  const cards = [
    {
      image: img20,
      title: "Jony English",
      description:
        "Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque!",
    },
    {
      image: img21,
      title: "William Housten",
      description:
        "Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque!",
    },
    {
      image: img22,
      title: "Alison Wright",
      description:
        "Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque!",
    },
    {
      image: img9,
      title: "John Doe",
      description:
        "Dolorum aenean dolorem minima! Voluptatum? Corporis condimentum ac primis fusce, atque!",
    },
  ];
  return (
    <section id="section" className="h-auto w-full">
      <div className="h-full w-full my-10">
        <CardSlider cards={cards} />
      </div>
    </section>
  );
};

export default Testimonial;
