import DashboardComponent from "@/components/dashBoardComponent";
import { getAllCartoons, getCartoonByGenre } from "@/service/cartoon-service";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";

export default async function CartoonPage({ searchParams }) {
  const dataCartoon = await getAllCartoons();
  console.log("Data : ", dataCartoon);

  const genreId = (await searchParams).genreId;
  console.log(" genreId: ", genreId);

  const dataCartoonByGenre = await getCartoonByGenre(genreId);
  console.log("Data genre by category : ", dataCartoonByGenre);

  const CartoonsToDisplay = genreId ? dataCartoonByGenre : dataCartoon;


  return (
    <>
      <DashboardComponent buttonName="All cartoons" cartoonPage="true" />
      <div className="flex justify-center">
        <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 p-5 ">
          {CartoonsToDisplay.payload.map((cartoon) => (
            <Link href={`/cartoonPage/${cartoon.id}`} key={cartoon.id}>
              <Card key={cartoon.id} isPressable shadow="sm">
                <CardBody className="overflow-visible p-0 ">
                  <Image
                    alt={cartoon.ct_title}
                    className="w-[500px] object-cover h-[340px]"
                    radius="lg"
                    shadow="sm"
                    src={cartoon.image}
                    width="100%"
                  />
                </CardBody>
                <CardFooter className="text-small flex flex-col">
                  <b>{cartoon.ct_title}</b>
                  <div className="flex flex-row  space-x-4">
                    <Eye />
                    <span>{cartoon.view_count}</span>
                    <span> | </span>
                    <span>{cartoon.published_year}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
