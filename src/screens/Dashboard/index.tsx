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
  HighlightCards,
  TransactionsContainer,
  Title,
  Transactions,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCard } from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

export const Dashboard = () => {
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
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          amount="17.400,00"
          lastTransaction="última entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>
      <TransactionsContainer>
        <Title>Listagem</Title>
        <Transactions>
          <TransactionCard />
        </Transactions>
      </TransactionsContainer>
    </Container>
  );
};
