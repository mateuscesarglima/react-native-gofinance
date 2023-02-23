import React from "react";
import {
  Container,
  Header,
  Title,
  Amount,
  Footer,
  CategoryBox,
  Icon,
  CategoryText,
  Data,
} from "./styles";

const TransactionCard = () => {
  return (
    <Container>
      <Header>
        <Title>Desenvolvimento de site</Title>
        <Amount>R$ 12.000,00</Amount>
      </Header>
      <Footer>
        <CategoryBox>
          <Icon name="dollar-sign" />
          <CategoryText>Vendas</CategoryText>
        </CategoryBox>
        <Data>13/04/2020</Data>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
