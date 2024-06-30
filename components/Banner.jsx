import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="top-0 inset-x-0 bottom-0">
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center sm:text-sm font-medium text-xs">
          ✨ Still unsure about your needs? We offer free consultation
          <Link href="#consultation" className="inline-block underline pl-1">
            Click here!
          </Link>
        </p>
      </div>
    </div>
  );
}
