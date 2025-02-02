// libs
import { NavLink } from 'react-router-dom';
import { Image } from 'antd';

// configs
import { SIDE_NAV_LIST } from '@/configs';

// styles
import './index.less';

/**
 * @name PC端导航栏
 * @returns 
 */
const PCNav = () => {
  const menuItems = SIDE_NAV_LIST;

  return (
    <div className="pc-nav">
      <div className="pc-nav-logo">✨ Star Words</div>
      <div className="pc-nav-menu">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`pc-nav-menu-item ${location.pathname === item.key ? 'active' : ''}`}
          >
            <NavLink to={item.key} className="pc-nav-menu-link">
              <div className="pc-nav-menu-icon">
                <Image src={item.icon} width={32} />
              </div>
              <div className="pc-nav-menu-label">{item.label}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCNav; 