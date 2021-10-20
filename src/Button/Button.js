import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return <button className={styles.error}>Error Button</button>;
  }
}

export default Button;
