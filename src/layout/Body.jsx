import React from "react";
import Card from "../components/Card";
import BackDrop from "../components/BackDrop";

const Body = () => {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      price: 10.98,
      description: "fresh banana from myanmar",
    },
    {
      id: 2,
      name: "Apple",
      price: 11,
      description: "fresh banana from thai",
    },

    {
      id: 3,
      name: "Mango",
      price: 8.5,
      description: "fresh banana from chinese",
    },
    {
      id: 4,
      name: "Kiwi",
      price: 15.8,
      description: "fresh banana from myanmar",
    },
    {
      id: 5,
      name: "Orange",
      price: 11.5,
      description: "fresh banana from myanmar",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </section>
  );
};

export default Body;
