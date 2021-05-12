import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactPDF from 'react-pdf';

//import './@styles/react-pdf.styl'

// Hello コンポーネントの属性（プロパティ）を定義
interface HelloProps {
  name?: string;  // オプショナルな name 属性
}

// Hello コンポーネントを定義
class Hello extends React.Component<HelloProps> {
  public render(): React.ReactNode {
    const name = this.props.name ?? 'Unknown';
    return (
      <b>Hell, {name}!</b>
    );
  }
}

// Hello コンポーネントを <div id="root"> に表示
ReactDom.render(
  <ReactPDF.Document file="../resources/xxx.pdf">
    <ReactPDF.Page pageNumber={1} />
  </ReactPDF.Document>,
  document.getElementById('root')
);
