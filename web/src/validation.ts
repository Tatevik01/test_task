import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'isValidUsZipCode', function () {
    return this.test('isValidUsZipCode', 'Zip Code is not valid', function (value: any) {
        if (value) {
            return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
        }
        return true;
    });
});

Yup.addMethod(Yup.string, 'isValidLastName', function () {
    return this.test('isValidLastName', 'Last name is not valid', function (value: any) {
        if (value) {
            return /^[a-zA-Z0-9’'_-]+$/.test(value);
        }
        return true;
    });
});

export const validationSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('first name  is required'),
    last_name: Yup.string()
        .required('last name is required')
        // @ts-ignore
        .isValidLastName(),
    email: Yup.string()
        .email()
        .required('email is required'),
    zip_code: Yup.string()
        // @ts-ignore
        .isValidUsZipCode()
        .required('zip code is required'),
    state: Yup.string()
        .required('state is required'),
});