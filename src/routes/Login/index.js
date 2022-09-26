import React from 'react';
import { Row, Form, Button, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/login.scss';
// import image from '../../assets/images/..';

class Login extends React.Component {
	onFinish = (values) => {
		window.location.href="/admin/class"
	};
	onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	render() {
		return (
			<div className="login-page layout">
				<Row justify="center" className="row-form row-login">
					<div className='col-form col-login'>
						<div className='div-form-title'>
							<p className='font-24'>Login</p>
						</div>
						<div>
							<Form
								name="login"
								onFinish={this.onFinish}
								ref={ref => this.form = ref}
							>
								<Form.Item
									name="username"
									rules={[{ required: true, message: 'Please enter your email or username' }]}
								>
									<Input placeholder='Username or Email' />
								</Form.Item>
								<Form.Item
									name="password"
									rules={[{ required: true, message:  'Please enter your password' }]}
								>
									<Input.Password placeholder='Password'/>
								</Form.Item>
								<Form.Item
									name="login"
								>
									<Button
										block
										type="primary"
										htmlType="submit"
										className="form-btn"
									>
										LOGIN
									</Button>
								</Form.Item>
							</Form>
						</div>


						<div className="div-new-user">
							<Link to='/register'>Create Account</Link>
							<Link to='/'>Forgot Password</Link>
						</div>
					</div>
				</Row>
			</div>
		);
	}
}
export default Login;
