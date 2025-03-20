import { Button } from "@heroui/react";

export default function ButtonComponent({ buttonName, ...rest }) {
  return (
    <Button {...rest} className="text-teal-400 font-semibold bg-[#edede9]">
      {buttonName}
    </Button>
  );
}
