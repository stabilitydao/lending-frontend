import { SearchFilter } from "@/components/search-filter";
import { BorrowTable } from "@/components/borrow/borrow-table";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative">
      <div className=" p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4 blur-md">
        <div className="flex items-center justify-between">
          <SearchFilter route="borrow" isFilteringProjects={false} />
        </div>
        <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl">
          <BorrowTable />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="relative w-[750px] h-[250px] rounded-[50px] shadow-2xl">
          <Image src={"/work-in-progress.png"} alt={""} fill />
        </div>
      </div>
    </div>
  );
}
