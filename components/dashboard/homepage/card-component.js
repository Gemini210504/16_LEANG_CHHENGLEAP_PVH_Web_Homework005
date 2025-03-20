import { Card, Image, CardHeader } from "@heroui/react";
import { Tag } from "lucide-react";

export default function CardComponent({
  image,
  nameCard,
  altText = "Card image",
}) {
  return (
    <Card className="relative flex items-center justify-center h-auto rounded-[35px] max-w-[250px] mx-auto ">
      <CardHeader className="absolute z-10 top-4 left-4 flex items-center justify-center bg-white p-2 rounded-[30px] shadow-md w-auto">
        <Tag className="w-4 h-4 text-[#087E8B] mr-1" />
        <p className="text-xs text-[#087E8B] uppercase font-bold">{nameCard}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt={altText}
        className="z-0 w-full h-full object-cover rounded-[30px]"
        src={image}
      />
    </Card>
  );
}
