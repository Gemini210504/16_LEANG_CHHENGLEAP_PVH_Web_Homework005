
import CardComponent from "@/components/dashboard/homepage/card-component";
import DashboardComponent from "@/components/dashBoardComponent";
import { Link } from "@heroui/react";

export default function HomePage() {
  return (
    <>
      <DashboardComponent buttonName="HomePage"></DashboardComponent>
      <div className="flex flex-wrap justify-center gap-36 p-28">
        <div className="group relative ">
          <Link href="/book_category">
            <CardComponent
              image="https://s3-alpha-sig.figma.com/img/c73c/a81c/dd317b2dcd79328efc4e3095489f2244?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r7t-Y5h1pPzQ6~trCDXoo92yuv5-rsGnsVKvTEwBjqTTWgiz3IqxD28GsmM5K6hzPZcWnXrojgFAXjHXvQHYgTBkVBA28kl0HzWX5DmcBGFSapwqkvyIPQc1AWlVTSY~AFqReHgoMOpm2yqiBkO-M6OtP-MJFL3B1xZwRNHUkU~Na2mLvNieMpt-3RBbS-KBvgUu7NV1uChT8bHDufXg0l8SUtS3f7IIwUesxq7rDLWh-l0PuvLyxIReg-lGEC5gLqTPo9c08X1Aa14yDHIQDxtBrpCKHgQfk68bvcbiuYMZHNHnT6t6AcdkoJlaJZQDV5ReMqZQ9ASGedc88b2LdQ__"
              nameCard="BOOK"
            />

            <div className="absolute inset-0 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[30px] font-bold flex flex-col space-y-2">
                <span>View All</span>
                <span>Available</span>
                <span>Books</span>
              </p>
            </div>
          </Link>
        </div>

        <div className="group relative">
          <Link href="/cartoonPage">
            <CardComponent
              image="https://s3-alpha-sig.figma.com/img/65a1/7fc0/0c5a744cd7491aa1555996062a2e9f16?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HtiEYeNI1w7G5mddD4bdfyHiLPkOLtw0~nbdX-FJiLMWRpukSqklaVKMc8noRAr0UgaTz0DV02B0S8TtbpZgUXI4Rui3X-ObULjLcnMOkmPKMiePdd1S9~DRcLQmKNpgQQXimNNowRaercCmvLIUamrGP0Q4YJ-~c~7AmLdjkAByV9wakWLI05gzKBQmG9rSSudFJJFTCaO7Flm9Bhd4XAcMWWHyRJ9CDqZhJK1DBkBhBYjnZNXz43Nkrr1pWDYx~EejzD427Qk76CfVuH9WusFTVsPIQEo7wd-6zGFHh8mztYe8bsMva6ybPfbAxUVtLczYngPQSRhBtxvcnEzVfg__"
              nameCard="Cartoon"
            />

            <div className="absolute inset-0 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[30px] font-bold flex flex-col space-y-2">
                <span>View All</span>
                <span>Available</span>
                <span>Cartoons</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
