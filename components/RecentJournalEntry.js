import { View, Text, Image } from "react-native"

export default function RecentJournalEntry(){
    return(
        <View className="bg-black rounded-lg my-8 h-64">
            <Text className="text-4xl text-white p-8 z-10">Hello!</Text>
            <Image 
                source={{uri: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80'}}
                className="w-full h-full opacity-25 grayscale absolute"
            />
        </View>
    )
}