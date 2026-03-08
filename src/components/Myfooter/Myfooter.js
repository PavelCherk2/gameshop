import React from 'react';
import styles from './Myfooter.module.css';

export class Foot extends React.Component {
  render() {
    const theme = this.props.theme;

    return <div className={`${styles.MyFooter} ${theme === "Dark" ? styles.dark : ""}`}>
      <h2>Copyright © 2025 Gaming Time. All rights reserved.</h2>
    </div>
  }
}

