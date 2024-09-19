'use client'
import { Header } from '@/components/header';
import { Slide } from '@/components/slide';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/ui/Loader';
import { Typography } from '@/components/ui/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const instance = axios.create({
    baseURL: 'https://api.ecothon.quassbot.ru',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})
export default function EventPage({ params }: { params: { id: string } }) {
    const [eventInfo, setInfo] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    let tags = [];
    useEffect(() => {
        instance.get(`/events/${params.id}`)
            .then((response) => {
                setInfo(response.data);
                setIsLoading(false); // Set loading to false on success
                for (let i = 0; i < response['tags'].length(); i++) {
                    tags.push(<Typography>{response['tags'][i]}</Typography>);
                }
                console.log(tags);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false); // Set loading to false on error
            });
    }, []);
    return <div className="">
        <Header/>
        <div className="flex flex-row ">
            <Slide></Slide>
            <div className="flex flex-col rounded-2xl">
                {isLoading ? <Loader/> : <div className="flex flex-col rounded-2xl justify-center">
                    <Image width={1136} height={360} className="w-[1136px] h-[360px] rounded-2xl"
                           src={eventInfo['bannerUrl']} alt={'image'}/>
                    <div className="absolute top-[380px] text-white left-[600px]">
                        <div className="flex flex-row">{tags}</div>
                        <div className="text-2xl">{eventInfo['name']}</div>
                        <div className="flex flex-row">

                        </div>
                        <Button className="w-[154px] h-[44px]">Регистрация</Button>
                    </div>
                    <div className="flex flex-col gap-12 h-fit mt-[48px] justify-center content-center flex-wrap">
                        <div className="flex flex-col gap-4">
                            <Typography className={'ml-[33%]'} size="base1" font={'semibold'}>О мероприятии</Typography>
                            <Typography size="base3" font={'medium'} className={'ml-[33%] mt-[16px]'}>{eventInfo['description']}</Typography>
                        </div>
                        <div className="h-[404px] w-[752px] ">
                            <img src="https://www.ayda.ru/images/cities/perm/maps/perm-tourist-map.gif"
                                 className="object-cover"></img>
                        </div>
                        <div>
                            {eventInfo['location']}
                        </div>
                    </div>
                </div>}

            </div>
        </div>
    </div>
}

interface IReport {
    id: number
}
const Reports = (props: IReport) => {
    const [reports,setReport] = useState([])
    const []
}