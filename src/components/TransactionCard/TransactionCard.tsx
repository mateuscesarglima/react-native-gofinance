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
        <Title></Title>
        <Amount></Amount>
      </Header>
      <Footer>
        <CategoryBox>
          <Icon />
          <CategoryText></CategoryText>
        </CategoryBox>
        <Data></Data>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
