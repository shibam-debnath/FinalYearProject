import React, { useState, useEffect, useRef } from 'react';
import styles from './home.module.scss'
// Sections
import TopNavbar from "../../components/TopNavBar/TopNavBar";
import Hero from "../../components/Hero/Hero";

function home() {
  return (
    <div className={styles.container}>
      <TopNavbar/>
      <Hero/>
    </div>
  );
}

export default home;
