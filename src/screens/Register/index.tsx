import React, { useState } from "react";
import { Button } from "../../components/Button";
import { CategorySelect } from "../../components/CategorySelect";
import { Input } from "../../components/Input";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

export const Register = () => {
  const [transactionType, setTransactionType] = useState<string>();

  const transactionTypeHandle = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => transactionTypeHandle("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => transactionTypeHandle("down")}
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};
