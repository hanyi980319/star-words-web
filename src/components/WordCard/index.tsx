// libs
import { FC } from "react"
import { Card, Button, Space, Image } from "antd"
import { CheckOutlined, QuestionOutlined, SoundOutlined } from "@ant-design/icons"

// types
import { WordType } from "@/types/word";

// styles
import "./index.less"

interface WordCardProps {
  data: WordType;
  onKnow?: () => void;
  onUnknown?: () => void;
}

/**
 * @name 单词卡片
 * @param {WordType} data - 单词数据
 * @param {Function} onKnow - 认识单词
 * @param {Function} onUnknown - 不认识单词
 * @returns 
 */
const WordCard: FC<WordCardProps> = ({ data, onKnow, onUnknown }) => {
  return (
    <Card className="word-card flex-column-center">
      <div className="word-card-content flex-column-center">
        <div className="word-title">{data.word}</div>
        <div className="word-pronunciation">
          <span className="phonetic">{data.phonetic}</span>
          <Button type="text" icon={<SoundOutlined />} />
        </div>
        <div className="word-image">
          <Image src={data.image} preview={false} />
        </div>
        <div className="word-translation">{data.translation}</div>
        <div className="example-sentences">
          {data.exampleSentences.map((item, index) => (
            <div key={index} className="example-sentence">
              <div className="example-sentence-content flex-row-center">
                <span className="example-sentence-content-text">{item.content}</span>
                <Button type="text" icon={<SoundOutlined />} />
              </div>
              <div className="example-sentence-translation">{item.translation}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="action-btns flex-row-center">
        <Space size="large">
          <Button
            icon={<QuestionOutlined />}
            onClick={onUnknown}
            className="unknown-btn"
          >
            知りません
          </Button>
          <Button
            icon={<CheckOutlined />}
            onClick={onKnow}
            className="known-btn"
          >
            知っています
          </Button>
        </Space>
      </div>
    </Card>
  )
}

export default WordCard;
