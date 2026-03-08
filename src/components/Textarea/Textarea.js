import React from 'react';
import styles from './Textarea.module.css';

export class Text extends React.Component {
  render() {
    const theme = this.props.theme;
    return <div className={`${styles.MyText} ${theme === "Dark" ? styles.dark : ""}`}>
      <p>This game is a perfect example of a project that shows the evolution of a franchise that has survived constant reinvention throughout the years. It builds on experience by dividing its focus between two protagonists with contrasting playstyles. 
        It also manages to honor both the terror that defined the first games and the explosive action that became much bigger in newer ones.
        <br></br>
        The story’s focus on legacy and long-term consequences gives more emotional weight to the horror. It is not just about escaping monsters. It is about confronting what decades of biological warfare have done to individuals and institutions.
         And to show how you’re going to act when you find out what was taken from you.</p>
    </div>
  }
}

