import React, { useEffect, useState } from 'react'
import "./index.css"
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, getDataFooter } from '../../store/features/ChangePassword/ChangePassword';
import { Button, Form, Input } from 'antd';

export default function ChangePassword() {
    const dispatch = useDispatch();
    // const { dataFooter } = useSelector((state) => state.dataFooter);
    const { _changePassword } = useSelector((state) => state.changePassword);
    console.log(_changePassword)
    const [form] = Form.useForm();
    const isAuth = JSON.parse(localStorage.getItem("user") || "{}");
    // useEffect(() => {
    //     dispatch(getDataFooter())
    // }, [])

    // if (dataFooter) {
    //     form.setFieldsValue({
    //         _id: dataFooter._id,
    //         title: dataFooter.title,
    //         phoneNumber: dataFooter.phoneNumber,
    //         address: dataFooter.address,
    //         email: dataFooter.email,
    //         companyName: dataFooter.companyName,
    //     });
    // }

    const onFinish = (values) => {
        // console.log(values)
        values.userName = isAuth.userName
        if (values)
            dispatch(changePassword(values))
    };


    return <div className="container">
        <div className="filter">
            <Filter
                hide={false}
                onCreate={false}
            />
        </div>
        <Form
            form={form}
            onFinish={onFinish}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                name="oldPassword"
                label="Old Password"
                type='password'
                rules={[{ required: true, message: 'Please input your old password!' }]}
            >
                <Input type='password' />
            </Form.Item>
            <Form.Item
                name="password"
                label="New Password"
                rules={[{ required: true, message: 'Please input new password!' }]}
            >
                <Input type='password' />
            </Form.Item>
            <Form.Item
                name="confirmNewPassword"
                label="Confirm New Password"
                rules={[{ required: true, message: 'Please input confirm new password!' }]}
            >
                <Input type='password' />
            </Form.Item>
            <Form.Item
                wrapperCol={{ offset: 8, span: 16 }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}
