import React, { useState } from "react";
import "./Accordian.css";
import AccordianItem from "./AccordianItem";

// Sample data, replace this with your actual data
const data = [
  {
    num: 1,
    title: "Can I cancel my subscription at anytime?",
    text: "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
  },
  {
    num: 2,
    title: "Can I change my plan later on?",
    text: "Absolutely! You can upgrade or downgrade your plan anytime.",
  },
  {
    num: 3,
    title: "Can I request a refund?",
    text: "Sure, you will be welcome to request your refund within 14 days of subscribing to any paid plan.",
  },
];

const Accordian = () => {
  // Ensure the default state is null (no item is open initially)
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // Toggle the item open/close state
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordian">
      {data.map((item, index) => (
        <AccordianItem
          key={item.num}
          num={item.num}
          title={item.title}
          text={item.text}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordian;
