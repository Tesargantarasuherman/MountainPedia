import React from 'react'
import './index.scss'
function Container({el,justify,marginTop}) {
  return (
    <div className={`container ${justify ? justify : 'flex-start'}`} style={{marginTop:marginTop?marginTop:0}}>
        {el}
    </div>
  )
}

export default Container