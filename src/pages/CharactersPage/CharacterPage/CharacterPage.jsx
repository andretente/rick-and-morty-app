import React from "react"
import { useParams } from "react-router"

import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import Loading from "../../../components/Loading/Loading"
import BaseImage from "../../../components/_images/BaseImage/BaseImage"
import PageLayout from "../../../components/_layouts/PageLayout/PageLayout"
import useFetchData from "../../../hooks/useFetchData"

import "./character-page.css"

export default function CharacterPage() {
  const params = useParams()

  const { isLoading, hasError, data: characterData } = useFetchData({
    url: `https://rickandmortyapi.com/api/character/${params.id}`,
  })

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorMessage error={hasError} />
  }

  return (
    <PageLayout className="character-page">
      <BaseImage
        className="character-page__image"
        height={350}
        src={characterData?.image}
        width={350}
      />
      <h1>{characterData?.name}</h1>

      <ul className="character-page__list">
        <li className="character-page__list-item">
          <strong>Location: </strong> {characterData?.location?.name}
        </li>

        <li className="character-page__list-item">
          <strong>Origin: </strong> {characterData?.origin?.name}
        </li>

        <li className="character-page__list-item">
          <strong>Species: </strong> {characterData?.species}
        </li>

        <li className="character-page__list-item">
          <strong>Status: </strong> {characterData?.status}
        </li>

        <li className="character-page__list-item">
          <strong>Gender: </strong> {characterData?.gender}
        </li>
      </ul>
    </PageLayout>
  )
}
