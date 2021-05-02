import React from "react"
import Card from "../../components/Card/Card"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loading from "../../components/Loading/Loading"
import PageLayout from "../../components/_layouts/PageLayout/PageLayout"
import useFetchData from "../../hooks/useFetchData"

import "./episodes-page.css"

export default function EpisodesPage() {
  const { isLoading, hasError, data } = useFetchData({
    url: "https://rickandmortyapi.com/api/episode",
  })

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
    <PageLayout className="episodes-page">
      {data?.results.map((episode) => {
        return (
          <Card
            key={episode.id}
            className="episodes-page__item"
            name={episode.name}
          />
        )
      })}
    </PageLayout>
  )
}
