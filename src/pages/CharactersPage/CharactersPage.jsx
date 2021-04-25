import CharacterCard from "../../components/CharacterCard/CharacterCard"

import "./characters-page.css"
import useFetchData from "../../hooks/useFetchData"

export default function CharactersPage() {
  const { isLoading, hasError, data } = useFetchData(
    "https://rickandmortyapi.com/api/character"
  )

  if (isLoading) {
    return <h1>I am loading, please wait!</h1>
  }

  if (hasError) {
    return <h1>Sorry, something went wrong!</h1>
  }

  if (data?.length === 0) {
    return <p>Sorry, empty list</p>
  }

  return (
    <div className="characters-page">
      {data?.map((characterItem) => {
        return (
          <CharacterCard
            key={characterItem.id}
            imageSrc={characterItem.image}
            location={{
              current: characterItem.location.name,
              origin: characterItem.origin.name,
            }}
            name={characterItem.name}
            species={characterItem.species}
            status={characterItem.status}
          />
        )
      })}
    </div>
  )
}
