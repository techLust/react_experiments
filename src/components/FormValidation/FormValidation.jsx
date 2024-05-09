import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    age: yup.number().positive('Age must be a positive number').required('Age is required'),
});

const FormValidation = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2>Sign up form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} />}
                    />
                    <p>{errors.firstName?.message}</p>
                </div>
                <div>
                    <label>Last Name</label>
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} />}
                    />
                    <p>{errors.lastName?.message}</p>
                </div>
                <div>
                    <label>Email</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} />}
                    />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Age</label>
                    <Controller
                        name="age"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input type="number" {...field} />}
                    />
                    <p>{errors.age?.message}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation