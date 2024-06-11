import { BorderBeam } from "@/components/ui/border-beam";
import dashboard from "@/public/dashboard.png";
import Image from "next/image";

export function Dashboard() {
  return (
    <div className="max-w-screen-xl relative rounded-xl lg:w-[90%] w-[48rem] mx-auto">
      <Image
        src={dashboard}
        alt="dashboard"
        className=" w-full rounded-[inherit] border object-contain shadow-lg dark:block"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
