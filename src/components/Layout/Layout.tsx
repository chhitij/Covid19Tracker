import React from 'react';
import Aux from '../hoc/auxillary';
import Header from '../UI/Header/Header';
import Footer from '../UI/Footer/Footer';

const Layout = (props) => {
  return (
    <Aux>
      <Header changeTheme={props.changeTheme}></Header>
      <main>{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
