import React, { useState } from "react";
import { Button } from "../../components/ui/atoms/Button";
import { CategorySelectButton } from "../../components/ui/molecules/CategorySelectButton";
import { Input } from "../../components/ui/atoms/Input";
import { TransactionTypeButton } from "../../components/ui/atoms/TransactionTypeButton";
import Header from "../../components/ui/organism/Header";
import { Container, Form, Fields, TransactionTypes } from "./styles";
import { CategorySelect } from "../CategorySelect";
import { Modal } from "react-native";

export const Register = () => {
  const [transactionType, setTransactionType] = useState<string>("");
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const transactionTypeHandle = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const openCategoryModalHandle = () => {
    setCategoryModalOpen(true);
  };

  const closeCategoryModalHandle = () => {
    setCategoryModalOpen(false);
  };

  return (
    <Container>
      <Header title="Cadastro" />
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
          <CategorySelectButton
            title={category.name}
            onPress={openCategoryModalHandle}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          closeSelectCategory={closeCategoryModalHandle}
          setCategory={setCategory}
        />
      </Modal>
    </Container>
  );
};
