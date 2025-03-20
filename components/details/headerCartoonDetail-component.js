import {
  BookOpen,
  BookText,
  ChevronRight,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function HeaderCartoonDetailComponent({ cartoonTitle }) {
  return (
    <header className="w-full p-5 col-span-12">
      <div className="flex flex-row space-x-5 ml-20">
        <Link href={`/`} className="flex flex-row space-x-5 ">
          <Home className="text-[#0B3954] " />
          <p className="text-[#0B3954] hover:text-emerald-300">Home</p>
          <ChevronRight className="text-[#0B3954]" />
        </Link>

        <Link href={`/cartoonPage`} className="flex flex-row space-x-5">
          <BookText className="text-[#0B3954] " />
          <p className="text-[#0B3954] hover:text-emerald-300">
            Cartoons
          </p>
          <ChevronRight className="text-[#0B3954]" />
        </Link>

        <BookOpen className="text-[#C81D25] " />
        <p className="text-[#C81D25] ">{cartoonTitle}</p>
      </div>
    </header>
  );
}
