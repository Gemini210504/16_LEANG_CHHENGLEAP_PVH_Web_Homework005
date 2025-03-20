"use client";

import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Eye} from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartoonCardComponent({ dataCartoon }) {
   const router = useRouter();

   const handleCardClick = (cartoonId) => {
     router.push(`/cartoonPage/${cartoonId}`);
   };
  return (
    <>
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 p-5">
        {dataCartoon.payload.map((cartoon) => (
          /* eslint-disable no-console */
          <Card
            key={cartoon.id}
            isPressable
            shadow="sm"
            onClick={() => handleCardClick(cartoon.id)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={cartoon.ct_title}
                className="w-full object-cover h-[340px]"
                radius="lg"
                shadow="sm"
                src={cartoon.image}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b>{cartoon.ct_title}</b>
              <div className="flex flex-row  space-x-5">
                <Eye />
                {cartoon.view_count}
                <span> | {cartoon.published_year}</span>{" "}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

// "use client";

// import { Card, CardBody, CardFooter, Image } from "@heroui/react";
// import { Eye} from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function CartoonCardComponent({ dataCartoon }) {
//    const router = useRouter();

//    const handleCardClick = (cartoonId) => {
//      router.push(`/cartoonPage/${cartoonId}`);
//    };
//   return (
//     <>
//       <div className="relative gap-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-5 ">
//         {dataCartoon.payload.map((cartoon) => (
//           <Card
//             key={cartoon.id}
//             isPressable
//             shadow="sm"
//             // onPress={() => console.log("item pressed")}
//             onClick={() => handleCardClick(cartoon.id)}
//           >
//             <CardBody className="grid grid-cols-2 gap-4">
//               <div className="w-[140px] h-[180px]">
//                 <Image
//                   alt={cartoon.ct_title}
//                   className="absolute w-full h-full object-cover object-left-top"
//                   radius="lg"
//                   shadow="sm"
//                   src={cartoon.image}
//                   width={140}
//                   height={180}
//                 />
//               </div>
//               <div className="flex flex-col justify-between">
//                 <b>{cartoon.ct_title}</b>
//                 <p className="text-xs text-[#087E8B] font-bold line-clamp-5">
//                   {cartoon.ct_description}
//                 </p>
//               </div>
//             </CardBody>

//             <CardFooter className="text-small "></CardFooter>
//             <div className="flex flex-row p-5 space-x-5">
//               <Eye />
//               {cartoon.view_count}
//               <span> | {cartoon.published_year}</span>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// }
