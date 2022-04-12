import React, {useEffect} from 'react';
import {ChangePassForm, ChangePassWrap, InputWrap} from "./styles";
import Input from "../../components/Input/Input";
import ErrorMessageForm from "../../components/ErrorMessageForm/ErrorMessageForm";
import Button from "../../components/Button/Button";
import {useForm} from "react-hook-form";
import {useSelector, useDispatch} from "react-redux";
import {changePassword, showError, showSuccess} from "../../store/actions";

const ChangePass = () => {
    const {register, reset, setValue, watch, formState: {errors}, handleSubmit} = useForm()
    const {users, activeUser} = useSelector(state => state.app)
    const dispatch = useDispatch()
    const watchFields = watch(['oldPassword', 'newPassword', 'confrimNewPass'])

    const onSubmit = ({oldPassword, newPassword}) => {
        if (activeUser.password === oldPassword) {
            const newUsers = users.map(item => {
                if (JSON.stringify(item) === JSON.stringify(activeUser)) return {email: item.email, password: newPassword}
                return item
            })
            dispatch(changePassword(newUsers, newPassword))
            localStorage.setItem('changeOld', '')
            localStorage.setItem('changeNew', '')
            localStorage.setItem('changeConfirm', '')
            reset()
        } else {
            dispatch(showError('Incorrect password!'))
        }
    }

    useEffect(() => {
        if (watchFields[0] === undefined || watchFields[1] === undefined || watchFields[2] === undefined) return
        localStorage.setItem('changeOld', watchFields[0])
        localStorage.setItem('changeNew', watchFields[1])
        localStorage.setItem('changeConfirm', watchFields[2])
    }, [watchFields])

    useEffect(() => {
        setValue('oldPassword', localStorage.getItem('changeOld'))
        setValue('newPassword', localStorage.getItem('changeNew'))
        setValue('confirmNewPass', localStorage.getItem('changeConfirm'))
    }, [])

    return (
        <ChangePassWrap>
            <ChangePassForm onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <Input
                        placeholder="Old password"
                        type="password"
                        {...register("oldPassword", { required: true })}
                    />
                    {errors.oldPassword?.type === 'required' && <ErrorMessageForm text="Old password is required"/>}
                </InputWrap>
                <InputWrap>
                    <Input
                        placeholder="New password"
                        type="text"
                        {...register("newPassword", {
                            required: true,
                            minLength: 4,
                            maxLength: 10,
                            pattern: /^[а-яa-z0-9!"№;%:?*.,@#^<>()}{]*[А-ЯA-Z0-0][а-яa-z0-9]*$/
                        })}
                    />
                    {errors.newPassword?.type === 'required' && <ErrorMessageForm text="New password is required"/>}
                    {errors.newPassword?.type === 'minLength' && <ErrorMessageForm text="Minimal value 4"/>}
                    {errors.newPassword?.type === 'maxLength' && <ErrorMessageForm text="Maximal value 10"/>}
                    {errors.newPassword?.type === 'pattern' && <ErrorMessageForm text="Invalid new password"/>}
                </InputWrap>
                <InputWrap>
                    <Input
                        type="text"
                        placeholder="Confirm new password"
                        {...register("confirmNewPass", {
                            validate: (val) => {
                                if (watch('newPassword') !== val) {
                                    return false;
                                }
                            }
                        })}
                    />
                    {errors.confirmNewPass?.type === 'validate' && <ErrorMessageForm text="Passwords don't match"/>}
                </InputWrap>
                <Button>Change password</Button>
            </ChangePassForm>
        </ChangePassWrap>
    );
};

export default ChangePass;