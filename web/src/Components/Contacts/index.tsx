import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '../../validation';
import { InputFields } from '../../Interfaces';
import ContactForm from "../../Pages/ContactForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
    let navigate = useNavigate();

    const [backEndError, setBackEndError] = useState<any>()

    const { register, reset, handleSubmit, formState: { errors } } = useForm<InputFields>({ resolver: yupResolver(validationSchema) });

    const onSubmit: SubmitHandler<InputFields> = async (data: any) => {
        try {
            await axios.post('save-contact-info', data)
            await reset();
            await navigate("/congrats")
        } catch (e) {
            // @ts-ignore
            setBackEndError(e.response.data.errors)
            // @ts-ignore
            console.error(e.response.data.errors)
        }
    }

    return (
        <ContactForm
            backEndError={backEndError}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        />
    )
}

export default Contacts