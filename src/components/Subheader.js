import React from 'react'
import style from '../style/explore.module.css'
import {Link} from 'react-router-dom'
function Subheader(props) {
  return (
    <div className={style.head}>
      <Link exact="true" to="/home">
        <img src="/images/arrow.png" alt="" />
      </Link>
      <h3>{props.pageTitle}</h3>
    </div>
  )
}

export default Subheader
