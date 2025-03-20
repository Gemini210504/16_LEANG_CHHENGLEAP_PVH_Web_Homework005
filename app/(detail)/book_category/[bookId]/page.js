
import HeaderBookDetailComponent from "@/components/details/headerBookDetail-component";
import { getBookById } from "@/service/book-service";
import { Card, Image } from "@heroui/react";

export default async function BookDetailPage({ params }) {
  console.log("bookdetailparams",params);
  const bookId = params.bookId;
  console.log("bookdetailId",bookId);
  const book = await getBookById(bookId);
  console.log("bookdetail", book);

  return (
    <div>
      <div>
        <HeaderBookDetailComponent bookTitle={book.payload.book_title} />
      </div>
      <div className="relative w-[90%]  bg-[#FFFFFF] shadow-sm flex justify-center p-4 mx-auto mt-20 rounded-[50px]">
        <div className="grid grid-cols-2 gap-2">
          <Card className="w-[300px] absolute top-[-70px] right-0 z-10 mr-20">
            <Image
              alt={book.payload.book_title}
              src={book.payload.image}
              className="object-cover h-auto"
            />
          </Card>

          <div className="text-sm text-gray-700 col-span-2 mt-36 p-10">
            <div className="flex flex-col mt-[80px] text-justify ">
              <h3 className="font-semibold text-[30px] ">
                {book.payload.book_title}
              </h3>
              <h4 className="font-semibold text-xl space-x-5 mb-16 mt-5">
                <span>by</span>
                <span className="text-[#087E8B]">
                  {book.payload.book_author}
                </span>
              </h4>
            </div>
            {book.payload.description}
          </div>
        </div>
      </div>
    </div>
  );
}
