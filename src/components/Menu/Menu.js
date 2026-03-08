import React from 'react';
import styles from './Menu.module.css';

export class MyMenu extends React.Component {
  render() {
    const theme = this.props.theme;

    return <div className={`${styles.MyMenu} ${theme === "Dark" ? styles.dark : ""}`}>
      <h2 className={styles.myH2}>Catalog</h2>
      <ul>
        <li className={styles.myLi}><a href="" className={styles.myA}>New Games</a></li>
        <li className={styles.myLi}><a href="" className={styles.myA}>Popular Games</a></li>
        <li className={styles.myLi}><a href="" className={styles.myA}>Adventurous Games</a></li>
        <li className={styles.myLi}><a href="" className={styles.myA}>Horror Games</a></li>
        <li className={styles.myLi}><a href="" className={styles.myA}>Online Games</a></li>
      </ul>
    </div>
  }
}
