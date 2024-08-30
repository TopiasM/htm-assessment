import { placeholderImg } from '../consts'
import { ArrowsOut, Toilet, User } from '@phosphor-icons/react'
import { Property } from '../types'

export function ResultCard({prop}: {prop: Property}) {
  return (
    <div className="card sm:card-side bg-base-100 shadow-lg rounded border border-black/10">
      <figure className="bg-gray-200 max-h-48 sm:max-h-none md:w-2/5 lg:w-1/5 p-0">
        <img className="object-cover w-full h-full invert-0 dark:invert" src={placeholderImg}/>
      </figure>
      <div className="card-body w-full md:w-3/5 lg:4/5">
        <h2 className="card-title">{prop.name}</h2>
        <p className="text-sm">{prop.description}</p>
        <DetailsContainer
          bathrooms={prop.bathrooms}
          floorArea={prop.floorArea}
          maxPax={prop.maximumPax}
        />
      </div>
    </div>
  )
}

interface DetailsContainerProps {
  bathrooms: number;
  floorArea: number;
  maxPax: number;
}

function DetailsContainer({bathrooms, floorArea, maxPax}: DetailsContainerProps) {
  const spanClasses = "flex flex-row items-center"
  return (
    <div className="flex self-start flex-wrap rounded w-auto gap-3 sm:divide-x-2 text-sm font-semibold">
      <span className={spanClasses}>
        <ArrowsOut size={24} className="mr-1 text-slate-600 flex align-middle" /> {floorArea} sqm
      </span>
      <span className={spanClasses}>
        <User size={24} className="mr-1 text-slate-600 flex align-middle sm:ml-2" /> max {maxPax}
      </span>
      <span className={spanClasses}>
        <Toilet size={24} className="mr-1 text-slate-600 flex align-middle sm:ml-2" /> {bathrooms}
      </span>
    </div>
  )

}