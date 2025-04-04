import { Preview } from "@/components";

export default function Page() {
  return (
    <div className="relative">
      <div className="p-4 h-full rounded-lg mx-10 my-[150px] flex flex-col gap-4">
        <Preview />
      </div>
    </div>
  );
}
