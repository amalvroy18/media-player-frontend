import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <Navbar className="bg-dark-">
    <Container>
      <Navbar.Brand>
        <h4 className='text-warning'>
          <FontAwesomeIcon icon={faVideo} beat className='me-3' />
          media player
        </h4>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header