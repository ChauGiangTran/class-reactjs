import React from 'react';
import { Modal, Button, Input, Form, Select } from 'antd';
import '../../assets/styles/login.scss';

class ModalEditStudent extends React.Component {
    onFinish = (values) => {
		console.log('Success:', values);
	};
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
    render() {
        const modalProps = {
            className: 'modal-add-class',
            title: "Chỉnh sửa",
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
                    Lưu
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
                            name="subject"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Select placeholder='Môn học'>
                                <Select.Option value='math'>Toán</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="class"
                            rules={[{ required: true, message: 'Vui lòng không để trống' }]}
                        >
                            <Select placeholder='Lớp học'>
                                <Select.Option value='classic'>Lớp tham gia</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        );
    }
};
export default ModalEditStudent;