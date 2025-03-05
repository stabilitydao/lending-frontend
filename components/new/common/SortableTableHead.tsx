import { FilterIcon } from "@/components/icons/filter";
import { TableHead } from "@/components/ui/table";

export type SortBy = {
  extract: (data: any) => number | string;
  order: "asc" | "desc";
  label: string;
};

export const SortableTableHead = ({
  label,
  extract,
  sortBy,
  setSortBy,
  defaultOrder = "asc",
}: {
  label: string;
  extract: (data: any) => number | string;
  sortBy: SortBy | null;
  setSortBy: (sortBy: SortBy) => void;
  defaultOrder?: "asc" | "desc";
}) => {
  const handleClick = () => {
    setSortBy({
      extract,
      label,
      order:
        sortBy?.label === label
          ? sortBy.order === "asc"
            ? "desc"
            : "asc"
          : defaultOrder,
    });
  };

  return (
    <TableHead className="text-muted cursor-pointer" onClick={handleClick}>
      <div className="flex items-center gap-2">
        {label} <FilterIcon />
      </div>
    </TableHead>
  );
};
