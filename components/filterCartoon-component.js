
import { getAllCartoonGenres } from "@/service/filter-cartoons-service";


export default async function FilterCartoonSelectComponent() {
  const dataCartoonGenres = await getAllCartoonGenres();
  console.log("Fetched genrs:", dataCartoonGenres);

  return (
    <div className="w-56 h-5 mr-20">
      <div className="max-w-xs mx-auto h-[20px] mb-20">
        <select
          className="max-w-xs"
          label="Cartoon genre"
          placeholder="Select a genres"
        >
          {dataCartoonGenres.payload.length > 0 ? (
            dataCartoonGenres.payload.map((genre) => {
              console.log("genre:", genre);

              const genreName = genre?.cartoon_genre;

              if (typeof genreName === "string") {
                return (
                  <option key={genre.id} value={genreName}>
                    {genreName}
                  </option>
                );
              } else {
                console.warn("Invalid genre name:", genreName);
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
