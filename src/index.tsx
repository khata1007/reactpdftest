import * as React from 'react';
import * as ReactDom from 'react-dom';
//import * as ReactPDF from 'react-pdf';
import {Document, Page, pdfjs} from 'react-pdf/dist/umd/entry.webpack';

//pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.js";

ReactDom.render(
  <Document file="../resources/xxx.pdf" options={{cMapUrl: "cmaps/", cMapPacked: true,}}>
    <Page pageNumber={1} />
  </Document>,
  document.getElementById('root')
);
