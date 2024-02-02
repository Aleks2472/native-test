import React from "react";
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import axios from "axios"

export default function Card({ item }) {

    const [buttomThicknessActive, setButtomThicknessActive] = React.useState(0);
    const [buttonDoughSizeActive, setButtonDoughSizeActive] = React.useState(0);

    const addCartButton = (id) => {

        const addCart = {
            id: item.id,
            name: item.name,
            size: item.size[buttonDoughSizeActive],
            dough: item.dough[buttomThicknessActive],
            price: item.price
        }

        try {
            axios.post('https://642e6fc62b883abc640da793.mockapi.io/cart', addCart)
            Alert('add', item.name)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={styles.card}>
            <View style={styles.cardImageContainer}>
                <Image style={styles.cardImage} source={require('../../assets/image.jpg')} />
            </View>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.cardButton}>
                <View style={styles.cardThickness}>
                    {item.dough.map((dough, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => setButtomThicknessActive(index)}>
                            <View
                                style={buttomThicknessActive === index ? styles.cardThicknessItemActive : styles.cardThicknessItem}>
                                <Text
                                    style={styles.cardThicknessItemTitle}>{dough}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
                <View style={styles.cardDoughSize}>
                    {item.size.map((size, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => setButtonDoughSizeActive(index)}
                        >
                            <View
                                style={buttonDoughSizeActive === index ? styles.cardDoughSizeItemActive : styles.cardDoughSizeItem}>
                                <Text
                                    style={styles.cardDoughSizeItemTitle}>{size}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
            <View style={styles.buttonAddContainer}>
                <Text style={styles.cardPrice} >{item.price}</Text>
                <TouchableWithoutFeedback 
                onPress={() => addCartButton(item.id)}>
                    <View style={styles.cardButtonAdd}>
                        <Text style={styles.cardButtonAddTitle}>Add</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    card: {
        width: '100%',
        height: 550,
        marginBottom: 30,
        backgroundColor: 'white',
        borderBottomWidth: 1,
    },

    cardImageContainer: {
        width: '100%',
        height: 260,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },

    cardImage: {
        width: 260,
        height: 260
    },

    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 20
    },

    cardButton: {
        width: '100%',
        height: 130,
        backgroundColor: '#F3F3F3',
        marginBottom: 20,
        borderRadius: 15,
        padding: 14
    },

    cardThickness: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginBottom: 7
    },

    cardThicknessItem: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardThicknessItemActive: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },

    cardThicknessItemTitle: {
        fontSize: 20
    },

    cardDoughSize: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },

    cardDoughSizeItem: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardDoughSizeItemActive: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },

    cardDoughSizeItemTitle: {
        fontSize: 20
    },

    buttonAddContainer: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    cardPrice: {
        fontSize: 26,
        fontWeight: '600'
    },

    cardButtonAdd: {
        width: 155,
        height: '100%',
        backgroundColor: '#EB5A1E',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardButtonAddTitle: {
        fontSize: 20,
        color: 'white'
    }

})