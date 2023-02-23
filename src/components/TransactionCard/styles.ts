import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
`;
export const Header = styled.View``;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.success};
  margin-top: 2px;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 19px;
`;
export const CategoryBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)};
  color: ${({ theme }) => theme.colors.text};
`;
export const CategoryText = styled.Text`
  margin-left: 17px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)};
`;
export const Data = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)};
`;
