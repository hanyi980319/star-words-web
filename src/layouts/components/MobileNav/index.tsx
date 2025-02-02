// libs
import { NavLink } from 'react-router-dom';

// configs
import { SIDE_NAV_LIST } from '@/configs';

// styles
import './index.less';

/**
 * @name 移动端导航栏
 * @returns 
 */
const MobileNav = () => {
  return (
    <div className="mobile-nav">
      {SIDE_NAV_LIST.map((item) => (
        <NavLink
          key={item.key}
          to={item.key}
          className={({ isActive }) =>
            `mobile-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <img src={item.icon} className="nav-icon" />
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default MobileNav; 