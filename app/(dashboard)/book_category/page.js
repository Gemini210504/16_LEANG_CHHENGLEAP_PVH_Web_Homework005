
import DashboardComponent from "@/components/dashBoardComponent";
import BookCardComponent from "@/components/dashboard/book/bookCard-component";
import { getAllBook } from "@/service/book-service";

export default async function BookCategoryPage() {
  const dataBook =await getAllBook();

  return (
    <>
      <DashboardComponent buttonName="All Books" book_category="true" />
      <BookCardComponent dataBook={dataBook} />
    </>
  );
}
