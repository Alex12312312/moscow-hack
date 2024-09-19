import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'Components/ui/Typography';
import { Input } from 'Components/ui/Input';
import { useState } from 'react';
import { Button } from 'Components/ui/Button';
import { Header } from 'Components/header';
import { Slide } from 'Components/slide';

export const VerificationComponent = () => {
    const scheme = yup.object().shape({})

    const fm = useForm({ resolver: yupResolver(scheme) })

    return <div>
        <Header/>
        <Slide>
            <div className={'flex justify-center w-full'}>
                <div className={'flex-col'}>
                    <Typography size={'h1'} font={'semibold'} className={'mt-[32px]'}>
                        Верификация
                    </Typography>
                    <Typography className={'mt-[8px]'} color={'text-neutral-600'} font={'regular'} size={'base4'}>
                        Введите данные об организации, после проверки данных модератором портала на указанну. почту
                        будет
                        выслано письмо с подтверждением.
                    </Typography>

                    <FormProvider {...fm}>
                        <form className={'mt-[32px] flex-col flex gap-[32px] w-[50%]'}>
                            <Input
                                className={'w-full'}
                                name={'INN'}
                                colorScheme={'gray'}
                                title={'ИНН'}
                                placeholder={'Введите ИНН'}
                                leftIcon={<></>}
                            />
                            <Button>Загрузить из реестра</Button>
                            <Input
                                className={'w-full'}
                                name={'ORGN'}
                                colorScheme={'gray'}
                                title={'ОРГН'}
                                placeholder={'Введите ОРГН'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full'}
                                name={'name'}
                                colorScheme={'gray'}
                                title={'Название организации'}
                                placeholder={'Введите название организации'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full'}
                                name={'Location'}
                                colorScheme={'gray'}
                                title={'Адрес'}
                                placeholder={'Введите адрес'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full'}
                                name={'email'}
                                colorScheme={'gray'}
                                title={'Почта организации'}
                                type={'email'}
                                placeholder={'Введите почту организации'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full'}
                                name={'code'}
                                colorScheme={'gray'}
                                title={'Код деятельности'}
                                type={'email'}
                                placeholder={'Введите код деятельности'}
                                leftIcon={<></>}
                            />
                            <div className={'mt-[32px]'}>
                                <FileUpload/>
                            </div>
                            <Button className={'mt-[32px]'}>
                                Верифицироваться
                            </Button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </Slide>
    </div>
}


function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        // Replace with your upload URL
        const uploadURL = 'https://your-server.com/upload';

        fetch(uploadURL, {
            method: 'POST',
            body: formData,
        } as RequestInit).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('File uploaded successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('File upload failed!');
            });
    };

    return (
        <div>
            <Input name={'files'} type={'file'} leftIcon={<></>} onChanged={handleFileChange}/>
        </div>
    );
}
