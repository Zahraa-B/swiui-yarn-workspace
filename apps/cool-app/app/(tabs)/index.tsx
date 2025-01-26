import { StyleSheet, View } from "react-native";
import { Button } from "core";

export default function HomeScreen() {
  return (
    <View style={styles.btnContainer}>
      <Button
        label="Don't press"
        theme="primary"
        onPress={() => alert("HEHE")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
