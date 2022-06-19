/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useCallback } from 'react';
import Sticky from 'react-stickynode';
import { useStickyState } from '../contexts/app/app.provider';
import Header from './header/header';
import CustomHeader from './header/customHeader';
import Footer from './footer/footer';
import { Waypoint } from 'react-waypoint';
import { useStickyDispatch } from '../contexts/app/app.provider';
import { useRouter  } from 'next/router'

export default function Layout({ children },{ router }) {
  const { pathname } = useRouter();
  
  const isSticky = useStickyState('isSticky');
  const dispatch = useStickyDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      setSticky();
    }
    if (currentPosition === 'below') {
      removeSticky();
    }
  };
 if(pathname === "/obfuscate"){
  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={1000}>
        
        <CustomHeader className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
      }
      else{
        return (
          <React.Fragment>
            <Sticky enabled={isSticky} innerZ={1000}>
              
              <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
            </Sticky>
            <Waypoint
              onEnter={removeSticky}
              onPositionChange={onWaypointPositionChange}
            />
            <main
              sx={{
                variant: 'layout.main',
              }}
            >
              {children}
            </main>
            <Footer />
          </React.Fragment>
        );
      }
}
