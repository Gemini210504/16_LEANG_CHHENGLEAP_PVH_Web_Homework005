
import DashboardComponent from "@/components/dashBoardComponent";
import { getAllBook, getBooksByCategory } from "@/service/book-service";

import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link"; 

export default async function BookCategoryPage({ searchParams }) {

  const dataBook = await getAllBook();
  const categoryId = (await searchParams).categoryId;
  console.log(" CategoryId: ", categoryId)
  const dataBookCategory = await getBooksByCategory(categoryId);
  console.log("Data book by category : ", dataBookCategory)

  const booksToDisplay = categoryId ? dataBookCategory : dataBook;

  return (
    <>
      <DashboardComponent buttonName="All Books" book_category="true" />
      <div className="relative gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5 ">
        {booksToDisplay.payload.map((book) => (
          <Card key={book.id} shadow="sm">
            <CardBody className="grid grid-cols-2 gap-4">
              <div className="h-[180px]">
                <Image
                  alt={book.book_title}
                  className="absolute w-full h-full object-cover object-left-top"
                  radius="lg"
                  shadow="sm"
                  src={book.image}
                  width={140}
                  height={180}
                />
              </div>
              <div className="flex flex-col justify-between">
                <b>{book.book_title}</b>
                <p className="text-xs text-[#087E8B] font-bold line-clamp-5">
                  {book.description}
                </p>
              </div>
            </CardBody>

            <CardFooter className="text-small">
              <Link href={`/book_category/${book.id}`}>
                <Button>READ FULL ARTICLE</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}


