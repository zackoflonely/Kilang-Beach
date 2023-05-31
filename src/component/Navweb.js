import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import {GiPalmTree} from "react-icons/gi";
import { Link as Linkobj } from "react-scroll";

function Navweb() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className='bg-nav navbar' fixed='top' variant='dark'>
      <Nav className='mx-auto font-nav my-navbar'>
        <Nav.Link href='#home'>
          <Link to='' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link href='#info'>
          <Link to='about' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
            Information
          </Link>
        </Nav.Link>
        <Nav.Link>
        <Link to='' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
          <GiPalmTree/>
        </Link>
        </Nav.Link>
        <Nav.Link href='#artikel'>
          <Link to='fasilitas' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
            Article
          </Link>
        </Nav.Link>
        <NavDropdown title="More" id="basic-nav-dropdown">
        <NavDropdown.Item href='#features'>
          <Link to='galeri' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
            Galery
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href='#pricing'>
          <Link to='myprofile' className='font-nav' style={{ textDecoration: 'none', color: 'inherit' }}>
            Profile
          </Link>
        </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Navweb;