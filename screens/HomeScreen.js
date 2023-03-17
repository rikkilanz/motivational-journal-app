import { View, Text, Image, ScrollView, FlatList } from "react-native";

import RecentJournalEntry from "../components/RecentJournalEntry";
import PreviousJournalEntry from "../components/PreviousJournalEntry";

import { getAllJournalEntry } from "../data/journal-entries-data";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function HomeScreen(){
    const renderItem = ({item}) => (
        <PreviousJournalEntry entryData={item} />
    )
    return(
        <ScrollView className="flex flex-col bg-black px-8">
            <RecentJournalEntry entryData={getAllJournalEntry()} />
            <FlatList
                data={getAllJournalEntry()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}