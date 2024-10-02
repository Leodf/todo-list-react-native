import { colors, fonts } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.gray[400],
    borderTopWidth: 1,
    marginHorizontal: 24,
  },
  info: {
    alignItems: "center",
    marginVertical: 48,
    marginHorizontal: 20,
  },
  clipboard: {
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.gray[300],
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.gray[300],
  },
});
