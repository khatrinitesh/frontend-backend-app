import React, { useState } from 'react'
import { SearchProps, SearchResult } from '../interface/interface'
import { DEFAULT_PLACEHOLDER } from '../constants/constants'

const AnimatedSearch:React.FC<SearchProps> = ({ placeholder = DEFAULT_PLACEHOLDER }) => {

    const [query, setQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [results, setResults] = useState<SearchResult[]>([]);

    // Simulate a search function with delay
    const performSearch = (searchQuery: string) => {
        setIsLoading(true);
        setTimeout(() => {
        const filteredResults = EXAMPLE_RESULTS.filter(result =>
            result.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
        setIsLoading(false);
        }, 500); // Simulate network delay
    };

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        performSearch(newQuery);
    };


  return (
    <>
     <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className={`search-input ${isLoading ? 'loading' : ''}`}
      />
      {isLoading && <div className="loader">Loading...</div>}
      <ul className="results-list">
        {results.map(result => (
          <li key={result.id} className="result-item">
            <h4>{result.title}</h4>
            {result.description && <p>{result.description}</p>}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default AnimatedSearch