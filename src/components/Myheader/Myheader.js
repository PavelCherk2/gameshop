import React from 'react';
import styles from './Myheader.module.css';

export class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = { theme: "Light" }
  }

  render() {
    return <div className={styles.MyHeader}>
      <div className={styles.MyHeaderBlock}>
        <h1 className={styles.myTitle}>Gaming Time</h1>
        <div className={styles.myMenu}>
          <a className={styles.myA}>Main</a>
          <a className={styles.myA}>Discounts</a>
          <a className={styles.myA}>Contacts</a>
        </div>
        <img src="dark.png" id={styles.mylogo}></img>
      </div>
    </div>
  }
}

