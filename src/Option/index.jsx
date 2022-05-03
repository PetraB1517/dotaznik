import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({type,text, onSelected}) => (
  <div onClick={() => onSelected()} className="option">
    <Icon type={type} />
    <div>{text}</div>
  </div>
);

export default Option;