

import CartoonCardComponent from "@/components/dashboard/cartoon/cartoonCard-component copy";
import DashboardComponent from "@/components/dashBoardComponent";
import { getAllCartoons } from "@/service/cartoon-service";

export default async function CartoonPage() {
  const dataCartoon = await getAllCartoons();
  console.log("Data : ", dataCartoon);

  return (
    <>
      <DashboardComponent buttonName="Cartoons" cartoonPage ="true"/>
      <CartoonCardComponent dataCartoon={dataCartoon} />
    </>
  );
}
