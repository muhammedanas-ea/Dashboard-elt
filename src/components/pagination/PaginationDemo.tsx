import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { paginationType } from "./type";

export function PaginationDemo({
  currentPage,
  setCurrentPage,
  totalPage,
  perPage
}: paginationType) {
  

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination className="dark:text-white">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() =>
              handlePageChange(currentPage >= 2 ? currentPage - 1 : currentPage)
            }
          />
        </PaginationItem>
        {Array.from({ length: totalPage }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={` text-black dark:text-white ${
                currentPage === index + 1
                  ? "active bg-[#2080F6] text-white h-[36px] w-[31px]"
                  : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
              href="#"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
      <div className="flex gap-3 items-center dark:text-white">
        <h1 className="list_fonts">Result per page</h1>
        <Select>
          <SelectTrigger className="w-[64px] h-[36px] dark:bg-[#1f2937] dark:text-white">
            <SelectValue placeholder={perPage} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">1</SelectItem>
            <SelectItem value="dark">2</SelectItem>
            <SelectItem value="system">3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Pagination>
  );
}
