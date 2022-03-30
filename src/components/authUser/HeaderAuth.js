import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {MyColor} from '../../assets/colors';

const HeaderAuth = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={28}
          color="black"
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: MyColor.primary,
  },
  headerContainer: {
    marginTop: 21,
  },
  container: {
    marginTop: 32,
  },
});
export default memo(HeaderAuth);
