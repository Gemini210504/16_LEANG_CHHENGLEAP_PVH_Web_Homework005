
import { getAllBookCategory } from "@/service/filter-books-service";

export default async function FilterBookSelectComponent() {
  const dataBookCategory = await getAllBookCategory();
  console.log("Fetched Categories:", dataBookCategory);

  return (
    <div className="w-56 h-5 mr-20">
      <div className="max-w-xs mx-auto h-[20px] mb-20">
        <select
          className="max-w-xs"
          label="Book Category"
          placeholder="Select a category"
        >
          {dataBookCategory.payload.length > 0 ? (
            dataBookCategory.payload.map((category) => {
              console.log("Category:", category);

              const categoryName = category?.book_cate_name;

              if (typeof categoryName === "string") {
                return (
                  <option key={category.id} value={categoryName} >
                    {categoryName}
                  </option>
                );
              } else {
                console.warn("Invalid category name:", categoryName);
                return null;
              }
            })
          ) : (
            <option disabled>No categories available</option>
          )}
        </select>
      </div>
    </div>
  );
}
