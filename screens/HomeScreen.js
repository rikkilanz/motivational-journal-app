import { View, Text, Image, ScrollView, FlatList } from "react-native";

import RecentJournalEntry from "../components/RecentJournalEntry";
import PreviousJournalEntry from "../components/PreviousJournalEntry";

import { getAllJournalEntry } from "../data/journal-entries-data";

export default function HomeScreen(){
    const renderItem = ({data}) => (
        <PreviousJournalEntry data={data} />
    )
    return(
        <ScrollView className="flex flex-col bg-white px-8">
            <RecentJournalEntry />
            <FlatList
                data={getAllJournalEntry()}
                renderItem={renderItem}
                keyExtractor={data => data.id}
            />
        </ScrollView>
    )
}