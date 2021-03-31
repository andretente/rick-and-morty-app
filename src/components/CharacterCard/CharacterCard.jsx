import { useState } from "react"
import PropTypes from "prop-types"

import "./character-card.css"

export default function CharcterCard(props) {
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
      <img className="character-card__image" src={props.imageSrc} alt="" />

      {isContentVisible && (
        <div className="character-card__content">
          <h2 className="character-card__content-title">{props.name}</h2>

          <p className="character-card__content-text">
            {props.status} - {props.species}
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

CharcterCard.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
}
