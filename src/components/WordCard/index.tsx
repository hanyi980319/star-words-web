// libs
import { FC } from "react"
import { Card, Button, Space, Image } from "antd"
import { SoundOutlined } from "@ant-design/icons"

// types
import { WordType } from "@/types/word";

// styles
import "./index.less"

interface WordCardProps {
  data: WordType;
}

/**
 * @name 单词卡片
 * @returns 
 */
const WordCard: FC<WordCardProps> = ({ data }) => {
  return (
    <Card className="word-card">
      <div className="word-card-header">
        <div className="word-title">{data.word}</div>
        <div className="word-pronunciation">
          <span className="phonetic">{data.phonetic}</span>
          <Space>
            <Button type="text" icon={<SoundOutlined />}>
              US
            </Button>
            <Button type="text" icon={<SoundOutlined />}>
              UK
            </Button>
          </Space>
        </div>
      </div>

      <div className="word-image">
        <Image src={data.image} preview={false} />
      </div>

      <div className="word-content">
        <h2 className="word-translation">{data.translation}</h2>
      </div>

      <div className="example-sentences">
        {data.exampleSentences.map((item, index) => (
          <div key={index} className="example-sentence">
            <div className="example-sentence-content">{item.content}</div>
            <div className="example-sentence-translation">{item.translation}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default WordCard;
