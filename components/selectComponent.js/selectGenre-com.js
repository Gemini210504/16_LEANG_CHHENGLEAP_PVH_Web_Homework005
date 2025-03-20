"use client";

import { useRouter } from "next/navigation";

export default function SelectFilter({ dataCartoonGenres }) {
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
              ? "/cartoonPage"
              : `/cartoonPage?genreId=${e.target.value}`
          )
        }
        // onChange={(e) =>
        //   router.replace(`/cartoonPage?genreId=${e.target.value}`)
        // }
      >
        <option value="all">All Genres</option>
        {dataCartoonGenres.payload.length > 0 ? (
          dataCartoonGenres.payload.map((category) => {
            console.log("Category:", category);

            const categoryName = category?.cartoon_genre;

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
