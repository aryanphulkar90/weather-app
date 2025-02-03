import React from 'react'
import styles from "../styles/ErrorInfo.module.css";

const ErrorInfo = ({errorMessage}) => {
  return (
    <div className={styles.errorInfo}>
      <div className={styles.errorCard}>
          <p className={styles.errorMsg}>{errorMessage}</p>
      </div>
    </div>
  )
}

export default ErrorInfo