import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native'
import Card from './components/card/Card';
import React from 'react';
import axios from 'axios';

export default function App() {

  const [cardItem, setCardItem] = React.useState([]);

  React.useEffect(() => {

    axios.get('https://642e6fc62b883abc640da793.mockapi.io/data')
    .then(({data}) => {
      setCardItem(data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardFlex}>
        {/* {cardItem.map((item) => (
          <Card key={item.id}></Card>
        ))} */}
        <FlatList 
          data={cardItem}
          renderItem={({item}) => <Card key={item.id} item={item}></Card>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100svh',
    flexDirection: 'row', 
    justifyContent: 'center',
  
  },

  cardFlex: {
    width: '90%',
  }

});
