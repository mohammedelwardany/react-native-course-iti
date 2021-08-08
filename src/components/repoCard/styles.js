import { StyleSheet } from "react-native";
export default StyleSheet.create({
    containerparent: {
        backgroundColor: "#fff",
        borderColor: "#e7e7e7",
        margin: 10,
        borderRadius: 15,
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    InfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    img: {
        width: 80,
        height: 80,
        marginEnd: 10,
    },
    title: {
        fontSize: 30
    }
})