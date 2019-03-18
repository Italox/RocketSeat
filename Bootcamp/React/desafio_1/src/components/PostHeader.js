import React from 'react';

const Header = props => (
  <div className="post_header">
    <div className="header_1">
      <img src={props.avatar} alt="" />
    </div>
    <div className="header_2">
      <h2>{props.name}</h2>
      <div className="hora">{props.hora}</div>
    </div>
  </div>
);

export default Header;
