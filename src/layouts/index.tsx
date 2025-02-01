// components
import SideNav from './components/SideNav';

// styles
import './index.less';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * @name 页面布局组件
 * @param children 页面内容
 * @returns 
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <SideNav />
      <div className="app-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
