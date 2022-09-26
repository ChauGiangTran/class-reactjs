import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Space, Button, Input } from 'antd';
import { ModalAddTeacher, ModalEditTeacher } from '../../../components/Modal';
const { Search } = Input;

class AdminTeacherList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleAddTeacher: false,
			visibleEditTeacher: false,
		}
	}
	onShowModalAdd = () => {
		this.setState({ visibleAddTeacher: true });
	}
	onCloseModalAdd = () => {
		this.setState({ visibleAddTeacher: false });
	}
	onShowModalEdit = () => {
		this.setState({ visibleEditTeacher: true });
	}
	onCloseModalEdit = () => {
		this.setState({ visibleEditTeacher: false });
	}
	onSearch = (value) => console.log(value);

	render() {
		const { visibleAddTeacher, visibleEditTeacher } = this.state;
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
				title: 'Chuyên môn',
				dataIndex: 'subject',
				key: 'subject',
			},
			{
				title: 'Lớp phụ trách',
				dataIndex: 'class',
				key: 'class',
			},
			{
				title: 'Action',
				key: 'action',
				render: () => (
					<Space size="middle">
						<a className='btn-blue' onClick={this.onShowModalEdit}>Edit</a>
						<a className='btn-red'>Delete</a>
					</Space>
				),
			},
		];
		const dataSource = [
			{
				key: '1',
				name: 'Sam',
				age: '30',
				address: 'Huế',
				subject: 'Toán',
				class: 'Lớp sơ cấp',
			},
			{
				key: '2',
				name: 'Andrea',
				age: '35',
				address: 'Huế',
				subject: 'English',
				class: 'Lớp sơ cấp',
			},
		];
		const modalAddTeacherProps = {
			visible: visibleAddTeacher,
			onSubmit: this.onCloseModalAdd,
			onCancel: this.onCloseModalAdd,
		}
		const modalEditTeacherProps = {
			visible: visibleEditTeacher,
			onSubmit: this.onCloseModalEdit,
			onCancel: this.onCloseModalEdit,
		}
		return (
			<div className="admin-teacher-list-page layout">
				<div className='div-title-admin'>
					<p className='font-16 font-500'>Danh sách giáo viên</p>
					<Divider />
				</div>
				<div className='mt-1 text-right'>
					<Space>
						<Search
							className='input-search'
							placeholder="Tìm kiếm giáo viên"
							onSearch={this.onSearch}
							style={{
								width: 200,
							}}
						/>
						<Button type='primary' onClick={this.onShowModalAdd}>Thêm giáo viên</Button>
					</Space>
				</div>
				<Table bordered size='middle' dataSource={dataSource} columns={columns} className='mt-1' />
				<ModalAddTeacher {...modalAddTeacherProps} />
				<ModalEditTeacher {...modalEditTeacherProps} />
			</div>
		);
	}
}
export default AdminTeacherList;
