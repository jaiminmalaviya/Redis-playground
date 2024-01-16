const Pagination = ({ currentPage, totalPages, onPageChange }) => {
   const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i)

   const displayRange = 5

   const startPage = Math.max(1, currentPage - Math.floor(displayRange / 2))
   const endPage = Math.min(totalPages, startPage + displayRange - 1)

   return (
      <div className="flex justify-center items-center space-x-1 mt-4">
         <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none ${
               currentPage === 1
                  ? 'text-gray-500 pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
            }`}
         >
            Prev
         </button>
         {range(startPage, endPage).map((page) => (
            <button
               key={page}
               onClick={() => onPageChange(page)}
               className={`py-2 px-4 rounded border-0  outline-none transition-all duration-300 ${
                  currentPage === page
                     ? 'bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
                     : 'bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'
               }`}
               disabled={currentPage === page}
            >
               {page}
            </button>
         ))}
         <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded border-0 bg-transparent outline-none transition-all duration-300 focus:shadow-none ${
               currentPage === totalPages
                  ? 'text-gray-500 pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
            }`}
         >
            Next
         </button>
      </div>
   )
}

export default Pagination
