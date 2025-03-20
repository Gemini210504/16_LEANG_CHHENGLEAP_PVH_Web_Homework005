
"use client";

import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function BookCardComponent({dataBook}) {
  const router = useRouter();
  console.log("Get book: ", dataBook)

  return (
    <>
      <div className="relative gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5 ">
        {dataBook.payload.map((book) => (
          <Card
            key={book.id}
            // isPressable
            shadow="sm"
            // onPress={() => console.log("item pressed")}
          >
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
              <Button onClick={() => router.push(`/book_category/${book.id}`)}>
                READ FULL ARTICLE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
