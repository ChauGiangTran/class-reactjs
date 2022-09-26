import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Space, Button, Input } from 'antd';
import { ModalEditStudent } from '../../../components/Modal';
const { Search } = Input;

class AdminStudentList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleEditStudent: false,
		}
	}
	onShowModalEdit = () => {
		this.setState({ visibleEditStudent: true });
	}
	onCloseModalEdit = () => {
		this.setState({ visibleEditStudent: false });
	}
	onSearch = (value) => console.log(value);

	render() {
		const { visibleEditStudent } = this.state;
		const columns = [
			{
				title: 'Họ tên',
				dataIndex: 'name',
				key: 'name',
			},
			{
				title: 'Tuổi',
				dataIndex: 'age',
				key: 'age',
			},
			{
				title: 'Địa chỉ',
				dataIndex: 'address',
				key: 'address',
			},
			{
				title: 'Lớp tham gia',
				dataIndex: 'class',
				key: 'class',
			},
			{
				title: 'Action',
				key: 'action',
				render: () => (
					<Space size="middle">
						<a className='btn-blue' onClick={this.onShowModalEdit}>Edit</a>
					</Space>
				),
			},
		];
		const dataSource = [
			{
				key: '1',
				name: 'Sam',
				age: '10',
				address: 'Huế',
				class: 'Lớp sơ cấp',
			},
			{
				key: '2',
				name: 'Andrea',
				age: '10',
				address: 'Huế',
				class: 'Lớp sơ cấp',
			},
		];
		
		const modalEditStudentProps = {
			visible: visibleEditStudent,
			onSubmit: this.onCloseModalEdit,
			onCancel: this.onCloseModalEdit,
		}
		return (
			<div className="admin-student-list-page layout">
				<div className='div-title-admin'>
					<p className='font-16 font-500'>Danh sách học sinh</p>
					<Divider />
				</div>
				<div className='mt-1 text-right'>
					<Space>
						<Search
							className='input-search'
							placeholder="Tìm kiếm học sinh"
							onSearch={this.onSearch}
							style={{
								width: 200,
							}}
						/>
					</Space>
				</div>
				<Table bordered size='middle' dataSource={dataSource} columns={columns} className='mt-1' />
				<ModalEditStudent {...modalEditStudentProps} />
			</div>
		);
	}
}
export default AdminStudentList;
