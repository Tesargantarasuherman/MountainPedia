import React from 'react'
import './index.scss'
function Container({el,justify}) {
  return (
    <div className={`container ${justify ? justify : null}`}>
        {el}
    </div>
  )
}

export default Container