import React, { Component } from 'react';

import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

const IMAGES = {
  augustus_gloop,
  bay_of_pigs,
  cherub,
  galaxy_note,
  leggo_my_eggo,
  mudblood,
  piggy_smalls,
  porkchop,
  rainbowdash,
  sobriety,
  the_prosciutto_concern,
  trouble,
  truffleshuffle
}

class HogCard extends Component {
  nameToImage() {
    let keyName = this.props.hog.name.toLowerCase().replace(/ /g, '_')
    return IMAGES[keyName]
  }

  render() {
    return (
      <div className="ui eight wide column pigTile" onClick={this.oink}>
        <img src={this.nameToImage()} />
        <div>
          Name: {this.props.hog.name}
        </div>
      </div>
    )
  }
}

export default HogCard;
