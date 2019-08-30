import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import Container from 'react-bootstrap/Container';
import './index.css';

ReactDOM.render(
    <Container fluid>
        <div className="wrapper">
            <Header />
            <Body />
        </div>
    </Container>,
    document.getElementById('root')
  );