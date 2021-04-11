import { useState } from "react"
import PropTypes from "prop-types"

import BaseImage from "../_images/BaseImage/BaseImage"

import "./character-card.css"

export default function CharacterCard({
  imageSrc,
  location,
  name,
  status,
  species,
}) {
  const [isContentVisible, setIsContentVisible] = useState(false)

  function onClickShowContent() {
    if (isContentVisible === true) {
      setIsContentVisible(false)
    } else if (isContentVisible === false) {
      setIsContentVisible(true)
    }
  }

  return (
    <div className="character-card">
      <BaseImage src={imageSrc} />

      {isContentVisible && (
        <div className="character-card__content">
          <h2 className="character-card__content-title">{name}</h2>

          <p className="character-card__content-text">
            {status} - {species}
          </p>

          <p className="character-card__content-text">
            Current location: {location.current}
          </p>

          <p className="character-card__content-text">
            Origin location: {location.origin}
          </p>
        </div>
      )}

      <button
        className="character-card__button"
        onClick={() => onClickShowContent()}
      >
        {isContentVisible ? "-" : "+"}
      </button>
    </div>
  )
}

CharacterCard.propTypes = {
  imageSrc: PropTypes.string,
  location: PropTypes.shape({
    current: PropTypes.string,
    origin: PropTypes.string,
  }),
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
}
