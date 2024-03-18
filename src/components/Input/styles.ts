import theme from "@theme/index";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
  background-color: ${theme.COLORS.GRAY_700};
  border-radius: 6px;

  color: ${theme.COLORS.WHITE};

  flex: 1;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;

  max-height: 56px;
  min-height: 56px;

  padding: 16px;
`;
