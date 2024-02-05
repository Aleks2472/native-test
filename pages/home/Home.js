import { StyleSheet, SafeAreaView, View, Text, FlatList, ActivityIndicator, RefreshControl, TouchableWithoutFeedback } from 'react-native'
import Card from '../../components/card/Card'
import React, { useContext } from 'react';
import axios from 'axios';
import MyContext from '../../MyContext';

export default function Home({ navigation }) {

    const {
          cardItem,
      setCardItem,
      isLoading,
      setIsLoading
    } = useContext(MyContext)

    function fetchData() {

        setIsLoading(true)
        axios.get('https://642e6fc62b883abc640da793.mockapi.io/data')
            .then(({ data }) => {
                setCardItem(data)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(() => {

        fetchData()

    }, [])

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loading}>
                <View>
                    <ActivityIndicator size="large"></ActivityIndicator>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardFlex}>
                <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
                    data={cardItem}
                    renderItem={({ item }) => <Card key={item.id} item={item}></Card>}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Cart')}>
                <View style={styles.buttonCart}></View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    loading: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        width: '100%',
        height: '100svh',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'

    },

    cardFlex: {
        width: '90%',
    },

    buttonCart: {
        width: 100,
        height: 100,
        backgroundColor: '#EB5A1E',
        position: 'absolute',
        bottom: '10%',
        right: 20,
        borderRadius: 100,
        zIndex: '10'
    }

});
