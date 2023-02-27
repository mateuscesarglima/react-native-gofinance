import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/ui/atoms/Button";
import Header from "../../components/ui/organism/Header";
import { categories } from "../../utils/categories";

import {
  Category,
  Container,
  Icon,
  Name,
  Separator,
  Footer,
  ButtonText,
} from "./styles";

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  closeSelectCategory,
  setCategory,
}: Props) => {
  const handleCategorySelect = (category: Category) => {
    setCategory(category);
  };

  return (
    <Container>
      <Header title="Categoria" />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};
