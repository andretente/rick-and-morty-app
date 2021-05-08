import React from "react"
import Card from "../../components/Card/Card"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loading from "../../components/Loading/Loading"
import ScrollBar from "../../components/ScrollBar/ScrollBar"
import PageLayout from "../../components/_layouts/PageLayout/PageLayout"
import useFetchData from "../../hooks/useFetchData"
import useScrollBarProgress from "../../components/ScrollBar/hooks/useScrollBarProgress"

import "./episodes-page.css"

export default function EpisodesPage() {
  const { isLoading, hasError, data } = useFetchData({
    url: "https://rickandmortyapi.com/api/episode",
  })

  const {
    scrollBarRef,
    scrollableContainerRef,
    setScrollBarProgress,
  } = useScrollBarProgress()

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorMessage />
  }

  if (data?.results.length === 0) {
    return <p>Sorry, empty list</p>
  }

  return (
    <PageLayout
      forwardRef={scrollableContainerRef}
      className="episodes-page"
      onScroll={setScrollBarProgress}
    >
      <ScrollBar
        forwardRef={scrollBarRef}
        className="episodes-page__scroll-bar"
      />

      <div className="episodes-page__card-list">
        {data?.results.map((episode) => {
          return (
            <Card
              key={episode.id}
              className="episodes-page__item"
              name={episode.name}
            />
          )
        })}
      </div>
    </PageLayout>
  )
}
