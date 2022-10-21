import React from 'react';
import { getProfile, login } from '@react-native-seoul/kakao-login';
import { firebase } from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async (value) => {
  try {
    const jsonToken = JSON.stringify(value);
    await AsyncStorage.setItem('token', jsonToken);
  } catch (e) {
    console.log(e);
  }
};

const setId = async (value) => {
  try {
    await AsyncStorage.setItem('id', `${value}`);
  } catch (e) {
    console.log(e);
  }
};

export const OnPressLogin = async () => {
  const { accessToken, refreshToken } = await login();
  const { id } = await getProfile();

  setToken({ accessToken, refreshToken });
  setId(id);

  firebase
    .app()
    .database(
      'https://rolling-paper-16649-default-rtdb.asia-southeast1.firebasedatabase.app/'
    )
    .ref(`/${id}`)
    .set({ id: `${id}` });
};
