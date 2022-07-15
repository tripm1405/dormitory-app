import React from 'react';

import { Link } from "react-router-dom";

const side = [
  {
    url: '/hop-dong',
    icon: '/icons/hop-dong-icon.png',
    title: 'Hợp đồng'
  },
  {
    url: '/vi-pham',
    icon: '/icons/vi-pham-icon.png',
    title: 'Vi phạm'
  },
  {
    url: '/hoa-don-dien-nuoc',
    icon: '/icons/hoa-don-dien-nuoc-icon.png',
    title: 'Hóa đơn điện nước'
  },
  {
    url: '/don-khieu-nai',
    icon: '/icons/don-khieu-nai-icon.png',
    title: 'Đơn khiếu nại'
  },
  {
    url: '/xin-phep',
    icon: '/icons/xin-phep-icon.png',
    title: 'Xin phép'
  },
]

function MySidebar({ isOpen }) {
  console.log('Component: MySidebar');

  const role = window.localStorage.getItem('role');

  return (
    <div
      style={{
        ...(isOpen ? {
          width: '240px',
        } : {}),
        ...{
          paddingTop: '20px',
          borderRight: 'solid #D9D9D9 1px',
        }
    }}
    >
      {side.map(({ url, icon, title }, index) => (
        <div 
          style={{ 
            padding: '4px 8px', 
            cursor: 'pointer',
            backgroundColor: (window.location.pathname.includes(url) ? '#84B4FC' : '#FFFFFF')
          }}
          key={index}
        >
          <Link style={{ textDecoration: 'none', color: '#000000' }} to={(role === 'Sinh viên tự quản' ? '/sinh-vien' : '/quan-ly') + url}>
            <img style={{ height: '100%', marginRight: (isOpen ? '20px' : '')}} src={icon} alt={icon}/>
            {isOpen ? title : ''}
          </Link>
        </div>
      ))} 
    </div>
  );
}

export default MySidebar;