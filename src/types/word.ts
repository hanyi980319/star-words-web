/** 单词类型 */
export type WordType = {
  id: number;
  word: string;
  phonetic: string;
  translation: string;
  image: string;
  exampleSentences: ExampleSentenceType[];
}

/** 例句类型 */
export type ExampleSentenceType = {
  content: string;
  translation: string;
}