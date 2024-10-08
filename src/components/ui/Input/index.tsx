import { ReactNode } from 'react';
import { Typography } from 'Components/ui/Typography';
import { InfoIcon } from 'Components/icons';
import { ColorSchemeType, ExtraStatesType, inputVariants } from 'Components/ui/Input/inputVarinats';
import clsx from 'clsx';
import { RoundingSchemeType } from 'Components/ui/Button/buttonVariants';
import { useFormContext } from 'react-hook-form';
import fp from 'lodash/fp';

interface IInput {
    name: string
    leftIcon: ReactNode
    title?: string
    subTitle?: string
    titleDescription?: string
    placeholder?: string
    extraState?: ExtraStatesType
    colorScheme?: ColorSchemeType
    roundingScheme?: RoundingSchemeType
    className?: string
    contentClassName?: string
    type?: string
    value?: string
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IInput) => {
    const { register, formState } = useFormContext();
    const getBorder = (extraState: ExtraStatesType | undefined): string => {
        switch (extraState) {
            case 'error':
                return 'border-error-200 focus:border-error-200 peer-focus:border-error-200 focus:outline-none '
            case 'warn':
                return 'border-warning-200 focus:border-warning-200 peer-focus:border-warning-200 focus:outline-none '
            case 'success':
                return 'border-success-200 focus:border-success-200 peer-focus:border-success-200 focus:outline-none '
            default:
                return 'focus:border-dark-700'
        }
    }

    const getTextColor = (extraState: ExtraStatesType | undefined): string => {
        switch (extraState) {
            case 'error':
                return 'text-error-200'
            case 'success':
                return 'text-success-200'
            default:
                return 'text-dark-700'
        }
    }

    return <div className={`'flex flex-col' ${props.contentClassName}`}>
        <div className={'flex'}>
            {props.title && <Typography font={'semibold'} size={'base4'}>
                {props.title}
            </Typography>}
            {props.titleDescription && <InfoIcon/>}
        </div>
        {/* @ts-ignore */}
        <input onChange={props.onChanged} value={props.value} type={props.type ?? 'text'} placeholder={props.placeholder} className={clsx(
            'text-neutral-600 hover:text-dark-700 focus:text-dark-700 peer-focus:text-dark-700',
            inputVariants({
                colorScheme: props.colorScheme ?? 'white',
                roundingScheme: props.roundingScheme ?? 'default'
            }), getBorder(props.extraState), props.className)} {...register(props.name)}/>
        {props.subTitle && <Typography
            className={`mt-[8px] ${getTextColor(props.extraState)}`}
            font={'semibold'}
            size={'base4'}
        >
            {props.subTitle}
        </Typography>}
        <Typography color={'text-error-200'}>
            <>
                {fp.getOr('', `errors.${props.name}.message`, formState)}
                {fp.has(`errors.${props.name}.message`, formState)}
            </>
        </Typography>
    </div>
}