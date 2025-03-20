import React from "react";
import { sidebarList } from "../data/sidebarList";
import { Settings } from "lucide-react"; 
import Link from "next/link";

export default function SidebarComponent() {
  return (
    <div className="p-5 h-screen bg-white shadow-xl">
      {/* Logo Section */}
      <div className="flex flex-col items-center py-4">
        <img
          // src="https://i.pinimg.com/736x/4f/3b/e4/4f3be4055c3c2afe8dce3c00b92fbc6c.jpg"
          src="https://s3-alpha-sig.figma.com/img/d1f4/4ca0/b0a6c2cc4e45d57bbc5a308b42616fa6?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hldtKKFJYNSewTFdR2MO4cZxh2He2ZD1DrEQ0nV0lHbsLzm6Vp67SI1Uo4jdERBpLoGYVDIMatdfLDBMJTZOT1GJHw1UIrusUjxQtxwFS05HbK7j7JoPBLRsrCLj0ZPkw-1HLA8Q1RXCpphe1tC8ucVR5Y6arnvFaXcY7z6u41DFZRgpn-N3QbKaESGdnFy1y9gFIups0Bam8FVbgFFnKWi2-oEKRljvXPss3ujyfVMmkX5mZKCUivrHBMPU8ZXswTXnx~iplN7bfn5DiHnrSOf~rneyX2ikacqu5vifWB-lfKOGPj8wYCE-jEpm5z8Aq-GGHwu3ZkvZdMN6JmmoKw__"
          alt="chinchang"
          className="w-40 h-40 rounded-full object-cover"
        />

        <div className="text-center mt-2">
          <p className="text-[20px] text-[#0B3954]">Black Monster</p>
          <p className="text-[#087E8B] text-[22px]">blackmonster@gmail.com</p>
        </div>
      </div>

      {/* Sidebar List */}
      <div className="p-2 ml-7 w-full flex flex-col min-h-[25%]">
        <div className="space-y-2 text-sm">
          {sidebarList.map((option) => (
            <Link key={option.id} href={option.path}>
              <div className="flex items-center gap-5 py-2 px-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:font-bold transition-all duration-200">
                <option.icon className="w-6 h-6 text-[#C81D25]" />
                <p className="text-[#0B3954]">{option.label}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-5 py-5 px-2 rounded-xl cursor-pointer hover:bg-[#fffcf2] transition-all duration-200 bg-gray-100 mr-10">
          <Settings className="w-6 h-6 text-[#0B3954]" />
          <p className="text-[#0B3954]">Settings</p>
        </div>
      </div>
    </div>
  );
}
