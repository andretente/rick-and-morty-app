import PropTypes from "prop-types"
import classNamesHelper from "classnames"

import "./base-image.css"

export default function BaseImage({ alt, className, src }) {
  return (
    <img
      className={classNamesHelper("base-image", className)}
      src={src}
      alt={alt}
    />
  )
}

BaseImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
}
