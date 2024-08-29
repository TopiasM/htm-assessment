import { ChangeEvent, useState } from 'react'
import propertiesJson from '../assets/properties.json'
import { ResultCard } from './ResultCard'
import { Property } from '../types'
import { NoResults } from './NoResults'
import { Funnel } from '@phosphor-icons/react'
import { FiltersModal } from './FiltersModal'

export function SearchForm() {
  const [search, setSearch] = useState<string>("")
  const [results, setResults] = useState<Property[]>(propertiesJson)
  const [showFilterModal, setShowFilterModal] = useState(false)

  const searchChange = async (e: HTMLInputElement) => {
    const searchStr = e.value
    setSearch(searchStr)
    
    if(searchStr.length > 0) setResults(searchProperties(searchStr))
    else setResults(propertiesJson)
  }

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal)

  return (
    <>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Search for properties</h2>
        <input
          className="input-bordered w-full rounded-lg text-lg py-2 px-4 border-2"
          placeholder="Search"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => searchChange(e.target)}
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
                  Filter
                </button>
            </div>
            <hr className="hidden mx-auto my-4 h-1 rounded border-0 bg-black/10" />
            <div className="gap-3 flex flex-col">
              {results.map(r =>
                <ResultCard key={r.id} r={r} />
              )}
            </div>
          </div>
          : 
          <NoResults search={search} />
        }
        { showFilterModal &&
          <FiltersModal 
            toggleModal={toggleFilterModal} />
        }
    </>
  )
}

const searchProperties = (search: string) => {
  return propertiesJson.filter(p =>
    (p.description.includes(search) || p.name.includes(search))
  )
}