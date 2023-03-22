import { useEffect, useState } from "react"
import { View, Text, Image, ActivityIndicator } from "react-native"

export default function TimerScreen(){
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    //Fetch data from API

    useEffect(() => {
        let endpoint = 'https://api.goprogram.ai/inspiration'
        setLoading(true)
        fetch(endpoint)
        .then(
            response=>response.json()
        )
        .then(
            (result) => {
                setData(result)
            }
        )
        .catch(
            (error) => {
                setError(error)
            }
        )
        .then(
            setLoading(false)
        )
    }, []);

    if(data.length === 0 || loading){
        return(
            <View className='flex grow bg-[#010203] items-center justify-center'>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    } else {
        return(
            <View className='flex grow bg-[#010203] items-center justify-center px-10'>
                <Text style={{fontFamily: 'Baskervville'}} className="text-xl text-center text-white">{data.quote}</Text>
                <View className='rounded-full bg-white h-[300px] w-[300px] flex items-center justify-center my-8'>
                    <Text className='text-[#010203] font-bold text-6xl'>3:00</Text>
                </View>
            </View>
        )
    }
}