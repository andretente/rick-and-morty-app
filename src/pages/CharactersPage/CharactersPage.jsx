import { Link } from "react-router-dom"
import { useCallback, useEffect } from "react"

import useFilterByDataKey from "../../hooks/useFilterByDataKey"

import Card from "../../components/Card/Card"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loading from "../../components/Loading/Loading"
import LoadMoreButton from "../../components/_buttons/LoadMoreButton/LoadMoreButton"
import PageLayout from "../../components/_layouts/PageLayout/PageLayout"
import SearchBar from "../../components/SearchBar/SearchBar"

import "./characters-page.css"
import ScrollBar from "../../components/ScrollBar/ScrollBar"
import useScrollBarProgress from "../../components/ScrollBar/hooks/useScrollBarProgress"
import useFetchCharacters from "./hooks/useFetchCharacters"

export default function CharactersPage() {
  const { isLoading, isError, data, refetch } = useFetchCharacters()

  const {
    filterResults: localCharactersListAfterFilter,
    getFilteredItems,
  } = useFilterByDataKey({
    initialItems: data?.results,
    key: "name",
  })

  const {
    scrollBarRef,
    scrollableContainerRef,
    setScrollBarProgress,
  } = useScrollBarProgress()

  function onScrollHandler() {
    setScrollBarProgress()
  }

  useEffect(() => {
    setScrollBarProgress()
  }, [localCharactersListAfterFilter, setScrollBarProgress])

  const onClickLoadMoreHandler = useCallback(() => {
    refetch(data?.info?.next)
  }, [data?.info?.next, refetch])

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorMessage error={isError} />
  }

  return (
    <PageLayout
      forwardRef={scrollableContainerRef}
      className="characters-page"
      onScroll={onScrollHandler}
    >
      <ScrollBar
        forwardRef={scrollBarRef}
        className="characters-page__scroll-bar"
      />

      <SearchBar
        className="characters-page__search-bar"
        onChange={getFilteredItems}
      />

      <div className="characters-page__card-list">
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
      </div>

      <LoadMoreButton
        className="characters-page__load-more"
        onClick={onClickLoadMoreHandler}
      />
    </PageLayout>
  )
}
