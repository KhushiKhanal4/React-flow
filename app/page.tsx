import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Workflow } from "./Workflow";
import { CustomNode } from "./CustomNode";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Workflow />
      <CustomNode />
    </div>
  );
}
