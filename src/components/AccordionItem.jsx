import React from "react";
import NotificationRow from "./NotificationRow";

const AccordionItem = ({data, open, onClick}) => {
  return (
    <div className={`${open ? 'max-h-full' : 'max-h-[50px]'} border m-border rounded-md mb-2`}>
      {/* TITLE */}
      <div
        className="w-full text-left p-3 focus:outline-none cursor-pointer"
        onClick={onClick}
      >
        <span className="font-bold text-justify">CASO NRO {data.idCase} - {data.nameUserCase}</span>
      </div>

      {/* ROW CASE INFORMATION */}
        {data.detailCase.map((detailCase) => (
          <NotificationRow
            nameCase={detailCase.nameCase}
            dateCase={detailCase.dateCase}
            resume={detailCase.resume}
            open={open}
            statusCase={data.statusCase}
          />
        ))}
      
    </div>
  );
};

export default AccordionItem