import { SearchFilter } from "@/components/search-filter";
import { FarmsTable } from "@/components/farms/farms-table";

export default function Page() {
  return (
    <div className=" p-4 h-full rounded-lg mx-10 my-24 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SearchFilter />
        <div className="flex items-center space-x-4">
          <p className="text-primary">Network TVL: $100,000,000</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card p-4 rounded-lg shadow-xl">
        <FarmsTable />
      </div>
    </div>
  );
}
