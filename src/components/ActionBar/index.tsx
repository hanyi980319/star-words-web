// libs
import { Button, Space } from "antd";
import { CheckOutlined, QuestionOutlined } from "@ant-design/icons";

// types
import type React from "react";

// styles
import "./index.less";

interface ActionBarProps {
  onBack?: () => void;
  onKnow?: () => void;
  onUnknown?: () => void;
}

/**
 * @name 操作栏
 * @param {Function} onKnow - 认识单词
 * @param {Function} onUnknown - 不认识单词
 * @returns 
 */
const ActionBar: React.FC<ActionBarProps> = ({
  onKnow,
  onUnknown,
}) => {
  return (
    <div className="actionBar">
      <Space size="large">
        <Button icon={<QuestionOutlined />} onClick={onUnknown}>
          知りません
        </Button>
        <Button icon={<CheckOutlined />} onClick={onKnow}>
          知っています
        </Button>
      </Space>
    </div>
  );
};

export default ActionBar;