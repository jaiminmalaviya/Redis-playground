import Image from 'next/image'

const ProductList = ({ products }) => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product) => (
            <div
               className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
               key={product.id}
            >
               <div className="relative mx-4 mt-4 h-72  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <Image
                     src={product.image}
                     className="w-auto h-full m-auto object-contain rounded-xl"
                     alt={product.title}
                     width={400}
                     height={400}
                  />
               </div>
               <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                     <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased line-clamp-1">
                        {product.title}
                     </p>
                     <p className="font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        ${product.price}
                     </p>
                  </div>
                  <p className=" font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 line-clamp-2 h-11">
                     {product.description}
                  </p>
               </div>
               <div className="p-6 pt-0">
                  <button
                     className="block w-full select-none rounded-lg bg-gray-900/10  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none focus:outline-0"
                     type="button"
                  >
                     Add to Cart
                  </button>
               </div>
            </div>
         ))}
      </div>
   )
}

export default ProductList
