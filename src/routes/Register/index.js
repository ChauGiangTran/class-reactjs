import React from 'react';
import { Row, Form, Button, Input, Select } from 'antd';
import '../../assets/styles/login.scss';
// import image from '../../assets/images/..';

class Register extends React.Component {
	onFinish = (values) => {
		console.log('Success:', values);
	};
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	render() {
		return (
			<div className="register-page layout">
				<Row justify="center" className="row-form row-login">
					<div className='col-form col-login'>
						<div className='div-form-title'>
							<p className='font-24'>Register</p>
						</div>
						<div>
							<Form
								name="login"
								onFinish={this.onFinish}
								onFinishFailed={this.onFinishFailed}
								ref={ref => this.form = ref}
							>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please enter your email or username' }]}
								>
									<Input placeholder='Username' />
								</Form.Item>
                                <Form.Item
									name="username"
									rules={[{ required: true, type: 'email', message: 'Please enter your email or username' }]}
								>
									<Input placeholder='Email' />
								</Form.Item>
								<Form.Item
									name="password"
									rules={[{ required: true, message:  'Please enter your password' }]}
								>
									<Input.Password placeholder='Password'/>
								</Form.Item>
								<Form.Item
									name="type"
									rules={[{ required: true, message:  'Please enter your type' }]}
								>
									<Select placeholder='Account Type'>
										<Select.Option value='admin'>Admin</Select.Option>
										<Select.Option value='teacher'>Teacher</Select.Option>
										<Select.Option value='student'>Student</Select.Option>
									</Select>
								</Form.Item>
								<Form.Item
									name="loginresult"
								>
									<Button
										block
										type="primary"
										htmlType="submit"
										className="form-btn"
										onClick={() => window.history.back()}
									>
										REGISTER
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</Row>
			</div>
		);
	}
}
export default Register;
