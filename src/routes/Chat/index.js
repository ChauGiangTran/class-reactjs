import React from 'react';
import { CameraFilled } from '@ant-design/icons';
import { Divider, Layout, Space, Button, Avatar, Row, Col, Form, Input, Select, Upload, message } from 'antd';
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onSearch = (value) => console.log(value);

    render() {


        return (
            <div className="chat-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Tin nhắn</p>
                    <Divider />
                </div>
                <Layout className='chat-layout'>
                    <Sider>
                        <div className='div-search'>
                            <Search placeholder="Tìm kiếm" onSearch={this.onSearch} />
                        </div>
                        <div className='user-list'>
                            {new Array(10).fill(null).map((index) => (
                                <div className='user-item'>
                                    <Avatar src='./image/avt.png' size={40} className='avt-chat shrink-0' />
                                    <p className='mb-0 ml-10'>Andrea Tran</p>
                                    <p className='font-10 mb-0 ml-auto shrink-0'>7:00 am</p>
                                </div>
                            ))}
                        </div>
                    </Sider>
                    <Layout>
                        <Header>
                            <Space align="center">
                                <Avatar src='./image/avt.png' size={35} className='avt-chat' />
                                <p className='font-16 mb-0'>Sam</p>
                            </Space>
                        </Header>
                        <Content>
                            {[1, 2, 3].map((index) => (<><div className='div-time text-center mt-1'>
                                <p className='font-12 text-black06'>Hôm qua</p>
                            </div>
                                <div className='mess-view'>
                                    <div className='their-mess'>
                                        <div className='mess-item'>
                                            <p className=''>xin chào</p>
                                        </div>
                                        <div className='mess-item'>
                                            <p className=''>cho mình hỏi 1 xíu</p>
                                        </div>
                                    </div>
                                    <div className='your-mess'>
                                        <div className='mess-item'>
                                            <p className=''>Ok bạn</p>
                                        </div>
                                        <div className='mess-item'>
                                            <p className=''>Mình có thể giúp gì cho bạn?</p>
                                        </div>
                                    </div>
                                </div></>))}

                        </Content>
                        <Footer>
                            <div className='flex flex-row'>
                                <Input placeholder='Nhập tin nhắn' />
                                <Button type='primary' className='ml-10'>Gửi</Button>
                            </div>
                        </Footer>
                    </Layout>
                </Layout>
                {/* <Row>
                    <Col sx={24} sm={24} md={20} lg={16}>
                        <Form
                            name="profile"
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            ref={ref => this.form = ref}
                            initialValues={{
                                name: 'Sam',
                                age: '10',
                                address: 'Huế',
                            }}
                        >
                            <Form.Item name="avatar" label='Avatar' >
                                <Space align="end">
                                    <Avatar src='./image/avt.png' size={80} />
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

                            <Form.Item name="button"  >
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
                </Row> */}
            </div>
        );
    }
}
export default ChatPage;
