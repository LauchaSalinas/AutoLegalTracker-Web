import React, { useState } from "react";
import notificationData from '../debug/axiosData';
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Returning acordeon component
  return (
    <div className='w-[95%] min-h-[350px] max-h-[400px] p-5 flex flex-col justify-items-start items-center bg-white rounded-md shadow-md overflow-y-auto'>
    {notificationData.data.map((notificationObj,index) => (
      // Returning each item 
      <AccordionItem
        key={notificationObj.idCase}
        open={activeIndex === index}
        data={notificationObj}
        onClick={() => toggleAccordion(index)}
      />  
    ))}
    </div>
  )
  
};
  
export default Accordion
