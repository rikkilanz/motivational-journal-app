import { View, Text, Image } from "react-native";

export default function PreviousJournalEntry({data}){
    console.log({data})
    return(
        <View className="bg-black rounded-lg my h-32 p-8">
            {/* <Text className="text-white">{data.quote}</Text> */}
            <Text className="text-white">Quote</Text>
            <Text className="text-white">Entry</Text>
            <Text className="text-white">Date</Text>
        </View>
    )
}