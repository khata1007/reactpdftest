import * as React from 'react';
import * as ReactDom from 'react-dom';
//import * as ReactPDF from 'react-pdf';
import {Document, Page, pdfjs} from 'react-pdf/dist/umd/entry.webpack';

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

ReactDom.render(
  <Document file="./xxx.pdf" >
    <Page pageNumber={1} />
  </Document>,
  document.getElementById('root')
);
