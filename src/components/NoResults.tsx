import { SmileySad } from '@phosphor-icons/react'
import { Filters } from '../types'

export function NoResults({ search, filters }: { search: string; filters: Filters }) {
  return (
    <div className="w-full flex flex-col p-4 items-center min-h-44 justify-center bg-black/5 mt-2 rounded-lg">
      <SmileySad className="size-24 text-red-500/70" />
      <h2 className="text-xl">
        No results for &quot;<b>{search}</b>&quot;
      </h2>
      {Object.values(filters).filter((v) => v > 0).length > 0 && (
        <h2 className="text-xl">and the filters</h2>
      )}
    </div>
  )
}
