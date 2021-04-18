import CharacterCard from "../../components/CharacterCard/CharacterCard"
import axios from "axios"

import "./characters-page.css"
import { useEffect, useState } from "react"

export default function CharactersPage() {
  const [charactersList, setCharactersList] = useState([])

  useEffect(() => {
    async function fetchCharactersData() {
      try {
        const apiCallResponse = await axios.get(
          "https://rickandmortyapi.com/api/character"
        )

        setCharactersList(apiCallResponse.data.results)
      } catch (error) {
        console.log("👷 Error 👷", error)
      }
    }

    fetchCharactersData()
  }, [])

  if (charactersList.length === 0) {
    return <p>Sorry, empty list</p>
  }

  return (
    <div className="characters-page">
      {charactersList?.map((characterItem) => {
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
