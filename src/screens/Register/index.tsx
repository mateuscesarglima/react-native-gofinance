import React, { useState } from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/atoms/Button";
import { TransactionTypeButton } from "../../components/ui/atoms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/ui/molecules/CategorySelectButton";
import { InputForm } from "../../components/ui/molecules/InputForm";
import Header from "../../components/ui/organism/Header";
import { CategorySelect } from "../CategorySelect";
import { Container, Fields, Form, TransactionTypes } from "./styles";

interface FormData {
  name: string;
  amount: string;
}

export const Register = () => {
  const [transactionType, setTransactionType] = useState<string>("");
  const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const { control, handleSubmit } = useForm();

  const transactionTypeHandle = (type: "up" | "down") => {
    setTransactionType(type);
  };

  const openCategoryModalHandle = () => {
    setCategoryModalOpen(true);
  };

  const closeCategoryModalHandle = () => {
    setCategoryModalOpen(false);
  };

  const handleRegister = (form: FormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  };

  return (
    <Container>
      <Header title="Cadastro" />
      <Form>
        <Fields>
          <InputForm placeholder="Nome" name="name" control={control} />
          <InputForm placeholder="Preço" name="amount" control={control} />
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
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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
