import { useMemo } from "react";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import styles from "./index.module.scss";

import { US_STATES } from "../../constants";

const ContactForm = (props: any) => {
    const {
        backEndError,
        register,
        handleSubmit,
        errors,
        onSubmit
    } = props

    const usStates = useMemo(() => {
        return US_STATES
    }, [US_STATES]);

    return (
        <div className={styles.main}>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Fill The Form</h1>
                    <TextField
                        className={styles.textField}
                        size="small"
                        label="First name"
                        fullWidth
                        {...register('first_name', { required: true })}
                    />
                    {errors.first_name && <div className={styles.error}>{errors.first_name.message}</div>}
                    <TextField
                        className={styles.textField}
                        size="small"
                        label="Last name"
                        fullWidth
                        {...register('last_name', { required: true })}
                    />
                    {errors.last_name && <div className={styles.error}>{errors.last_name.message}</div>}
                    <TextField
                        className={styles.textField}
                        size="small"
                        label="Email"
                        fullWidth
                        {...register('email', { required: true })}
                    />
                    {errors.email && <div className={styles.error}>{errors.email.message}</div>}
                    {backEndError?.email && !errors.email && <div className={styles.error}>{backEndError.email[0]}</div>}
                    <TextField
                        className={styles.textField}
                        size="small"
                        label="Zip Code"
                        fullWidth
                        {...register('zip_code', { required: true })}
                    />
                    {errors.zip_code && <div className={styles.error}>{errors.zip_code.message}</div>}
                    <TextField
                        className={styles.select}
                        size="small"
                        select
                        {...register("state", { required: true })}
                        fullWidth
                        label="Select your state"
                    >
                        {usStates.map((state) => (
                            <MenuItem key={state.code} value={state.name} >
                                {state.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    {errors.state && <div className={styles.error}>{errors.state.message}</div>}
                    <button type="submit" className={styles.submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm