import React from 'react';
import SearchInput from 'components/header/SearchInput';
import IndexHeaderNav from 'components/header/IndexHeaderNav';
import {NavLink} from 'fluxible-router';

const style = require('styles/partials/indexheader.scss');
console.log(style);
class IndexHeader extends React.Component {
  renderSearch() {

    if (this.props.noSearch) {
      return null;
    }
    else {
      return (
        <SearchInput />
      );
    }
  }
  link() {
    if (this.props.navlink === false) {
      return (
        <a href="/">
          <img src="//quran-1f14.kxcdn.com/images/logo-lg-w.png" className="logo" />
        </a>
      );
    }
    else {
      return (
        <NavLink href="/">
          <img src="//quran-1f14.kxcdn.com/images/logo-lg-w.png" className="logo" />
        </NavLink>
      );
    }
  }

  render() {
    console.log(style);
    return (
      <div style={{background: "url('//quran-1f14.kxcdn.com/images/index-bg.jpg')", backgroundSize: 'cover'}}>
        <IndexHeaderNav navlink={this.props.navlink} />
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              {this.link()}
              <h4 className="title">THE NOBLE QUR&#x27;AN</h4>
              {this.renderSearch()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IndexHeader.displayName = 'IndexHeader';

export default IndexHeader;
