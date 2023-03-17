import { View, Text, Image } from "react-native";

export default function PreviousJournalEntry({entryData}){
    return(
        <View className="bg-white rounded-lg my-2 p-8">
            <Text className="text-black text-base truncate">{entryData.quote}</Text>
            <Text className="text-black text-sm my-2">{entryData.journalEntry}</Text>
            <Text className="text-black text-xs">{entryData.date}</Text>
        </View>
    )
}