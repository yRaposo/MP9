import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar, Icon } from '@rneui/themed';
import { Button } from "react-native-elements";
import users from "../data/users";

export default (props) => {

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", { user })}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="black" />}
                />
                <Button
                    onPress={() => props.navigation.navigate("UserForm", { user })}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                rightElement={getActions(user)}
                bottomDivider
                onPress={() => props.navigation.navigate("UserForm", { user })}
            >
                <Avatar size={50} rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.nome}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}