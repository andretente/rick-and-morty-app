import CharacterCard from "../../components/CharacterCard/CharacterCard"

import "./characters-page.css"

const mockData = {
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
  ],
}

export default function CharactersPage() {
  return (
    <div className="characters-page">
      <CharacterCard
        imageSrc={mockData.results[0].image}
        location={{
          current: mockData.results[0].location.name,
          origin: mockData.results[0].origin.name,
        }}
        name={mockData.results[0].name}
        species={mockData.results[0].species}
        status={mockData.results[0].status}
      />

      <CharacterCard
        imageSrc={mockData.results[1].image}
        location={{
          current: mockData.results[0].location.name,
          origin: mockData.results[0].origin.name,
        }}
        name={mockData.results[1].name}
        species={mockData.results[1].species}
        status={mockData.results[1].status}
      />
    </div>
  )
}
