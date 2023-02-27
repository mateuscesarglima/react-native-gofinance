import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: 18px 16px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 18px;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Category = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
