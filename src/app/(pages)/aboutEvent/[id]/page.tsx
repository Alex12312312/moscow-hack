'use client'
import { Header } from '@/components/header';
import { Slide } from '@/components/slide';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/ui/Loader';
import { Typography } from '@/components/ui/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GetComments from '@/app/lib/apollo/schemas/events/commentsById.gql'
import { DocumentNode, useQuery } from '@apollo/client';

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
    const tags: any[] = [];

    useEffect(() => {
        instance.get(`/events/${params.id}`)
            .then((response) => {
                setInfo(response.data);
                setIsLoading(false); // Set loading to false on success
                // @ts-ignore
                for (let i = 0; i < response['tags'].length(); i++) {
                    // @ts-ignore
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
            <Slide>
                <div className="flex flex-col rounded-2xl">
                    {isLoading ? <Loader/> : <div className="flex flex-col rounded-2xl justify-center">
                        // @ts-ignore
                        <Image width={1136} height={360} className="w-[1136px] h-[360px] rounded-2xl"

                               src={(eventInfo as {bannerUrl: string}).bannerUrl} alt={'image'}/>
                        <div className="absolute top-[380px] text-white left-[600px]">
                            <div className="flex flex-row">{tags}</div>
                            <div className="text-2xl">{(eventInfo as {name: string}).name}</div>
                            <div className="flex flex-row">

                            </div>
                            <Button className="w-[154px] h-[44px]">Регистрация</Button>
                        </div>
                        <div className="flex flex-col gap-12 h-fit mt-[48px] justify-center content-center flex-wrap">
                            <div className="flex flex-col gap-4">
                                <Typography className={'ml-[33%]'} size="base1" font={'semibold'}>О
                                    мероприятии</Typography>
                                <Typography size="base3" font={'medium'}
                                            className={'ml-[33%] mt-[16px]'}>{(eventInfo as {description: string}).description}</Typography>
                            </div>
                            <Reports id={params.id} />

                            <div className="h-[404px] w-[752px] ">
                                <img src="https://www.ayda.ru/images/cities/perm/maps/perm-tourist-map.gif"
                                     className="object-cover"></img>
                            </div>
                            <div>
                                {(eventInfo as {location: string}).location}
                            </div>
                        </div>
                    </div>}

                </div>
            </Slide>
        </div>
    </div>
}

interface IReport {
    id: string
}

const Reports = (props: IReport) => {
    const [reports, setReport] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setErr] = useState(false)

    const err = () => {
        return <Typography size={'base1'} font={'medium'} color={'text-error-200'}>
            Произошла ошибка
        </Typography>
    }

    useQuery(GetComments as DocumentNode, {
        variables: {
            id: props.id,
        },
        onCompleted: data => {
            if (data['get']['StatusCode'] !== 200) {
                setErr(true)
            }

            setLoading(false)
            setReport(data['get']['Response'])
        },
        onError: error => console.log(error)
    })
    return <div>
        {loading && <Loader />}
        {error && err()}
        {/*{reports.map(report => report.content)}*/}
    </div>
}