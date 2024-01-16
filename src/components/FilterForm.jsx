import { useState } from 'react'

const FilterForm = ({ onSelectChange, onPageChange }) => {
   const [searchTerm, setSearchTerm] = useState('')
   const [selectedOption, setSelectedOption] = useState('')

   const handleSearchChange = (event) => {
      setSearchTerm(event.target.value)
   }

   const handleSelectChange = (event) => {
      setSelectedOption(event.target.value)
      onSelectChange(event.target.value)
      onPageChange(1)
   }

   const handleFormSubmit = (event) => {
      event.preventDefault()
   }

   return (
      <form
         className="flex gap-4 flex-wrap justify-center w-full"
         onSubmit={handleFormSubmit}
      >
         <div className="flex items-center md:w-1/2 w-full border bg-white rounded-lg">
            <input
               type="search"
               className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
               placeholder="search"
               value={searchTerm}
               onChange={handleSearchChange}
            />
            <div>
               <button
                  type="submit"
                  className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
               >
                  <svg
                     className="w-5 h-5"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                     />
                  </svg>
               </button>
            </div>
         </div>

         <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2"
         >
            <option value="">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="furniture">Furniture</option>
            <option value="tops">Tops</option>
            <option value="womens-dresses">Womens Dresses</option>
            <option value="womens-shoes">Womens Shoes</option>
            <option value="mens-shirts">Mens Shirts</option>
            <option value="mens-shoes">Mens Shoes</option>
            <option value="mens-watches">Mens Watches</option>
            <option value="womens-watches">Womens Watches</option>
            <option value="womens-bags">Womens Bags</option>
            <option value="womens-jewellery">Womens Jewellery</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="automotive">Automotive</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="lighting">Lighting</option>
         </select>
      </form>
   )
}

export default FilterForm
