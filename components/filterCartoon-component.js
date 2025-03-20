
import SelectGenreFilter from "./selectComponent.js/selectGenre-com";
import { getAllCartoonGenres } from "@/service/filter-cartoons-service";


export default async function FilterCartoonSelectComponent() {
  const dataCartoonGenres = await getAllCartoonGenres();
  console.log("Fetched genres:", dataCartoonGenres);

  return (
    <div className="w-56 h-5 mr-20">
      <div className="max-w-xs h-[20px] mb-20 mx-auto">
        <SelectGenreFilter dataCartoonGenres={dataCartoonGenres} />
      </div>
    </div>
  );
}
