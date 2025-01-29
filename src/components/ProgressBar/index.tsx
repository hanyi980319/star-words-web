// libs
import { FC } from "react";
import { Link } from 'react-router-dom';
import { Button, Progress } from "antd";
import { CloseOutlined, FireOutlined } from "@ant-design/icons";

// styles
import "./index.less";

interface ProgressBarProps {
  current: number;
  total: number;
}

/**
 * @name 学习进度条
 * @param {number} current - 当前单词数
 * @param {number} total - 总单词数
 * @returns 
 */
const ProgressBar: FC<ProgressBarProps> = ({
  current,
  total,
}) => {
  const progress = Math.floor((current / total) * 100);

  return (
    <div className="progressBar">
      <div className="progressBarContent">
        <Link to="/">
          <Button icon={<CloseOutlined />} />
        </Link>
        <div className="progress">
          <Progress percent={progress} showInfo={false} />
        </div>
        <div className="progressBarRight">
          <FireOutlined style={{ fontSize: 24, color: "#FF4D4F" }} />
          <span>{current}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;
