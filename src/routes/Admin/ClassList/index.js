import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Space, Button, Input } from 'antd';
import { ModalAddClass, ModalEditClass } from '../../../components/Modal';
// import image from '../../assets/images/..';
const { Search } = Input;

class AdminClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleAddClass: false,
            visibleEditClass: false,
        }
    }
    onShowModalAdd = () => {
        this.setState({ visibleAddClass: true });
    }
    onCloseModalAdd = () => {
        this.setState({ visibleAddClass: false });
    }
    onShowModalEdit = () => {
        this.setState({ visibleEditClass: true });
    }
    onCloseModalEdit = () => {
        this.setState({ visibleEditClass: false });
    }
    onSearch = (value) => console.log(value);
    render() {
        const { visibleAddClass, visibleEditClass } = this.state;
        const columns = [
            {
                title: 'Tên lớp',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Giáo viên',
                dataIndex: 'teacher',
                key: 'teacher',
            },
            {
                title: 'Môn học',
                dataIndex: 'subject',
                key: 'subject',
            },
            {
                title: 'Số lượng',
                dataIndex: 'quantity',
                key: 'quantity',
            },
            {
                title: 'Ngày bắt đầu',
                dataIndex: 'startDate',
                key: 'startDate',
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
                name: 'Lớp sơ cấp',
                teacher: 'Sam',
                subject: 'Toán',
                quantity: '20',
                startDate: '2/2/2022'
            },
            {
                key: '2',
                name: 'Lớp trung cấp',
                teacher: 'Sam',
                subject: 'Toán',
                quantity: '22',
                startDate: '2/2/2022'
            },
        ];
        const modalAddClassProps = {
            visible: visibleAddClass,
            onSubmit: this.onCloseModalAdd,
            onCancel: this.onCloseModalAdd,
        }
        const modalEditClassProps = {
            visible: visibleEditClass,
            onSubmit: this.onCloseModalEdit,
            onCancel: this.onCloseModalEdit,
        }
        return (
            <div className="admin-class-list-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Danh sách lớp học</p>
                    <Divider />
                </div>
                <div className='mt-1 text-right'>
                    <Space>
                        <Search
                            className='input-search'
                            placeholder="Tìm kiếm lớp"
                            onSearch={this.onSearch}
                            style={{
                                width: 200,
                            }}
                        />
                        <Button type='primary' onClick={this.onShowModalAdd}>Thêm lớp học</Button>

                    </Space>
                </div>
                <Table bordered size='middle' dataSource={dataSource} columns={columns} className='mt-1' />
                <ModalAddClass {...modalAddClassProps} />
                <ModalEditClass {...modalEditClassProps} />
            </div>
        );
    }
}
export default AdminClassList;
