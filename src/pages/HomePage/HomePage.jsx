import rickAndMortyImage from "../../assets/rick-and-morty.jpeg"
import BaseImage from "../../components/_images/BaseImage/BaseImage"

import rickFaceImage from "../../assets/rick-face.png"

import "./home-page.css"

export default function HomePage() {
  return (
    <div
      className="home-page"
      style={{ cursor: `url(${rickFaceImage}), auto` }}
    >
      <BaseImage className="home-page__image" src={rickAndMortyImage} />
    </div>
  )
}
