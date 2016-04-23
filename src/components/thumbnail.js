import React from 'react'

export default class Thumbnail extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { expand: false }
  }
  onClick() {
    return () => {
      this.setState(function (state,props) {
        state.expand = !state.expand;
      })
    }
  }
  render() {
    var cssClass;
    if (this.state.expand) {
      document.body.style.overflow = "hidden";
      cssClass = "window thumbnail-show";
    } else {
      document.body.style.overflow = "auto";
      cssClass = "window thumbnail-hide";
    }
    return(
      <div className="thumbnail">
        <img src={this.props.src} alt={ this.props.alt || "" } className={this.props.className || null } style={this.props.style || null } onClick={ this.onClick() } />
        <div className={cssClass}>
          <img src={this.props.largeImageSrc || this.props.src} alt={ this.props.alt || "" } onClick={ this.onClick() } />
          <span className="close-button" onClick={ this.onClick() }></span>
        </div>
      </div>
    );
  }

}

//  <Thumbnail src="" [largeImageSrc=""] [alt=""] [className=""] [style={}] />
