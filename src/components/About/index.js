import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a motivated entry-level front-end developer seeking an
            opportunity to begin my career in an established IT company. I am
            excited to work on challenging projects and learn and grow alongside
            experienced professionals, leveraging the latest technologies in the
            field.
          </p>
          <p>
            I have a calm sense of confidence, an inherent curiosity, and an
            unwavering dedication to honing my design abilities, one problem at
            a time.
          </p>
          <p>
            In a few words, I am a single individual who cherishes family, finds
            fulfillment in running, derives knowledge from books, and has an
            insatiable appetite for technology.
          </p>
        </div>
        <div className="stage-cube-count">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
            </div>
            <div className="face2">
              {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
