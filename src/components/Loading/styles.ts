import theme from "@theme/index";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    color: theme.COLORS.GREEN_700,
  })
)``;
