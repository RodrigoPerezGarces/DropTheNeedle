import React from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'

const searchClient = algoliasearch("VIW1JBL4JX", "ef27fb950a29e062942e35211c46b9be")


function Search() {
    
    return (
        <InstantSearch searchClient={searchClient} indexName='vinyls'>
            <header className='header'>
                <SearchBox
                    className='search-bar'
                    translations={{ placeholder: 'search' }}
                />
            </header>
        </InstantSearch>
    );
}

// const Header = () => (
//     <header className='header'>
//         <SearchBox 
//             className='search-bar'
//             translations={{ placeholder: 'search' }}
//         />
//     </header>
// )

export default Search