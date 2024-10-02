import { colors, fonts } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    marginHorizontal: 24,
    marginBottom: 8,
    backgroundColor: colors.gray[500],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[400],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  radioButtonContainer: {
    height: 24,
    width: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButton: {
    height: 17,
    width: 17,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    height: 17,
    width: 17,
    borderRadius: 12,
    backgroundColor: colors.purpleDark,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.gray[100],
  },
  descriptionSelected: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.gray[300],
    textDecorationLine: "line-through",
  },
  deleteButton: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
