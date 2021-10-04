import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from './Components/Header';
import MainList from './Components/MainList';

const App = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.mainInput}>
          <TextInput
            placeholder="Enter a task..."
            style={styles.input}
            onChangeText={e => setValue(e)}
            value={value}
          />
          <TouchableOpacity style={styles.buttons}>
            <Button
              onPress={() => {
                if (value !== '') {
                  setItems(prev => [...prev, value]);
                  setValue('');
                }
              }}
              title="ADD ITEM"
              color="orange"
            />
          </TouchableOpacity>
        </View>
        <MainList items={items} setItems={setItems} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainInput: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15,
    paddingRight: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 2,
  },
  buttons: {
    flex: 1,
    paddingTop: 14,
    color: 'orange',
  },
});

export default App;
