import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.length}
        <Sushi sushi={[props.sushis[0]]} />
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer