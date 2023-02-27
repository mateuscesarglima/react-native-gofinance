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
  TransactionList,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  ITransactionCard,
} from "../../components/TransactionCard/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View } from "react-native";

export interface IDataListProps extends ITransactionCard {
  id: string;
}

export const Dashboard = () => {
  const data: IDataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { icon: "dollar-sign", name: "Vendas" },
      date: "13/04/2020",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { icon: "dollar-sign", name: "Vendas" },
      date: "13/04/2020",
    },
    {
      id: "3",
      type: "positive",
      title: "Aluguel do apartamento",
      amount: "R$ 1000,00",
      category: { icon: "dollar-sign", name: "Vendas" },
      date: "13/04/2020",
    },
  ];

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
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </TransactionsContainer>
    </Container>
  );
};

// title="Desenvolvimento de site"
//             amount="12.000,00"
//             category={{ name: "Vendas", icon: "dollar-sign" }}
//             date="13/14/2020"
