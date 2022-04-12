import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import Input from "../../components/Input/Input";
import ErrorMessageForm from "../../components/ErrorMessageForm/ErrorMessageForm";
import Button from "../../components/Button/Button";
import {RegistrationWrap, RegistrationForm, InputWrap} from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {hideLoader, registerUser, showError} from "../../store/actions";

const Registration = () => {
    const {register, watch, setValue, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.app)
    const watchFields = watch(['email', 'password', 'confirmPass'])

    const onSubmit = (data) => {
        for (let i = 0; i <= users.length-1; i++) {
            if (data.email === users[i].email) {
                dispatch(showError('Email is register'))
                dispatch(hideLoader())
                return
            }
        }
        dispatch(registerUser(data))
        navigate('/login')
    }

    useEffect(() => {
        if (watchFields[0] === undefined || watchFields[1] === undefined || watchFields[2] === undefined) return
        localStorage.setItem('regEmail', watchFields[0])
        localStorage.setItem('regPassword', watchFields[1])
        localStorage.setItem('regConfirm', watchFields[2])
    }, [watchFields])

    useEffect(() => {
        setValue('email', localStorage.getItem('regEmail'))
        setValue('password', localStorage.getItem('regPassword'))
        setValue('confirmPass', localStorage.getItem('regConfirm'))
    }, [])

    return (
        <RegistrationWrap>
            <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <Input
                        placeholder="Email"
                        type="text"
                        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email?.type === 'required' && <ErrorMessageForm text="Email is required"/>}
                    {errors.email?.type === 'pattern' && <ErrorMessageForm text="Invalid email"/>}
                </InputWrap>
                <InputWrap>
                    <Input
                        placeholder="Password"
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 4,
                            maxLength: 10,
                            pattern: /^[а-яa-z0-9!"№;%:?*.,@#^<>()}{]*[А-ЯA-Z0-0][а-яa-z0-9]*$/
                        })}
                    />
                    {errors.password?.type === 'required' && <ErrorMessageForm text="Password is required"/>}
                    {errors.password?.type === 'minLength' && <ErrorMessageForm text="Minimal value 4"/>}
                    {errors.password?.type === 'maxLength' && <ErrorMessageForm text="Maximal value 10"/>}
                    {errors.password?.type === 'pattern' && <ErrorMessageForm text="Invalid password"/>}
                </InputWrap>
                <InputWrap>
                    <Input
                        type="password"
                        placeholder="Confirm password"
                        {...register("confirmPass", {
                            validate: (val) => {
                                if (watch('password') !== val) {
                                    return false;
                                }
                            }
                        })}
                    />
                    {errors.confirmPass?.type === 'validate' && <ErrorMessageForm text="Passwords don't match"/>}
                </InputWrap>
                <Button>Registration</Button>
            </RegistrationForm>
        </RegistrationWrap>
    );
};

export default Registration;