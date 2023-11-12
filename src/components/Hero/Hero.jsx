import React from 'react'
import { Link } from 'react-router-dom';
import Presentation from '../../pages/presentation/presentation';
import Upload from '../../pages/upload/Upload';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.section}>
        <h1>This is Hero Section</h1>
        <div className={styles.button}>
          <Link to="/upload" className={styles.button1}>
            Upload ppt/pdf
          </Link>

          <Link to="/presentation" className={styles.button2}>
            presentation
          </Link>
        </div>
        
    </div>
  )
}

export default Hero