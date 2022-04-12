import React, {useEffect} from 'react';
import {LoginWrap, LoginForm} from "./styles";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {InputWrap} from "../Registration/styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ErrorMessageForm from "../../components/ErrorMessageForm/ErrorMessageForm";
import {loginUser} from "../../store/actions";

const Login = () => {
    const {register, watch, setValue, formState: { errors }, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const watchFields = watch(['email', 'password'])

    const onSubmit = async ({email, password}) => dispatch(loginUser({email, password}))

    useEffect(() => {
        if (watchFields[0] === undefined || watchFields[1] === undefined) return
        localStorage.setItem('loginEmail', watchFields[0])
        localStorage.setItem('loginPassword', watchFields[1])
    }, [watchFields])

    useEffect(() => {
        setValue('email', localStorage.getItem('loginEmail'))
        setValue('password', localStorage.getItem('loginPassword'))
    }, [])

    return (
        <LoginWrap>
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
                <Button>Login</Button>
            </LoginForm>
        </LoginWrap>
    );
};

export default Login;