import { StyleSheet } from 'react-native'
import React from 'react';
import { Navigation } from './components/card/Navigation';
import MyContext from './MyContext';

export default function App() {

  const [cardItem, setCardItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <MyContext.Provider value={{
      cardItem,
      setCardItem,
      isLoading,
      setIsLoading
    }}>
      <Navigation></Navigation>
    </MyContext.Provider>
  )
}

const styles = StyleSheet.create({



});
