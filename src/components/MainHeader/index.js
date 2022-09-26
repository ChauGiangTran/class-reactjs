import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaUserEdit } from 'react-icons/fa';
import {  BiLogOutCircle } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Avatar, Input, Menu, Dropdown, Image} from 'antd';
import './index.scss';
class MainHeader extends Component {

  componentDidMount() {
  }

  
  render() {
    const menu = (
      <Menu
        items={[
          {
            key: '1',
            icon: <FaUserEdit size={18} color='#495057'/>,
            label: (
              <Link to='/profile'>
                Edit Profile
              </Link>
            ),
          },
          {
            key: '2',
            icon: <BiLogOutCircle size={18} color='#495057'/>,
            label: (
              <Link to='/' onClick={this.logout}>
                Logout
              </Link>
            ),
          },
        ]}
      />
    );
    return (
      <div className='component-mainheader'>
        <div className='div-account'>
          <div className='account-icon'>
            <Dropdown overlay={menu} placement="bottomLeft">
                {/* <Avatar icon={<FaUserAlt size={17} className='text-white'/>} /> */}
                <Avatar src="../image/avt.png" className='avt-img'/>
            </Dropdown>
          </div>
          <div className='account-name'>
            <p className='mb-0'>Admin</p>
          </div>
        </div>
        <div className='div-search'>
          <BsSearch size={18} />
          <Input placeholder='Search' />
        </div>
      
      </div>
    );
  }
}

export default MainHeader;
