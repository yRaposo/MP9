import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

export default ({ route }) => {
    const { user } = route.params;

    const Genero = user.sexo === "M" ? <Icon name='male' color='#31C1F5' style={styles.Icon}/> : <Icon name='female' color='#EB65F5'style={{fontWeight: '600'}}/>;


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatarUrl }} style={styles.Image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.Name}>{user.nome}</Text>
                <View style={styles.infoSubContainer}>
                    <Text style={styles.text}>Genero {Genero}</Text>
                    <Text style={styles.text}><Icon name="place" color='red'/> {user.UF}</Text>
                </View>
                <Text style={styles.text}><Icon name="email" color='black'/> {user.email}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
    },
    infoContainer: {
        alignItems: "center",
    },
    infoSubContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        flexDirection: "row",
        gap: 10,
    },
    Name: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
        textAlign: "center",
        alignContent: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    Icon: {
        fontSize: 20,
        color: "#31C1F5",
        fontWeight: '600',
    }
});