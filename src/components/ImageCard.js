import React, {Component} from 'react';
import './ImageCard.css';

const ImageCard = props => {
  console.log(props);
  return(
      <div>
        <img src={props.image} clicked={props.clicked} id={props.id} onClick={props.onClick} height="200" width="200"/>
      </div>
)};


export default ImageCard;