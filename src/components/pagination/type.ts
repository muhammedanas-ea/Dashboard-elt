
export interface paginationType{
    perPage:number,
    totalPage:number,
    currentPage:number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}