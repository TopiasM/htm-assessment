import { ChangeEvent, useState } from 'react'
import propertiesJson from '../assets/properties.json'
import { placeholderImg } from '../consts'
import { ArrowsOut, Toilet } from '@phosphor-icons/react'

export function SearchForm() {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<typeof propertiesJson>(propertiesJson)

  const searchChange = async (e: HTMLInputElement) => {
    const searchStr = e.value
    setSearch(searchStr)
    
    if(searchStr.length > 0) setResults(searchProperties(searchStr))
    else setResults(propertiesJson)
  }

  return (
    <>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Search for properties</h2>
        <input
          className="input-bordered w-full rounded-lg text-lg py-2 px-4 border-2"
          placeholder="Search"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => searchChange(e.target)}
        />
        {results.length > 0 &&
          <div className="mt-4">
            {search.length > 0 &&
              <h3 className="text-lg mb-2">
                Search results for{" "} 
                <span className="border-b-2 border-sky-500">{search}</span>
              </h3>
            }
            <div className="gap-3 flex flex-col">
              {results.map(r =>
                <ResultCard key={r.id} r={r} />
              )}
            </div>
          </div>
        }
    </>
  )
}

function ResultCard({r}: any) {
  return (
    <div className="card sm:card-side bg-base-100 shadow-lg rounded">
      <figure className="bg-gray-200 max-h-48 sm:max-h-none md:w-2/5 lg:w-1/5 p-0">
        <img className="object-cover w-full h-full invert-0 dark:invert" src={placeholderImg}/>
      </figure>
      <div className="card-body w-full md:w-3/5 lg:4/5">
        <h2 className="card-title">{r.name}</h2>
        <p className="text-sm">{r.description.length > 170 ? `${r.description.slice(0,167)}...` : r.description }</p>
        <div className="bg-black/[0.02] flex flex-row p-2 rounded w-auto gap-3 divide-x-2 ">
          <span className="flex flex-row px-4">
            <Toilet size={24} className="mr-1" /> {r.bathrooms}
          </span>
          <span className="flex flex-row px-4">
            <ArrowsOut size={24} className="mr-1" /> {r.floorArea} sqm
          </span>
        </div>
      </div>
    </div>
  )
}

const searchProperties = (search: string) => {
  return propertiesJson.filter(p =>
    (p.description.includes(search) || p.name.includes(search))
  )
}