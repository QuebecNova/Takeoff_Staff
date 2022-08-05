import React from 'react'
import classes from './loader.module.scss'

export default function Loader() {
  return (
    <div className={classes.loaderWrapper}>
        <div className={classes.loader}/>
    </div>
  )
}
