import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import TopBar from './components/TopBar';
import DateCard from './components/DateCard';
import Buttons from './components/Buttons';
import Loading from './components/Loading';

import {fetchRandomUser, swipeLeft, swipeRight} from './actions/'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;

    font-family: 'Montserrat', sans-serif;
  }
`;

const IPhoneBackground = styled.div`
  background-color: rgb(250, 250, 250);
  background-image: url("https://raw.githubusercontent.com/Wombbu/rekry/master/ui/public/iphone.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const PhoneDisplayWrapper = styled.div`
  position: absolute;
  margin: auto;
  background-color: #fff;
  width: 265px;
  height: 470px;
  top: -3px;
  bottom: 0;
  left: 1px;
  right: -0.5px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

const App = props => {
  useEffect(() => {
    props.fetchRandomUser();
  }, []);

  const onAccept = () => {
    if (props.loading) return;

    props.swipeRight();
    
    setTimeout(() => {
      props.fetchRandomUser();
    }, 500);
  }

  const onDecline = () => {
    if (props.loading) return;

    props.swipeLeft();
    
    setTimeout(() => {
      props.fetchRandomUser();
    }, 500);
  }

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {props.loading || props.profile === null ? (
          <Loading />
        ) : (
          <DateCard
            imageUrl={props.profile.picture.large}
            name={props.profile.name.first}
            age={props.profile.dob.age}
            animation={props.animation}
            style={props.animation === '' ? 'opacity: 0' : ''}
          />  
        )}
        <Buttons
          onAccept={onAccept}
          onDecline={onDecline}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
};

const mapStateToProps = state => {
  return {
      profile: state.profile,
      loading: state.loading,
      animation: state.animation
  };
}

const mapDispatchStateToProps = dispatch => ({
  fetchRandomUser: () => dispatch(fetchRandomUser()),
  swipeLeft: () => dispatch(swipeLeft()),
  swipeRight: () => dispatch(swipeRight())
});

export default connect(mapStateToProps, mapDispatchStateToProps)(App);