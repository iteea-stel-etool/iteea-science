// Navbar Component
import React, { Fragment } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default () => (
  <Fragment>
    <Navbar color='dark' dark expand='md'>
      <NavbarBrand href='/'>Lesson Project</NavbarBrand>
    </Navbar>
  </Fragment>
)