import { colors, fonts } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 173,
    width: "100%",
    backgroundColor: colors.gray[700],
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  form: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -54 / 2,
    height: 54,
  },
  input: {
    flex: 1,
    height: 54,
    borderColor: colors.gray[700],
    borderWidth: 1,
    backgroundColor: colors.gray[500],
    color: colors.gray[100],
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginRight: 4,
  },
  inputFocused: {
    borderColor: colors.purpleDark,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: colors.blueDark,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextContainer: {
    borderWidth: 2,
    borderColor: colors.gray[100],
    borderRadius: 999,
    height: 16,
    width: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 15,
    color: colors.gray[100],
    fontWeight: "bold",
  },
});
