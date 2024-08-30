import React from "react"
import { Filters } from "../types"
import { emptyFilters } from "../consts"

interface FiltersModalProps {
  toggleModal: () => void,
  filters: Filters,
  setFilters: React.Dispatch<React.SetStateAction<Filters>> 
  updateResults: () => void
}

export function FiltersModal({toggleModal, filters, setFilters, updateResults} : FiltersModalProps) {
  const updateFilters = (key: string, val: number) => {
    setFilters({...filters, [key]: val})
    updateResults()
  }

  const resetFilters = () => setFilters(emptyFilters)

  return (
    <dialog className="modal modal-open">
      <div className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleModal}>
          ✕
        </button>
        <h3 className="font-bold text-lg">Filters</h3>
        <div className="py-2 flex flex-col font-semibold">
          <div className="flex flex-col">
            <label>Min. max guests</label>
            <RangeContainer 
              name="minMaxGuests"
              step={1}
              max={20}
              val={filters.minMaxGuests}
              updateFilters={updateFilters} />
          </div>
          <div>
            <label>Min. sqm</label>
            <RangeContainer 
              name="minSqm"
              step={20}
              max={500}
              val={filters.minSqm} 
              updateFilters={updateFilters} />
          </div>
          <div>
            <label>Min. bathrooms</label>
            <RangeContainer
              name="minBathrooms"
              step={1}
              max={5}
              val={filters.minBathrooms}
              updateFilters={updateFilters} />
          </div>
        </div>
        <button className="btn w-full btn-error" onClick={resetFilters}>
          Reset filters
        </button>
      </div>
    </dialog>
  )
}

interface RangeContainerProps {
  name: string,
  step: number,
  max: number,
  val: number,
  updateFilters: (key: string, val: number) => void 
}

function RangeContainer({name: key, step, max, val, updateFilters}: RangeContainerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = Number(e.target.value)
    updateFilters(key, newVal)
  }

  const inputId = `range-input-${key}`

  return (
    <div className="flex flex-row w-full mb-2">
      <label className="min-w-10 self-center font-bold" htmlFor={inputId}>
        {val === 0 ? '-' : val}
      </label> 
      <input 
        name={inputId}
        className="range range-sm my-2" type="range"
        onChange={handleChange} 
        step={step} max={max}
        value={val}
      /> 
    </div>
  )
}