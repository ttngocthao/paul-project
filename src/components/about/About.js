import React from "react"
import PropTypes from "prop-types"
import ImgCard from "../ImgCard/ImgCard"
import styles from "./about.module.scss"
import Button from "../button/Button"
const About = props => {
  return (
    <div className={styles.wrap}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>About</h2>
        <ImgCard
          alt="paul avatar"
          src="https://i7.pngguru.com/preview/811/233/212/computer-icons-user-login-desktop-wallpaper-others.jpg"
          className={styles.avatar}
        />
        <h3 className={styles.name}>Paul Denman</h3>
        <h4 className={styles.role}>Role/CEO/Founder</h4>
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
          <p></p>
          <p></p>
          <p>
            Story about yourself (ralated to this business).Story of candle
            stick,what/where/why/how the idea came. <br />
            Aute magna sit fugiat in nulla minim eiusmod. Do sunt ea ullamco
            Lorem nulla quis sit quis cupidatat amet in qui sint. Est aute
            incididunt cupidatat ipsum. Magna veniam ad pariatur id ex sint esse
            fugiat elit deserunt mollit quis. Ex culpa consequat irure duis aute
            consequat mollit labore aliquip. Dolore minim occaecat ex non dolore
            pariatur nulla aliquip ipsum fugiat consectetur voluptate velit.
          </p>
          <ImgCard
            className={styles.paraImg}
            src="https://cdn.pixabay.com/photo/2020/04/23/16/40/venice-5083204_1280.jpg"
            alt="demo"
          />

          <p>
            Amet quis commodo labore aliqua eu ullamco. Enim officia officia
            fugiat nostrud mollit. Excepteur ex tempor officia cillum ex duis
            commodo Lorem nostrud. Elit occaecat ad enim excepteur eu officia ex
            non nisi. Labore aute ea veniam eiusmod qui aliquip sint aliqua
            cupidatat elit pariatur. Reprehenderit exercitation consequat irure
            irure amet mollit magna qui.
          </p>
          <ImgCard
            src="https://cdn.pixabay.com/photo/2017/07/30/15/59/water-2554729_1280.jpg"
            alt=""
            className={styles.paraImg}
          />
          <p>
            Esse adipisicing ea dolore eu ex incididunt tempor adipisicing nisi.
            Et non cillum quis ullamco aliqua eiusmod amet sit fugiat commodo
            minim ullamco fugiat ea. Commodo sit incididunt nulla nostrud nisi
            consectetur adipisicing nostrud deserunt culpa consequat. Laboris
            sint occaecat aliquip nostrud veniam ex adipisicing ad. Pariatur ex
            eu ad Lorem culpa laborum quis non proident. Magna minim amet
            excepteur consectetur est incididunt adipisicing dolore eiusmod et
            do.
          </p>
        </div>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About
