'use client'
import React from 'react';
import { Header } from 'Components/header';
import { Slide } from 'Components/slide';
import { Typography } from 'Components/ui/Typography';
import img from 'assets/avatar.png';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badges';
import { ProfilePhoto } from '@/components/ui/ProfilePhoto';

const PageProfile = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col rounded-2xl">
        <Slide>
          <div>
            <div className="navProfile flex gap-6 ml-[48px] mt-[32px] m-8">
              <Typography font='bold' size="base3"><span className="p-[8px] border-b-[#15B097] border-b-[2px]">Профиль</span></Typography>
              <Typography font='bold' size="base3"><span className="p-[8px] text-[#C2C2C2]">Ачивки</span></Typography>
              <Typography font='bold' size="base3"><span className="p-[8px] text-[#C2C2C2]">Семена</span></Typography>
              <Typography font='bold' size="base3"><span className="p-[8px] text-[#C2C2C2]">Настройки</span></Typography>
            </div>
            <div className='flex'>
              <div className=''>
                {/*<ProfilePhoto url={img as string} onClick={() => {}}></ProfilePhoto>*/}
                <Image className='w-[44px] h-[44px] rounded-full' src={img as any} alt="avatar"/>
              </div>
              <div className='justify-center flex gap-[8px] align-middle content-center'>
                <Typography className='ml-2 mt-[10px]' font="bold" size="base1">Иванов Иван Иванович</Typography>
                <Badge className='relative top-2 mt-[10px]' status="default"></Badge>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PageProfile;