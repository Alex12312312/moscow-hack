import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'Components/ui/Typography';
import { Input } from 'Components/ui/Input';
import { useState } from 'react';
import { Button } from 'Components/ui/Button';
import { Header } from 'Components/header';
import { Slide } from 'Components/slide';
import axios from 'axios';
import { getCookies } from 'cookies-next';

export const VerificationComponent = () => {
    const scheme = yup.object().shape({})

    const [state, setState] = useState<{
        'ИНН': string,
        'ОГРН': string,
        'НаимСокрЮЛ': string,
        'НаимПолнЮЛ': string,
        'ДатаОГРН': string,
        'Статус': string,
        'АдресПолн': string,
        'ОснВидДеят': string,
        'ГдеНайдено': string
    }>({
        АдресПолн: '',
        ГдеНайдено: '',
        ДатаОГРН: '',
        ИНН: '',
        НаимПолнЮЛ: '',
        НаимСокрЮЛ: '',
        ОГРН: '',
        ОснВидДеят: '',
        Статус: ''
    })


    const handle = (inn) => {
        const tk = getCookies({
            path: 'access_token'
        })
        console.log(tk)
        axios.get(`https://api.ecothon.quassbot.ru/document/${inn}/external`, {
            headers: {
                'Authorization': `Bearer ${tk}`
            }
        }).then(r => {
            setState(r.data['ЮЛ'])
            console.log(r.data)
        }).catch((e) => console.log(e))
    }

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
                        <form className={'mt-[32px] flex-col flex gap-[32px] w-[50%]'}
                              onSubmit={fm.handleSubmit(data => {
                                  console.log(data)
                                  handle('7714379242')
                              })}>
                            <Input
                                className={'w-full text-dark-600'}
                                name={'INN'}
                                colorScheme={'gray'}
                                title={'ИНН'}
                                placeholder={'Введите ИНН'}
                                leftIcon={<></>}
                            />
                            <Button htmlType={'submit'}>Загрузить из реестра</Button>
                            <Input
                                value={state == {} ? '' : state['ОГРН']}
                                className={'w-full text-dark-600'}
                                name={'ORGN'}
                                colorScheme={'gray'}
                                title={'ОРГН'}
                                placeholder={'Введите ОРГН'}
                                leftIcon={<></>}
                            />
                            <Input
                                value={state == {} ? '' : state['НаимСокрЮЛ']}
                                className={'w-full text-dark-600'}
                                name={'name'}
                                colorScheme={'gray'}
                                title={'Название организации'}
                                placeholder={'Введите название организации'}
                                leftIcon={<></>}
                            />
                            <Input
                                value={state == {} ? '' : state['АдресПолн']}
                                className={'w-full text-dark-600'}
                                name={'Location'}
                                colorScheme={'gray'}
                                title={'Адрес'}
                                placeholder={'Введите адрес'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full text-dark-600'}
                                name={'email'}
                                colorScheme={'gray'}
                                title={'Почта организации'}
                                type={'email'}
                                placeholder={'Введите почту организации'}
                                leftIcon={<></>}
                            />
                            <Input
                                className={'w-full text-dark-600'}
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
