import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 173,
    width: "100%",
    backgroundColor: "#0D0D0D",
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
    borderColor: "#0D0D0D",
    borderWidth: 1,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#F2F2F2",
    height: 16,
    width: 16,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
