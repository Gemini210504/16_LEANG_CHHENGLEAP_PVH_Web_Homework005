
import HearderComponent from "@/components/details/headerBookDetail-component";

export default function Layout({children}) {
  return (
    <>
      <div className="bg-gray-300 min-h-screen w-full mx-auto ">
        <main className="w-full mx-auto">{children}</main>
      </div>
    </>
  );
}
