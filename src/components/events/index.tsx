import { Header } from 'Components/header';
import { Slide } from 'Components/slide';
import { Typography } from 'Components/ui/Typography';
import { DocumentNode, useQuery } from '@apollo/client';
import EVENTS from '@/app/lib/apollo/schemas/events/events.gql';
import { useState } from 'react';
import { EventCard } from 'Components/eventCard';
import { Loader } from 'Components/ui/Loader';
import './style.css';
import { Banner } from '../banner';

interface IEvents {
  title?: string;
}

export const Events = (props: IEvents) => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const { loading } = useQuery(EVENTS as DocumentNode, {
    onCompleted: (data) => {
      setEvents(data['get']['Response']['data']);
    },
    onError: (error) => {
      setError(true);
      console.log(error);
    },
  });

  const renderError = () => {
    return (
      <Typography size={'h1'}>Произошла ошибка при запросе events</Typography>
    );
  };

  const formatDate = (dateStringInput: string) => {
    const dateString = dateStringInput.slice(0, 10);
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;

    return `${parseInt(day, 10)} ${months[monthIndex]}`;
  };

  const isPastDate = (dateTimeString: string) => {
    const inputDate = new Date(dateTimeString);
    const currentDate = new Date();

    return currentDate > inputDate;
  };

  const getTime = (inp: string) => {
    return inp.slice(11, 19);
  };

  return (
    <div className={'max-w-[100%]'}>
      <Header />
      <Slide>
        <div className={'flex-col flex max-w-[100%] overflow-hidden'}>
          <Banner
            title="Дерево за дерево!"
            description="Привяжи телеграм к аккаунту, ходи на ивенты и получай вертуальные семена, меняй их на настоящие и сажай! За каждое полученное виртуальное семя нами будет посажано одно настоящее."
            buttonText="Подробнее"
            onClick={() => alert('test')}
          />
          <div className='mb-8'></div>
          <Typography size={'h2'} font={'semibold'}>
            {props.title}
          </Typography>
          {error ?? renderError()}
          <div
            className={
              'flex gap-[16px] mt-[32px] overflow-x-auto max-w-[94%] hideScrollbar'
            }
          >
            {!loading ? (
              events.map((event) => (
                <EventCard
                  key={event['id']}
                  className={'flex-shrink-0'}
                  title={event['name']}
                  subTitle={event['description']}
                  status={
                    isPastDate(event['startDate']) ? 'Завершено' : 'Участвуйте'
                  }
                  place={event['location']}
                  date={formatDate(event['startDate'])}
                  time={getTime(event['startDate'])}
                  userCount={event['participants']}
                  imageUrl={event['bannerUrl']}
                  tags={(event['tags'] as Array<any>).map((tag) => {
                    return {
                      color: 'white',
                      title: tag,
                    };
                  })}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
          <Typography size={'h2'} font={'semibold'} className={'mt-[64px]'}>
            Мероприятия
          </Typography>
        </div>
      </Slide>
    </div>
  );
};
