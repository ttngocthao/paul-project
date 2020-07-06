import React, { Fragment } from "react"
import PropTypes from "prop-types"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./about.module.scss"
import Button from "../button/Button"
import BlockStory from "./BlockStory"

const About = ({ data }) => {
  const { avatar, role, story } = data
  const outputTextBlock = blockData => {
    blockData &&
      blockData.length !== 0 &&
      blockData.map((p, i) => {
        return <p key={i}>{p.paragraph}</p>
      })
  }
  return (
    <Fragment>
      <div className={styles.spareWrap} id="about"></div>
      <div className={styles.wrap}>
        <div className={styles.topSection}>
          <h2 className={styles.title}>About</h2>
          <ImgCard
            alt="paul avatar"
            src={avatar.publicURL}
            className={styles.avatar}
          />
          <h3 className={styles.name}>Paul Denman</h3>
          <h4 className={styles.role}>{role}</h4>
          <div className={styles.list}>
            <Button
              href="#contact"
              label="Contact Paul"
              color="black"
              className={styles.contactBtn}
            />
            <Button
              href="#facebook link"
              label="follow Paul"
              color="black"
              className={styles.followBtn}
            />
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.content}>
            {story &&
              story.length !== 0 &&
              story.map((item, index) => {
                const { block, image } = item

                // console.log(block)
                return (
                  <Fragment key={index}>
                    <BlockStory block={block} />
                    {image && (
                      <ImgCard
                        src={image.publicURL}
                        className={styles.paraImg}
                        atl="chain candle sticks in black paint"
                      />
                    )}
                  </Fragment>
                )
              })}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

About.propTypes = { data: PropTypes.object.isRequired }

export default About
