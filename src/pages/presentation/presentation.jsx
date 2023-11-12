/* eslint-disable no-unused-vars */
import React from "react";
import VideoSection from "../../components/videoSection/videoSection";
import PDFReader from "../../components/pdfReader/pdfReader";
import styles from './presentation.module.scss'

function presentation() {
  return (
    <div className={styles.viewerContainer}>
      <h1 className={styles.header}> PPT Presentation using GenAI</h1>
      <div className={styles.presentation}>
        <VideoSection/>
        <PDFReader/>
      </div>  
    </div>
  );
}

export default presentation;