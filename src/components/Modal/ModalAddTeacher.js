import React from 'react';
import { Modal, Button, Input, Form, Select, DatePicker } from 'antd';
import '../../assets/styles/login.scss';

class ModalAddTeacher extends React.Component {
    onFinish = (values) => {
		console.log('Success:', values);
	};
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
    render() {
        const modalProps = {
            className: 'modal-add-class',
            title: "Thêm giáo viên",
            visible: this.props.visible,
            onOk: this.props.onSubmit,
            onCancel: this.props.onCancel,
            closable: false,
            // width: 900,
            footer: [
                <Button key="back" onClick={this.props.onCancel}>
                    Thoát
                </Button>,
                <Button key="submit" type="primary" onClick={this.props.onSubmit}>
                    Thêm
                </Button>
            ]
        };
        return (
            <Modal {...modalProps}>
                <div className='col-form col-form-modal'>
                    <Form
                        name="add_class"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        ref={ref => this.form = ref}
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Input placeholder='Họ và tên' />
                        </Form.Item>
                        <Form.Item
                            name="age"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Input placeholder='Tuổi' />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Input placeholder='Địa chỉ' />
                        </Form.Item>
                        <Form.Item
                            name="subject"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Select placeholder='Chuyên môn'>
                                <Select.Option value='math'>Toán</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        );
    }
};
export default ModalAddTeacher;