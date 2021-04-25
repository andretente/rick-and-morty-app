import React from "react"
import useFetchData from "../../hooks/useFetchData"

export default function EpisodesPage() {
  const { isLoading, hasError, data } = useFetchData(
    "https://rickandmortyapi.com/api/episode"
  )

  if (isLoading) {
    return <h1>I am loading, please wait!</h1>
  }

  if (hasError) {
    return <h1>Sorry, something went wrong!</h1>
  }

  if (data?.length === 0) {
    return <p>{hasError.error}</p>
  }

  return (
    <div className="characters-page">
      {data?.map((episode) => {
        return <p key={episode.id}>{episode.name}</p>
      })}
    </div>
  )
}
