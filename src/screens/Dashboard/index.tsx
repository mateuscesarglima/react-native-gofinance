import React from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCard } from "../../HighlightCard";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/75099576?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mateus</UserName>
            </User>
          </UserInfo>
          <Icon name="power" size={RFValue(24)} />
        </UserWrapper>
      </Header>
      <HighlightCard />
    </Container>
  );
};

export default Dashboard;
