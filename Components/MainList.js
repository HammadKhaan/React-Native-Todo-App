import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const MainList = ({items, setItems}) => {
  const del = i => {
    return setItems(items.filter((item, index) => index !== i));
  };

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <View>
            <View style={styles.textView}>
              <Text style={styles.text}>{item}</Text>
              <View style={styles.icon}>
                <Icon
                  name="remove"
                  size={20}
                  color="firebrick"
                  onPress={() => del(index)}
                  style={{marginLeft: 20}}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontSize: 20,
    flex: 5,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
});

export default MainList;
