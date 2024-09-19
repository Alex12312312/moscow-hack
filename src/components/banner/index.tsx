import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import img from 'assets/banner2.jpg';
import Image from 'next/image';

export type BannerProps = {
  title: string;
  description: string;
  backgroundImage?: string;

  onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
};

export function Banner(props: BannerProps) {
  return (
    <>
      <div className="w-full max-w-[94%] h-[208px] bg-[#2f3131] text-white rounded-2xl p-4 justify-center flex flex-col relative gap-2 overflow-none">
        <Image
          className={
            'z-0 absolute rounded-2xl w-full h-full inset-0 object-cover object-[30%_60%]'
          }
          src={img as any}
          alt={'banner image'}
        />

        <Typography size={'h4'} font={'bold'} className="z-10">
          {props.title}
        </Typography>
        <Typography
          className={'max-w-[60%] z-10 mb-4'}
          font={'bold'}
          size={'base4'}
        >
          {props.description}
        </Typography>

        <Button
          typographyAttr={{
            size: 'base3',
            font: 'semibold',
            children: null,
          }}
          className="w-[142px] h-[44px] absolute bottom-4 left-4"
          colorScheme="tertiary"
          onClick={props.onClick}
        >
          {props.buttonText}
        </Button>
      </div>
    </>
  );
}
