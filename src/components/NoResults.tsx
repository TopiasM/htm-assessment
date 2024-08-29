import { SmileySad } from "@phosphor-icons/react";

export function NoResults({search}: { search: string }) {
  return(
    <div className="w-full flex flex-col p-4 items-center min-h-44 justify-center bg-black/5 mt-2 rounded-lg">
      <SmileySad className="size-24 text-red-500/70"/>
      <h2 className="text-xl">
        No results for "<b>{search}</b>"
      </h2>
    </div>
  )
}