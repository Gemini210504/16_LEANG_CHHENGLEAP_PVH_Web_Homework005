
import FilterSelectComponent from "@/components/filterBook-component";
import SearchBarComponent from "@/components/searchBar-component";
import SidebarComponent from "@/components/sideBar-component";

export default function Layout({children}) {
  return (
    <>
      <div className="grid sm:grid-cols-12 min-h-screen bg-[#edede9]">
        <aside className="sm:col-span-3 bg-[#ffffff] shadow-md ">
          <SidebarComponent />
        </aside>

        <main className="sm:col-span-9 flex flex-col w-full max-h-screen">
          <SearchBarComponent />

          <div className="bg-[#f8f9fa] w-[90%] mx-auto rounded-[30px] shadow-large overflow-scroll">
            
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
