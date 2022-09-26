import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Space, Button, Input } from 'antd';
import { ModalAddClass, ModalEditClass } from '../../../components/Modal';
// import image from '../../assets/images/..';
const { Search } = Input;

class StudentClassList extends React.Component {
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
        return (
            <div className="student-class-list-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Danh sách lớp đang tham gia</p>
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
export default StudentClassList;
