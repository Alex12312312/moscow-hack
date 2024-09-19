'use client'
import { Slide } from 'Components/slide';
import { Header } from 'Components/header';
import { Typography } from 'Components/ui/Typography';
import imgStore1 from 'assets/store/store1.png';
import imgStore2 from 'assets/store/store2.png';
import imgStore3 from 'assets/store/store3.png';
import imgStore4 from 'assets/store/store4.png';
import imgStore5 from 'assets/store/store5.png';
import imgStore6 from 'assets/store/store6.png';
import Image from 'next/image';

const StorePage = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col rounded-2xl">
        <Slide>
          <div>
            <Typography font="bold" className="mb-[32px]">Магазин</Typography>
            <div className="flex flex-wrap gap-4 gap-y-[48px] w-[1317px]">
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore1 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">200
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Толстовка</Typography>
              </div>
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore2 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">50
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Шоппер</Typography>
              </div>
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore3 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">150
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Футболка женская</Typography>
              </div>
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore4 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">100
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Бейсболка</Typography>
              </div>
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore5 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">120
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Шапочка</Typography>
              </div>
              <div className="merchCard">
                <Image alt={''} className="w-[272px] h-[272px]" src={imgStore6 as any} />
                <Typography color={'text-accent-500'} font="bold" className="mt-[12px]" size="base2">150
                  монет</Typography>
                <Typography className="mt-[4px]" font="semibold" size="base4">Футболка мужская</Typography>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default StorePage;