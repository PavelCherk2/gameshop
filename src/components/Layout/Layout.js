import React from 'react';
import { MyMenu } from '../Menu/Menu';
import { Header } from '../Myheader/Myheader';
import { Text } from '../Textarea/Textarea';
import styles from './Layout.module.css';
import { Foot } from '../Myfooter/Myfooter';

export class LayoutForComps extends React.Component {
  constructor(props) {
    super(props)

    this.state = { theme: "Light" }
    this.click = this.Func.bind(this)
  }
  Func() {
    if (this.state.theme === "Light") {
      this.setState({ theme: "Dark" })
      document.body.classList.add("dark");
    }
    else {
      this.setState({ theme: "Light" })
      document.body.classList.remove("dark");
    }
  }
  render() {
    const theme = this.state.theme
    return (
      <div>
        <Header theme={theme} onclick={this.click}></Header>
        <div className={styles.MainPart}>
          <MyMenu theme={theme}></MyMenu>
          <Text theme={theme}></Text>
        </div>
        <Foot theme={theme}></Foot>
      </div>
    )
  }

}