"use client"

import { useRouter } from "next/navigation";

export default function SelectFilter({ dataBookCategory }) {
    const router = useRouter();
  return (
    <>
      <select
        className="max-w-xs"
        label="Book Category"
        placeholder="Select a category"
        onChange={(e) =>
          router.replace(
            e.target.value === "all"
              ? "/book_category"
              : `/book_category?categoryId=${e.target.value}`
          )
        }
      >
        <option value="all">All Categories</option>

        {dataBookCategory.payload.length > 0 ? (
          dataBookCategory.payload.map((category) => {
            console.log("Category:", category);

            const categoryName = category?.book_cate_name;

            if (typeof categoryName === "string") {
              return (
                <option key={category.id} value={category.id}>
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
    </>
  );
}