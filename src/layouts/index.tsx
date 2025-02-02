// libs
import { useMediaQuery } from 'react-responsive';

// components
import PCNav from './components/PCNav';
import MobileNav from './components/MobileNav';

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
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="app-layout">
      {!isMobile && <PCNav />}
      <div className="app-content">
        {children}
        {isMobile && <MobileNav />}
      </div>
    </div>
  );
};

export default Layout;
