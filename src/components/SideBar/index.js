import React, { Component } from 'react'
import { Menu } from 'antd';
import { FaUsers, FaFileInvoice, FaMes } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoSettingsSharp, IoChatboxEllipses } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import './index.scss';

class SideBar extends Component {
  state = {
    hovered: false,
    clicked: false,
    visibleCancel: false,
    visibleCurrent: false
  };
 
  render() {
    
    const itemsAdmin = [
      { 
        label: <Link to='/admin/class'>Danh sách lớp học</Link>, 
        key: 'class', 
        icon: <HiOutlineClipboardList size={20}/> 
      }, 
      { 
        label: <Link to='/admin/teacher'>Quản lý giáo viên</Link>, 
        key: 'teacher', 
        icon: <FaUsers size={20}/> 
      }, 
      { 
        label: <Link to='/admin/student'>Quản lý học sinh</Link>, 
        key: 'student', 
        icon: <FaUsers size={20}/> 
      }, 
      { 
        label: <Link to='/chat'>Tin nhắn</Link>, 
        key: 'chat', 
        icon: <IoChatboxEllipses size={20}/> 
      }, 
    ];
    const itemsTeacher = [
      { 
        label: <Link to='/teacher/class'>Danh sách lớp học</Link>, 
        key: 'teacher_class', 
        icon: <HiOutlineClipboardList size={20}/> 
      }, 
      { 
        label: <Link to='/teacher/student'>Danh sách học sinh</Link>, 
        key: 'teacher_student', 
        icon: <FaUsers size={20}/> 
      }, 
      { 
        label: <Link to='/chat'>Tin nhắn</Link>, 
        key: 'chat', 
        icon: <IoChatboxEllipses size={20}/> 
      }, 
    ];
    const itemsStudent = [
      { 
        label: <Link to='/student/class'>Danh sách lớp học</Link>, 
        key: 'student_class', 
        icon: <HiOutlineClipboardList size={20}/> 
      }, 
      { 
        label: <Link to='/student/class_registration'>Đăng ký lớp học</Link>, 
        key: 'student_class_regis', 
        icon: <FaUsers size={20}/> 
      }, 
      { 
        label: <Link to='/chat'>Tin nhắn</Link>, 
        key: 'chat', 
        icon: <IoChatboxEllipses size={20}/> 
      }, 
    ];

    return (
    <Menu
        mode="inline"
        defaultSelectedKeys={['class']}
        // defaultSelectedKeys={['teacher_class']}
        // defaultSelectedKeys={['student_class']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={itemsAdmin}
      />
    );
  }
}

export default SideBar;
