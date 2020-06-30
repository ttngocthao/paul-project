import React from "react"
import PropTypes from "prop-types"

const BlockStory = ({ block }) => {
  return (
    <>
      {block &&
        block.length !== 0 &&
        block.map((item, index) => {
          return <p key={index}>{item.paragraph}</p>
        })}
    </>
  )
}

BlockStory.propTypes = {
  block: PropTypes.array.isRequired,
}

export default BlockStory
