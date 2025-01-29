// libs
import { Link } from 'react-router-dom';
import { Button } from 'antd';

// styles
import './App.less';

function App() {
  return (
    <div className="homePageContainer">
      <Link to="/learning">
        <Button type="primary">Star Words!</Button>
      </Link>
    </div>
  )
}

export default App
