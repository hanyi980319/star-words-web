// libs
import { useState } from "react";
import { Button, message, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// components
import Layout from "@/layouts";
import ProgressBar from "@/components/ProgressBar";
import WordCard from "@/components/WordCard";

// styles
import "./index.less";

import { mockWords } from "@/mock";

/**
 * @name 单词学习页面
 * @returns 
 */
export default function Learn() {
  const [currentWordNum, setCurrentWordNum] = useState<number>(1); // 当前单词数
  const totalWordsNum = 10; // 总单词数

  const handleLastWord = () => {
    setCurrentWordNum((prev) => Math.max(prev - 1, 1));
  };

  const handleNextWord = () => {
    setCurrentWordNum((prev) => Math.min(prev + 1, totalWordsNum));
    if (currentWordNum === totalWordsNum) {
      message.success('Congratulation!');
    }
  };

  const handleKnow = () => {
    // TODO: 处理认识单词的逻辑
    handleNextWord();
  };

  const handleUnknown = () => {
    // TODO: 处理不认识单词的逻辑
    handleNextWord();
  };

  return (
    <Layout>
      <div className="flex-column-center">
        <ProgressBar
          current={currentWordNum}
          total={totalWordsNum}
        />
        <div className="word-card-container flex-row-center">
          <Space size="large">
            <Button
              icon={<LeftOutlined style={{ fontSize: '32px' }} />}
              size="large"
              style={{ width: '64px', height: '64px' }}
              onClick={handleLastWord}
            />
            <WordCard
              data={mockWords[currentWordNum - 1]}
              onKnow={handleKnow}
              onUnknown={handleUnknown}
            />
            <Button
              icon={<RightOutlined style={{ fontSize: '32px' }} />}
              size="large"
              style={{ width: '64px', height: '64px' }}
              onClick={handleNextWord}
            />
          </Space>
        </div>
      </div>
    </Layout>
  );
}
