import { colors } from "@/constants/tokens";
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
  buttonText: {
    color: colors.gray[100],
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: colors.gray[100],
    height: 16,
    width: 16,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
