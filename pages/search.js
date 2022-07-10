import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import Response from '../Response'
import { useRouter } from 'next/router'
import { SearchResults } from '../components/SearchResults'
 const Search = ({results}) => {
   const router = useRouter()
  return (
   
    <div>
        <Head>
            <title>{router.query.term}-Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* header */}
        <header>
          <Header />
        </header>
        {/* search results */}
    <SearchResults results={results}/>
    </div>
  )
}

export default Search

export const getServerSideProps = async (context)=>{
  const useDummyData = false;
  const startIndex = context.query.start || "0"
  const data = 
  await fetch
  (`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then(resp=>resp.json());


  return{
    props:{
      results :data,
    }
  }
}