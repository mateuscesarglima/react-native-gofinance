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

interface Category {
  name: string;
  icon: string;
}

export interface ITransactionCard {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: ITransactionCard;
}

export const TransactionCard = ({ data }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === "negative" && "- "}
          {data.amount}
        </Amount>
      </Header>
      <Footer>
        <CategoryBox>
          <Icon name={data.category.icon} />
          <CategoryText>{data.category.name}</CategoryText>
        </CategoryBox>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
};
