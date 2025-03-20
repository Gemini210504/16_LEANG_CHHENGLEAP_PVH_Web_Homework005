
import React from "react";
import ButtonComponent from "./dashboard/homepage/button-component";
import FilterBookSelectComponent from "./filterBook-component";
import FilterCartoonSelectComponent from "./filterCartoon-component";

export default function DashboardComponent({
  buttonName,
  book_category,
  cartoonPage,
}) {
  return (
    <div className="w-[90%] p-5 mx-auto">
      <div className="border-b border-gray-500 p-5 mx-auto">
        <div className="flex flex-row justify-between">
          <div>
            <ButtonComponent buttonName={buttonName} />
          </div>

          <div>
            {book_category && <FilterBookSelectComponent  />}
            {cartoonPage && <FilterCartoonSelectComponent  />}
          </div>
        </div>
      </div>
    </div>
  );
}
