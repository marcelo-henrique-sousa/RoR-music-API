import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Columns, Button, Dropdown } from 'react-bulma-components';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
//images
import Logo from '../../../assets/images/RoRmusicLogo.png';
// import { Container } from './styles';

const ColumnsFullWidth = styled(Columns)`
  width: 100%;
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

function Menu() {

  let actionButton;

  if( useLocation().pathname == '/' ){
    actionButton =  <a href="/users/sign_in" className="is-pulled-right is-right">
                     <Button outlined color="white">ENTRAR</Button>
                    </a>
  }else{
    actionButton =<Dropdown className='is-pulled-right is-right' color='dark' label=      	
                    {<FaUserCircle size="2em" />}>
                    <Dropdown.Item value="other">
                      <a href='/users/edit'>
                        Edit User
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item value="other">
                      <a href='/users/sign_out'>
                        LogOut
                      </a>
                    </Dropdown.Item>
                  </Dropdown>
  }

  return (
    <div>
      <Navbar color="dark">
        <Container>
   		  <ColumnsFullWidth className='is-mobile'>
          <Columns.Column desktop={{size: 2}} mobile={{size: 5}}>
            <img className='image' width='20%' height='20%' src={Logo}/>
          </Columns.Column>
          <Columns.Column desktop={{size: 2}} mobile={{size: 8}}>
            <h3 className="title is-3 has-text-white">RoRmusic</h3>
          </Columns.Column>
          <Columns.Column>
              {actionButton}
          </Columns.Column>
          </ColumnsFullWidth>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;