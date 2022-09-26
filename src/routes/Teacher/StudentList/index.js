import React from 'react';
import { } from '@ant-design/icons';
import { Divider, Table, Select } from 'antd';

class TeacherStudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onSearch = (value) => console.log(value);

    render() {
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
        ];
        const dataSource = [
            {
                key: '1',
                name: 'Sam',
                age: '10',
                address: 'Huế',
            },
            {
                key: '2',
                name: 'Andrea',
                age: '10',
                address: 'Huế',
            },
        ];

        return (
            <div className="teacher-sutdent-list-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Danh sách học sinh</p>
                    <Divider />
                </div>
                <div className='mt-1'>
                    <Select placeholder='Chọn lớp để xem' style={{width: 200}}>
                        <Select.Option value='classic'>Lớp sơ cấp</Select.Option>
                        <Select.Option value='medium'>Lớp trung cấp</Select.Option>
                    </Select>
                </div>
                <Table bordered size='middle' dataSource={dataSource} columns={columns} className='mt-1' />
            </div>
        );
    }
}
export default TeacherStudentList;
