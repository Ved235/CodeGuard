/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (

      <Image src={logo} sx={{ display: 'flex'}} alt="CodeGuard Logo" />

  );
}
