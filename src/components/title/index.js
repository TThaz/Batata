import React from "react";
import { StyleSheet, View, Text} from "react-native";

function Title() {
    return (
        <View>
            <Text style={styles.styleTitle}>
                Oficina GarciaAzevedo
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    styleTitle: {
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Title;