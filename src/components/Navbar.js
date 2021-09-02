// Navbar Component
import React, { Fragment } from 'react'
import { Button, Navbar, NavbarBrand, NavbarText } from 'reactstrap'

const MainNavbar =  ({ setContact }) => (
  <Fragment>
    <Navbar color='dark' dark expand='md' style={{ justifyContent: 'space-between' }}>
      <NavbarBrand href='/'>ITEEA STEL eTool</NavbarBrand>
      <NavbarText><Button className="float-right" onClick={() => setContact({ display: true })}>Contact</Button></NavbarText>
    </Navbar>
  </Fragment>
)

export default MainNavbar