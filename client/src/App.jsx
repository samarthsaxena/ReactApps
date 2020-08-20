import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

// import Header from './Header';
import Chat from './Chat';
// import Footer from './Footer';

// const Header = () => <Header />;
const App = () => <Chat />;
// const Footer = () => <Footer />;

// ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<App />, document.getElementById("app"));
// ReactDOM.render(<Footer />, document.getElementById("footer"));
