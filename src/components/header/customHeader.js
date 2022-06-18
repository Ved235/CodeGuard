/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { IoIosUnlock } from 'react-icons/io';
import { NavLink, Link } from 'components/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Logo from 'components/logo';

import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import CustomMobileDrawer from './customMobileDrawer';


export default function CustomHeader({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />



          <Link
            path="/"
            ml={2}
            label="Home"
            sx={styles.headerBtn}
            variant="buttons.primary"
          />
          <CustomMobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    border: '2px solid',
    borderColor: 'primary',
    color: 'primary',
    padding: '8px 24px',

    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '30vw'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#fff',
    },
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',

    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between',
    },
  }
};
