import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Space, Input } from 'antd';
// import image from '../../assets/images/..';
const { Search } = Input;

class TeacherClassList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                subject: 'Toán',
                quantity: '20',
                startDate: '2/2/2022'
            },
            {
                key: '2',
                name: 'Lớp trung cấp',
                subject: 'Toán',
                quantity: '22',
                startDate: '2/2/2022'
            },
        ];
        
        return (
            <div className="teacher-class-list-page layout">
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
                    </Space>
                </div>
                <Table bordered size='middle' dataSource={dataSource} columns={columns} className='mt-1' />
            </div>
        );
    }
}
export default TeacherClassList;
