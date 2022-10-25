import React from "react";
import { View, Image, TouchableOpacity, FlatList } from "react-native";
import LogoText from "../images/logoText.png";
import Message from "../images/message.png";
import styled from "styled-components/native";
import { DATA } from "../DATA/MEMODATA";

export const MainPage = () => {
  const renderItem = ({ item }) => (
    <Memo props={item}>
      <MemoText>{item.title}</MemoText>
    </Memo>
  );
  const onPressLogin = () => {};

  return (
    <Container>
      <LogoContainer>
        <LogoImg></LogoImg>
        <LogoTextImg>
          <Image source={LogoText}></Image>
        </LogoTextImg>
      </LogoContainer>

      <MemoContainer>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          numColumns={3}
        />
      </MemoContainer>

      <CopyTextContainer>
        <CopyText>추억의 롤링페이퍼에서</CopyText>
        <CopyText>추억을 만들고 간직하세요!</CopyText>
      </CopyTextContainer>

      <LoginBtnContainer>
        <LoginBtn onPress={onPressLogin}>
          <Image source={Message}></Image>
          <LoginBtnText>카카오 계정으로 시작하기</LoginBtnText>
        </LoginBtn>
      </LoginBtnContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;
const LogoImg = styled.View``;
const LogoTextImg = styled.View``;

const MemoContainer = styled.View`
  flex: 6;
  margin-top: 10%;
  width: 85%;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const Memo = styled.View`
  background-color: ${({ props }) => props.color};
  border-radius: 20px;
  width: 85px;
  height: 85px;
  transform: rotate(${({ props }) => props.rotate}deg);
  align-items: center;
  justify-content: center;
  margin: 4px 5px;
`;
const MemoText = styled.Text`
  font-family: "LeeSeoyun";
`;

const CopyTextContainer = styled.View`
  flex: 1;
  align-items: center;
`;
const CopyText = styled.Text`
  font-size: 32px;
  font-weight: 400;
  font-family: "LeeSeoyun";
`;

const LoginBtnContainer = styled.View`
  flex: 2;
  justify-content: center;
  width: 80%;
  margin-top: 8%;
`;
const LoginBtn = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 60px;
  flex: 0.5;
  border-radius: 8px;
`;

const LoginBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.kakaoFontColor};
  font-weight: 600;
`;
