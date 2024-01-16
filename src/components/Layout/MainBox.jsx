'use client'

import React, { useEffect, useState } from 'react'
import FilterForm from '../FilterForm'
import ProductList from '../ProductList'
import Pagination from '../Pagination'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import { ITEMS_PER_PAGE } from '@/libs/constants'

const MainBox = () => {
   const [products, setProducts] = useState([])
   const [totalPages, setTotalPages] = useState(1)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [filterOption, setFilterOption] = useState('')

   useEffect(() => {
      const fetchData = async () => {
         try {
            setLoading(true)
            const response = await fetch(
               `/api/products?category=${filterOption}&page=${currentPage}`
            )
            const data = await response.json()
            setProducts(data.products)
            setTotalPages(Math.ceil(data.totalItems / ITEMS_PER_PAGE))
            setLoading(false)
         } catch (error) {
            setError('Error fetching data')
            setLoading(false)
         }
      }

      fetchData()
   }, [currentPage, filterOption])

   const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
   }

   const handleFilterChange = (option) => {
      setFilterOption(option)
   }

   return (
      <div className="container bg-gray-100 rounded-lg shadow sm:p-12 p-8 space-y-10">
         <FilterForm
            onSelectChange={handleFilterChange}
            onPageChange={handlePageChange}
         />

         {loading && <LoadingSpinner />}
         {error && <ErrorMessage message={error} />}

         <ProductList products={products} />

         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
         />
      </div>
   )
}

export default MainBox
