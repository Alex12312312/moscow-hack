import { TailwindColorText } from '@/lib/css';
import { InfoIcon, LikeIcon } from '../icons';
import { Typography } from '../ui/Typography';

export type AchievementProps = {
  progress?: number;
  tooltip?: string;
  title: string;
  description?: string;
};

export function Achievement(props: AchievementProps) {
  const normalized = Math.min(1, Math.max(0, props.progress ?? 0));

  return (
    <>
      <div className="flex flex-row p-4 rounded-2xl gap-4 bg-neutral-100 w-[94%]">
        <div className="h-20 w-20 bg-white rounded-xl justify-center items-center select-none flex">
          <LikeIcon color="#53c340" />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="flex flex-row gap-1">
            <Typography
              color="text-black"
              className="text-base"
              font="semibold"
            >
              {props.title}
            </Typography>
            <div
              className="translate-x-0.5 translate-y-0.5"
              title={props.tooltip}
            >
              <InfoIcon color="#C2C2C2" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <AchievementProgressBar value={normalized} />

            <div className="select-none flex flex-row justify-between w-full">
              <Typography
                size="base4"
                className="font-medium"
                color={'text-[#BBBBC9]' as TailwindColorText}
              >
                {props.description}
              </Typography>

              <Typography
                size="base4"
                className="font-medium"
                color={'text-[#15B097]' as TailwindColorText}
              >
                {normalized < 1 ? '' : 'Завершено!'}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type AchievementProgressBarProps = {
  value: number;
};

function AchievementProgressBar(props: AchievementProgressBarProps) {
  const normalized = Math.min(1, Math.max(0, props.value ?? 0));

  return (
    <>
      <div className="bg-neutral-400 h-2 w-full overflow-hidden rounded-full">
        {normalized < 1 ? (
          <div
            className={`h-2 bg-[#644CAF] rounded-full`}
            style={{
              width: `${normalized * 100}%`,
            }}
          ></div>
        ) : (
          <div className={`h-2 bg-[#15B097] w-full`}></div>
        )}
      </div>
    </>
  );
}
