import React, { useState } from 'react';
import { Dropdown, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import './App.css';

function App() {
  const [showNavPuzzlesDrop, setShowNavPuzzlesDrop] = useState(false);

  return (
    <Router>
      <Navbar>
        <Navbar.Brand href="/">MilkRei</Navbar.Brand>
        <Nav activeKey="/">
          <Dropdown as={NavItem} show={showNavPuzzlesDrop}
            onMouseEnter={() => setShowNavPuzzlesDrop(true)}
            onMouseLeave={() => setShowNavPuzzlesDrop(false)}>
            <Dropdown.Toggle as={NavLink} href="/puzzles">Puzzles</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/puzzles/crosswords">Crosswords</Dropdown.Item>
              <Dropdown.Item href="/puzzles/scrambles">Word Scrambles</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
      
      <Switch>
        <Route path="/puzzles">
          {/* TODO */}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
