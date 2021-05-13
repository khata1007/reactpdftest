export { Sample };
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};

interface NumPages {
    numPages: number;
}

type FileState = {
    file: null | File;
}

function Sample() {
    const [file, setFile] = useState<File | null>(null);
    const [numPages, setNumPages] = useState<number | null>(null);

    function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target === null) return;
        if (event.target.files === null) return;
        setFile(event.target.files[0]);
    }
    
    function onDocumentLoadSuccess({ numPages: nextNumPages }: NumPages) {
        setNumPages(nextNumPages);
    }

    return (
        <div className="Example">
            <header>
                <h1>react-pdf sample page</h1>
            </header>
            <div className="Example__container">
                <div className="Example__container__load">
                    <label htmlFor="file">Load from file:</label>
                    {' '}
                    <input
                        onChange={onFileChange}
                        type="file"
                    />
                </div>
                <div className="Example__container__document">
                    { file &&
                      <Document
                          file={file}
                          onLoadSuccess={onDocumentLoadSuccess}
                          options={options}
                      >
                          {
                              Array.from(
                                  new Array(numPages),
                                  (el, index) => (
                                      <Page
                                          key={`page_${index + 1}`}
                                          pageNumber={index + 1}
                                      />
                                  ),
                              )
                          }
                      </Document>
                    }
                </div>
            </div>
        </div>
    );
}
