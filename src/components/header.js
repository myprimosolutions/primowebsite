<<<<<<< HEAD
import React from "react"
import styles from "../styles/styles.module.scss"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Navbar className={styles.nav} light expand="md">
        <NavbarBrand className={styles.logo} href="/">
          Primo Solutions
        </NavbarBrand>
        <NavbarToggler className={styles.togLayout} onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/services"
                >
                  Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout2}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/about"
                >
                  About
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
=======
import React from "react"
import styles from "../styles/styles.module.scss"
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <Navbar className={styles.nav} light expand="md">
        <NavbarBrand className={styles.logo} href="/">
          Primo Solutions
        </NavbarBrand>
        <NavbarToggler className={styles.togLayout} onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/services"
                >
                  Services
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className={styles.navLayout2}>
              <NavLink>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/about"
                >
                  About
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
>>>>>>> 30df615767adaef0d9586833df76ac3a9cd25511
