
import HeaderCartoonDetailComponent from "@/components/details/headerCartoonDetail-component";
import { getCartoonById } from "@/service/cartoon-service";
import { Card, Image } from "@heroui/react";
import { Eye } from "lucide-react";

export default async function CartoonDetailPage({ params }) {
  console.log("cartoondetailparams", params);
  const cartoonId = params.cartoonId;
  console.log("cartoondetailId", cartoonId);
  const cartoon = await getCartoonById(cartoonId);
  console.log("cartoondetail", cartoon);

  return (
    <div>
      <div>
        <HeaderCartoonDetailComponent cartoonTitle={cartoon.payload.ct_title} />
      </div>
      <div className="relative w-[90%]  bg-[#FFFFFF] shadow-sm flex justify-center p-4 mx-auto mt-20 rounded-[50px]">
        <div className="grid grid-cols-2 gap-2">
          <Card className="w-[300px] absolute top-[-70px] right-0 z-10 mr-20">
            <Image
              alt={cartoon.payload.ct_title}
              src={cartoon.payload.image}
              className="object-cover h-auto"
            />
          </Card>

          <div className="text-sm text-gray-700 col-span-2 mt-28 p-10">
            <div className="flex flex-col mt-[80px] text-justify ">
              <h3 className="font-semibold text-[30px] ">
                {cartoon.payload.ct_title}
              </h3>
              <h4 className="font-semibold text-xl space-x-5 mt-10">
                <span>by</span>
                <span className="text-[#087E8B]">
                  {cartoon.payload.ct_creator}
                </span>
              </h4>
              <h4 className="flex flex-row space-x-5 mt-5 mb-10 text-[18px] text-[#087E8B]">
                <Eye />
                <span>{cartoon.payload.view_count}</span>
                <span>
                  {" "}
                  | {cartoon.payload.published_year}
                </span>{" "}
              </h4>
            </div>
            {cartoon.payload.ct_description}
          </div>
        </div>
      </div>
    </div>
  );
}
