import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from 'axios';

import TopBar from './components/TopBar';
import DateCard from './components/DateCard';
import Buttons from './components/Buttons';
import Loading from './components/Loading';

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

const App = () => {
  let [animation, setAnimation] = useState('');
  let [id, setId] = useState(0);

  const [users, setUsers] = useState([{
    picture: {
      large: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    name: {first: 'Pena'},
    dob: {age: 50}
  }]);

  const cardStatus = "CENTER";
  let [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=100").then(res => {
      const results = res.data.results;
      
      let usersArray = [];

      usersArray = results.map((profile) => {
        return {
          picture: {
            large: profile.picture.large
          },
          name: {first: profile.name.first},
          dob: {age: profile.dob.age}
        };
      });

      setUsers(usersArray);
      setAnimation('fadeIn');
      setLoading(false);
    });
  }, []);
  

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {loading || users == null ? (
          <Loading />
        ) : (
          <DateCard
            imageUrl={users[id].picture.large}
            name={users[id].name.first}
            age={users[id].dob.age}
            cardStatus={cardStatus}
            animation={animation}
            style={animation === '' ? 'opacity: 0' : ''}
          />  
        )}
        <Buttons
          onAccept={() => {setAnimation("love"); setTimeout(() => {setId(id + 1); setAnimation("fadeIn"); }, 700)}}
          onDecline={() => {setAnimation("hate"); setTimeout(() => {setId(id + 1); setAnimation("fadeIn"); }, 700)}}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
};

export default App;