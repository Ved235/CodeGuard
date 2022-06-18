/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from '../link';
import Logo from '../logo';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
   
        }}
      >
        <Box sx={styles.middle}>
          <Logo />
          <Text as="p" sx={styles.right}> 
            &copy; {new Date().getFullYear()} - Design &
            Developed by Vedant, Omar and Leo
          </Text>
        </Box>

      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    paddingBottom: 20,
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
};
<Box sx={styles.right}>
<Link path="/" label="Home" />
<Link path="/" label="Adversite" />
<Link path="/" label="Supports" />
<Link path="/" label="Marketing" />
<Link path="/" label="FAQ" />
</Box>