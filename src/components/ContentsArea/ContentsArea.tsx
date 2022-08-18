import ContentCards from "./ContentCards/ContentCards"
import Content from "./Contents/Contents"

const ContentsArea: React.FC = () => {
  return (
    <>
      <h1>note</h1>
      <p>配列内に定義したコンテンツを並べる</p>
      <p>別ファルのJSONで管理？</p>
      <p>「READ」をクリックした際にクリックしたファイル名を取得し、propsに渡して遷移、マークダウンファイルを表示する</p>
      <p>+++++++++++++++++++++</p>
      <ContentCards />
      <Content />
    </>
  )
}
export default ContentsArea