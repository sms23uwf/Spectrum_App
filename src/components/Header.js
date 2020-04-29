import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PersistentDrawerLeft } from './PersistentDrawerLeft';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div>
        <PersistentDrawerLeft/>
      </div>
    </div>
  </header>
);

export default Header;
