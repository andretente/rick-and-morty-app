import PropTypes from "prop-types"
import classNamesHelper from "classnames"
import BaseImage from "../_images/BaseImage/BaseImage"

import "./card.css"
import { useContext } from "react"
import { AppContext } from "../../App/App"

export default function Card({ className, imageSrc, name, style }) {
  const globalState = useContext(AppContext)
  const theme = globalState.theme

  return (
    <div
      className={classNamesHelper(
        "card",
        theme === "dark" ? "card--dark" : "card--light",
        className
      )}
      style={style}
    >
      <BaseImage height={200} src={imageSrc} width={200} />

      <h2 className="card__content-title">{name}</h2>
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
}
