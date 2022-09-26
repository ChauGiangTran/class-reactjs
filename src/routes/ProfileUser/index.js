import React from 'react';
import { CameraFilled } from '@ant-design/icons';
import { Divider, Space, Button, Avatar, Row, Col, Form, Input, Select, Upload, message } from 'antd';
// import image from '../../assets/images/..';

class ProfileUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const layout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 20,
            },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 20 },
        };
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },

            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }

                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div className="profile-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Thông tin tài khoản</p>
                    <Divider />
                </div>
                <Row>
                    <Col sx={24} sm={24} md={20} lg={16}>
                        <Form
                            name="profile"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            ref={ref => this.form = ref}
                            {...layout}
                            initialValues={{
                                name: 'Sam',
                                age: '10',
                                address: 'Huế',
                            }}
                        >
                            <Form.Item name="avatar" label='Avatar' >
                                <Space align="end">
                                    <Avatar src='./image/avt.png' size={80} />

                                    <Upload {...props}>
                                        <Button type="text" className='p-0'>
                                            <CameraFilled style={{ color: '#6b6969' }} />
                                        </Button>
                                    </Upload>
                                </Space>
                            </Form.Item>
                            <Form.Item name="name" label='Tên'>
                                <Input placeholder='Tên' />
                            </Form.Item>
                            <Form.Item name="age" label='Tuổi'>
                                <Input placeholder='Tuổi' />
                            </Form.Item>
                            <Form.Item name="address" label='Địa chỉ' >
                                <Input placeholder='Địa chỉ' />
                            </Form.Item>

                            <Form.Item name="button" {...tailLayout} >
                                <Space>
                                    <Button
                                        className="form-btn"
                                        onClick={() => window.history.back()}
                                    >
                                        Thoát
                                    </Button>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="form-btn"
                                        onClick={() => window.history.back()}
                                    >
                                        Lưu
                                    </Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ProfileUser;
