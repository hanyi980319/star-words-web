// libs
import { useState } from "react";

// components
import ProgressBar from "@/components/ProgressBar";
import WordCard from "@/components/WordCard";
import ActionBar from "@/components/ActionBar";

// styles
import "./index.less";

import { mockWords } from "@/mock";
import { Button, message, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

/**
 * @name 单词学习页面
 * @returns 
 */
export default function Learning() {
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
    <div className="learningPageContainer">
      <ProgressBar
        current={currentWordNum}
        total={totalWordsNum}
      />
      <div className="wordCardContainer">
        <Space size="large">
          <Button
            icon={<LeftOutlined />}
            size="large"
            onClick={handleLastWord}
          />
          <WordCard data={mockWords[currentWordNum - 1]} />
          <Button
            icon={<RightOutlined />}
            size="large"
            onClick={handleNextWord}
          />
        </Space>
      </div>
      <ActionBar
        onKnow={handleKnow}
        onUnknown={handleUnknown}
        onBack={handleLastWord}
      />
    </div>
  );
}
