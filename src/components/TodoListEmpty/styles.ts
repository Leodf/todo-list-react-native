import { colors } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.gray[400],
    borderTopWidth: 1,
    marginTop: 20,
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
    color: colors.gray[300],
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: colors.gray[300],
  },
});
