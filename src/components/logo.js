/** @jsx jsx */
import { jsx, Image } from 'theme-ui';

import logo from './logo.svg';

export default function Logo() {
  return (

      <Image src={logo} sx={{ display: 'flex'}} alt="CodeGuard Logo" />

  );
}
