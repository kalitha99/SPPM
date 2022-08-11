import React, { Component } from 'react';
import Background from '../videos/Background.mp4';

export default class video extends Component {
  render() {
    return (
        <div className="text-center">
        <video loop autoPlay>
          <source
            src={Background}
            type="video/mp4"
          />
        </video>
        
        {/* or
        <video autoplay="">
            <source src={require('../videos/Background.mp4')} type="video/mp4" />
        </video> */}
      </div>
    )
  }
}
