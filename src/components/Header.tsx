import { Col, Colors, Grid, Icon, Row } from '@class101/ui';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import LinkWithLang from './LinkWithLang';
import SearchInput from './SearchInput';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Header: React.FC = () => {
  const translation = useTranslation();

  const [menu, openMenu] = useState(false);
  const logo =
    typeof window !== 'undefined' && window.innerWidth > 425
      ? '/images/logo_for_channing.png'
      : '/images/logo_for_channing.png';

  const toggleMenu = () => openMenu(!menu);

  return (
    <Navbar bg="" expand="lg">
      <NoHoverLink to={`/`}>
        <LogoIcon src={logo} alt="Channing" />
      </NoHoverLink>
      <Navbar.Brand href="#home" ></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#link">R E S U M E</Nav.Link> */}
          <NavDropdown title="M E N U" id="basic-nav-dropdown">
            <NavDropdown.Item href="http://developer-channing.com/">H O M E  </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://github.com/CgodL">G I T H U B</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://developer-channing.com/ko/tags">T A G S</NavDropdown.Item>

          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    // <NavConatiner>
    //   <Grid>
    //     <Row>
    //       <Col>
    //         <NavInnerContainer>
    //           <NoHoverLink to={`/`}>
    //             <LogoIcon src={logo} alt="Channing" />
    //           </NoHoverLink>
    //           <SearchInput />
    //           <MenuContainer onClick={toggleMenu}>
    //             <Icon.Menu fillColor={Colors.gray600} />
    //             {menu && (
    //               <NavLinkList>
    //                 <ExternalNavLink
    //                   href="http://developer-channing.com/"
    //                 // target="_blank"
    //                 >
    //                   H O M E
    //                 </ExternalNavLink>

    //                 <ExternalNavLink
    //                   href="https://github.com/CgodL"
    //                   target="_blank"
    //                 >
    //                   G I T
    //                 </ExternalNavLink>

    //                 <ExternalNavLink
    //                   href="http://developer-channing.com/ko/tags"
    //                 // target="_blank"
    //                 >
    //                   T A G S
    //                 </ExternalNavLink>

    //               </NavLinkList>
    //             )}
    //           </MenuContainer>
    //         </NavInnerContainer>
    //       </Col>
    //     </Row>
    //   </Grid>
    // </NavConatiner>
  );
};

export default Header;

const NavConatiner = styled.nav`
  padding: 16px 0px;
`;

const NavInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  display: block;
  height: 50px;
  width: auto;
  margin: 0;
`;

const NoHoverLink = styled(LinkWithLang)`
  box-shadow: none;
  &:hover {
    box-shadow: none;
    text-decoration: none;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const NavLinkList = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 0;
`;

const navLinkCss = css`
  display: block;
  color: ${Colors.gray900};
  border: ${Colors.gray200} 1px solid;
  background: white;
  font-size: 16px;
  padding: 8px;
  margin: -1px;
  width: 120px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: ${Colors.gray500};
    text-decoration: underline;
  }
`;

const NavLinkWithLang = styled(LinkWithLang)`
  ${navLinkCss};
`;

const NavLink = styled(Link)`
  ${navLinkCss};
`;

const ExternalNavLink = styled.a`
  ${navLinkCss};
`;
