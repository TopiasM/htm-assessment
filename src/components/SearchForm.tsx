import React, { useState } from 'react'
import propertiesJson from '../assets/properties.json'
import { ResultCard } from './ResultCard'
import { Filters, Property } from '../types'
import { NoResults } from './NoResults'
import { Funnel } from '@phosphor-icons/react'
import { FiltersModal } from './FiltersModal'
import { emptyFilters } from '../consts'

export function SearchForm() {
  const [search, setSearch] = useState<string>("")
  const [results, setResults] = useState<Property[]>(propertiesJson)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [filters, setFilters] = useState<Filters>(emptyFilters)

  const searchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchStr = e.target.value
    setSearch(searchStr)
    
    if(searchStr.length > 0) updateResults()
    else setResults(propertiesJson)
  }

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal)

  const searchProperties = () => {
    return propertiesJson.filter(p => {
      const searchCheck = (p.description.includes(search) || p.name.includes(search))
      const filtersCheck = p.floorArea >= filters.minSqm &&
        p.maximumPax >= filters.minMaxGuests &&
        p.bathrooms >= filters.minBathrooms

      return searchCheck && filtersCheck
    })
  }

  const updateResults = () => {
    setResults(searchProperties())
  }

  return (
    <>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Search for properties</h2>
        <input
          className="input-bordered w-full rounded-lg text-lg py-2 px-4 border-2"
          placeholder="Search"
          value={search}
          onChange={searchChange}
        />
        {results.length > 0 ?
          <div className="mt-4">
            <div className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-lg min-h-7">
                  {search.length > 0 &&
                    <>
                      <b>{results.length}</b> search results for{" "} 
                      <span className="border-b-2 border-sky-500 font-semibold">{search}</span>
                    </>
                  }
                </h3>
                <button className="btn btn-outline h-8 min-h-8" onClick={toggleFilterModal}>
                  <Funnel className="size-4 opacity-70" weight="fill" />
                  Filters ({Object.values(filters).filter(v => v > 0).length})
                </button>
            </div>
            <hr className="hidden mx-auto my-4 h-1 rounded border-0 bg-black/10" />
            <div className="gap-3 flex flex-col">
              {results.map(prop =>
                <ResultCard key={prop.id} prop={prop} />
              )}
            </div>
          </div>
          : 
          <>
            <button className="btn btn-outline h-8 min-h-8 float-right mt-4 mb-2" onClick={toggleFilterModal}>
              <Funnel className="size-4 opacity-70" weight="fill" />
              Filters ({Object.values(filters).filter(v => v > 0).length})
            </button>
            <NoResults search={search} filters={filters} />
          </>
        }
        { showFilterModal &&
          <FiltersModal 
            toggleModal={toggleFilterModal}
            filters={filters}
            setFilters={setFilters}
            updateResults={updateResults}/>
        }
    </>
  )
}