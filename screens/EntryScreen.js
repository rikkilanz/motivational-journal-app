import { useEffect, useState } from "react"
import { View, Text, Image, TextInput } from "react-native";



export default function EntryScreen(){
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [isLoaded, isLoading] = useState(false);

    //Fetch data from API

    useEffect(() => {
        let endpoint = 'https://api.themotivate365.com/stoic-quote'
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
    }, []);

    let questionPromptNum = Math.floor(Math.random() * 5);
    let questionPrompt = '';

    switch (questionPromptNum) {
        case 1:
            questionPrompt = 'How do you feel about the message?'
        break;
        case 2:
            questionPrompt = 'What are your thoughts?'
        break;
        case 3:
            questionPrompt = 'Reflect on the message.'
        break;
        case 4:
            questionPrompt = 'What are you feeling?'
        break;
        case 5:
            questionPrompt = 'How do you feel about the quote?'
        break;
        default:
            questionPrompt = 'How do you feel about the message?'
    }


    return(
        <View className='flex grow bg-[#010203] items-center justify-center px-10'>
            <Text style={{fontFamily: 'Baskervville'}} className="text-xl text-center text-white">{data.quote}</Text>
            <Text style={{fontFamily: 'Baskervville'}} className="text-xl text-center text-white">- {data.author}</Text>
            <TextInput 
                placeholder={questionPrompt}
                placeholderTextColor='gray'
                className="w-full text-white"
                multiline={true}
            />
        </View>
    )

}