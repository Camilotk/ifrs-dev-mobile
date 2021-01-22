import React from 'react';
import { useFindUsersReducer } from "../hooks/useFindUsersReducer";
import { StyleSheet, Text, View, FlatList } from 'react-native';

function Users() {
    const { state } = useFindUsersReducer();
    const {data, loading, error} = state;
    
    const Item = ({data}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{data}</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item data={item.username + " : " + item.name} />
    );

    return (
        <View style={styles.container}>
            { error ? <Text style={styles.error}>{error}</Text> : null }
            
            { loading ? 
                (<Text style={styles.title}>​Carregando...​</Text>) :
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            }
          
          
        </View>
      );
}

export default Users;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: "#CCC",
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
    },
    error: {
      color: "#FF0000",
      fontSize: 14,
      textAlign: "center",
    },
  });