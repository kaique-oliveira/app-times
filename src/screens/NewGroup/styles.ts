import theme from "@theme/index";
import styled, { DefaultTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};

  padding: 52px 24px 32px 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 56,
    color: theme.COLORS.GREEN_700,
  })
)`
  align-self: center;
`;
