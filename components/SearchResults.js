import React from 'react'
import {PaginationButtons} from './PaginationButtons'

export const SearchResults = ({results}) => {
  return (
    <div className='mx-auto w-full pl-3 px-3 sm:pl-[5%] 
    md:pl-[14%] lg:pl-52
    ' >
        <p
        className='text-gray-500 text-sm mb-5 mt-3
        '
        >About {results.searchInformation?.formattedTotalResults} results({results.searchInformation.formattedSearchTime}seconds)</p>

        <div>
            {results.items?.map((result)=>(
                <div
                className='max-w-xl mb-8 group'
                 key={result.link}>
                    <div>
                        <a 
                        className='text-sm'
                        href={result.link}>
                            {result.formattedUrl}
                        </a>
                        <a
                         href={result.link}>
                          <h2 className='trucate text-lg text-blue-800 font-medium group-hover:underline'>
                            {result.title}
                            </h2>
                         </a>
                    </div>
                    <p className='line-clamp-2'>{result.snippet}</p>
                </div>
            ))}

            <PaginationButtons/>
        </div>
    </div>
  )
}
