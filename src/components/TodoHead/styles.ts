import { StyleSheet } from "react-native";
import { colors } from "@/constants/tokens";

export const styles = StyleSheet.create({
  listHeadView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 55,
    paddingHorizontal: 24,
  },
  item: {
    flexDirection: "row",
    gap: 8,
  },
  listHeadTextLeft: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blue,
  },
  countContainer: {
    backgroundColor: colors.gray[400],
    height: 19,
    width: 25,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray[200],
  },
  listHeadTextRight: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.purple,
  },
});
