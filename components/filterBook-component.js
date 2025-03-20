
import { getAllBookCategory } from "@/service/filter-books-service";
import SelectFilter from "./selectComponent.js/select-com";

export default async function FilterBookSelectComponent() {
  const dataBookCategory = await getAllBookCategory();
  console.log("Fetched Categories:", dataBookCategory);

  return (
    <div className="w-56 h-5 mr-20">
      <div className="max-w-xs h-[20px] mb-20 mx-auto">
        <SelectFilter dataBookCategory={dataBookCategory} />

      </div>
    </div>
  );
}
