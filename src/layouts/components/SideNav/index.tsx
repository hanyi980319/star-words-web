// libs
import { NavLink } from 'react-router-dom';
import { Image } from 'antd';

// configs
import { SIDE_NAV_LIST } from '@/configs';

// styles
import './index.less';

/**
 * @name 侧边导航栏
 * @returns 
 */
const SideNav = () => {
  const menuItems = SIDE_NAV_LIST;

  return (
    <div className="side-nav">
      <div className="side-nav-logo">✨ Star Words</div>
      <div className="side-nav-menu">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={`side-nav-menu-item ${location.pathname === item.key ? 'active' : ''}`}
          >
            <NavLink to={item.key} className="side-nav-menu-link">
              <div className="side-nav-menu-icon">
                <Image src={item.icon} width={32} />
              </div>
              <div className="side-nav-menu-label">{item.label}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav; 