import { useEffect } from 'react';
import Router from 'next/router';

import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
