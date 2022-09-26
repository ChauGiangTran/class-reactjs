import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Divider, Table, Space, Input, Modal } from 'antd';
// import image from '../../assets/images/..';
const { Search } = Input;
const { confirm } = Modal;
class StudentClassRegist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    showRegistrationConfirm = () => {
        confirm({
          title: 'Bạn có chắc chắn muốn đăng ký lớp học này?',
          icon: <ExclamationCircleOutlined />,
          okType: 'primary',
          onOk() {
            console.log('OK');
          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };
    onSearch = (value) => console.log(value);
    render() {
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
                title: 'Số lượng dự kiến',
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
                        <a className='btn-blue' onClick={this.showRegistrationConfirm}>Đăng ký</a>
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
        return (
            <div className="student-class-regist-page layout">
                <div className='div-title-admin'>
                    <p className='font-16 font-500'>Đăng ký lớp học</p>
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
export default StudentClassRegist;
