import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { useGlobalState } from "../../App/App"

import useFetchData from "../../hooks/useFetchData"
import useFilterByDataKey from "../../hooks/useFilterByDataKey"

import Card from "../../components/Card/Card"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loading from "../../components/Loading/Loading"
import LoadMoreButton from "../../components/_buttons/LoadMoreButton/LoadMoreButton"
import PageLayout from "../../components/_layouts/PageLayout/PageLayout"
import SearchBar from "../../components/SearchBar/SearchBar"

import "./characters-page.css"

export default function CharactersPage() {
  const globalState = useGlobalState()
  const globalCharactersPageData = globalState.charactersPageData
  const setGlobalCharacterPageData = globalState.setCharactersPageData

  const hasAlreadyLoadedCharacters = Boolean(globalCharactersPageData)

  const { isLoading, hasError, data, refetch } = useFetchData({
    url: "https://rickandmortyapi.com/api/character",
    options: { disable: hasAlreadyLoadedCharacters },
  })

  const [localCharactersPageData, setLocalCharactersPageData] = useState(
    globalCharactersPageData
  )

  useEffect(() => {
    if (data && hasAlreadyLoadedCharacters) {
      const updatedData = {
        info: data.info,
        results: [...localCharactersPageData.results, ...data.results],
      }
      setLocalCharactersPageData(updatedData)
      setGlobalCharacterPageData(updatedData)
    } else if (data) {
      setLocalCharactersPageData(data)
      setGlobalCharacterPageData(data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const {
    filterResults: localCharactersListAfterFilter,
    getFilteredItems,
  } = useFilterByDataKey({
    initialItems: localCharactersPageData?.results,
    key: "name",
  })

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />
  }

  return (
    <>
      <PageLayout className="characters-page">
        <SearchBar
          className="characters-page__search-bar"
          onChange={getFilteredItems}
        />

        {localCharactersListAfterFilter?.map((characterItem, index) => {
          return (
            <Link
              className="characters-page__link"
              to={`/character/${characterItem.id}`}
              key={characterItem.id}
            >
              <Card
                imageSrc={characterItem.image}
                name={characterItem.name}
                style={{ animationDelay: `${index * 0.03}s` }}
              />
            </Link>
          )
        })}
      </PageLayout>

      <LoadMoreButton
        className="characters-page__load-more"
        onClick={() => refetch(localCharactersPageData.info.next)}
      />
    </>
  )
}
