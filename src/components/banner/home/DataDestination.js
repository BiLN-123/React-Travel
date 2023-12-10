import React, { Component } from 'react';
import './destination.scss';

class DataDestination extends Component {
  render() {
    return (
      <>
        <div className={this.props.classname}>
          <div className="destination-blog-text">
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
          </div>
          <div className="destination-blog-img">
            <img src={this.props.img1} alt="taal-volcano" border="" />
            <img src={this.props.img2} alt="taal-volcano" border="" />
          </div>
        </div>
      </>
    );
  }
}

export default DataDestination;
