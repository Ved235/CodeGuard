/** @jsx jsx */
import { jsx, Image } from "theme-ui";

import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export default function Logo() {

    return <Image src={logoLight} sx={{ display: "flex"  }} alt="CodeGuard Logo" />;
  
}
