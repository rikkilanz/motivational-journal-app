import { View, Text, Image } from "react-native"

import { useEffect, useState } from "react"


export default function RecentJournalEntry({entryData}){
    //This grabs the latest journal entry data. Last data of the array
    let latestJournal = entryData.length-1;


    let randomImageNum = Math.floor(Math.random() * 10);
    let randomImageUrl = '';

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [imageData, setImageData] = useState([])
    // Fetch data from API
    useEffect(() => {
        let endpoint = 'https://api.unsplash.com/search/photos/?query=naturebackground&client_id=Y-0Jp4dG934JUGrkdesoahiVkYJi6mGmExsYJRn_91U'
        fetch(endpoint)
        .then(
            response=>response.json()
        )
        .then(
            (result) => {
                setData(result)
            }, 
            (error) => {
                setError(error)
            }
        )
        .then(
            () => {
                setImageData(data.results[randomImageNum].urls.regular)
            }
        )
    }, []);

    return(
        <View className="bg-black rounded-lg my-8">
            <Image 
                source={{uri: 'https://images.unsplash.com/photo-1622512272112-adeced423785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'}}
                className="block absolute max-h-full max-w-full min-h-full min-w-full h-full w-full opacity-25 aspect-square"
            />
            <Text className="text-4xl text-white my-8 px-8 z-10">{entryData[latestJournal].quote}</Text>
            <Text className="text-white my-8 z-10 px-8 text-lg">{entryData[latestJournal].journalEntry}</Text>
        </View>
    )
}