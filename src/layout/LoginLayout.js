import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
const { Content } = Layout;
class LoginLayout extends React.PureComponent {
	render() {
		return (
			<Layout className="login-layout">
				<Content>
					{/* <Outlet title={this.props.TITLE} /> */}
					<Outlet />
				</Content>
			</Layout>
		);
	}
}

LoginLayout.propTypes = {
	title: PropTypes.string
};
export default LoginLayout;
