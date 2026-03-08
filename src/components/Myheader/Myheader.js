import React from 'react';
import styles from './Myheader.module.css';

export class Header extends React.Component {
  render() {
    const theme = this.props.theme;
    const onclick = this.props.onclick;

    return <div className={`${styles.MyHeader} ${theme === "Dark" ? styles.dark : ""}`}>
      <div className={styles.MyHeaderBlock}>
        <h1 className={styles.myTitle}>Gaming Time</h1>
        <div className={styles.myMenu}>
          <a className={styles.myA}>Main</a>
          <a className={styles.myA}>Discounts</a>
          <a className={styles.myA}>Contacts</a>
          <img src={theme === "Dark" ? "light.png" : "dark.png"} onClick={onclick}></img>
        </div>
      </div>
    </div>
  }
}

