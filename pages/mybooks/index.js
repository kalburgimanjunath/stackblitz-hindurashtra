import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BOOKS as ebooks } from '../api/books';
export default function index() {
  const [books, setBooks] = useState(null);
  // const books = [
  //   {
  //     id: 1,
  //     title: 'Reactjs',
  //     description: 'react-beginners-handbook',
  //     pdfurl:
  //       'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf',
  //     type: 'programming',
  //   },
  //   {
  //     id: 2,
  //     title: 'React Redux',
  //     description: 'react-beginners-handbook',
  //     pdfurl:
  //       'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf',
  //     type: 'programming',
  //   },
  //   {
  //     id: 3,
  //     title: 'React Router',
  //     description: 'react-beginners-handbook',
  //     pdfurl:
  //       'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf',
  //     type: 'programming',
  //   },
  // ];

  useEffect(() => {
    return setBooks(ebooks);
  });

  return (
    <div className="p-24 flex grid grid-cols-1 md:grid-cols-1">
      <h1 className="font-bold w-full">
        Here is the list of Interesting books I wanted to go through.
      </h1>
      <div className="flex grid grid-cols-3 md:grid-cols-3">
        {books &&
          books.map((item) => {
            return (
              <div
                key={item.id}
                className="border-2 border-color-ping-100 m-2 p-2  rounded-10 "
              >
                {/* <div className="p-2 m-2 font-bold text-2xlg text-center">
                  {item.id}
                </div> */}
                <Link
                  href={`${
                    item.website == undefined
                      ? item.url == undefined
                        ? item.link
                        : item.url
                      : item.website
                  }`}
                  target="_new"
                >
                  <div className="font-bold">{item.title}</div>
                  {/* <div>{item.description}</div> */}
                </Link>

                {/* <>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                  <div id="pdfviewer">
                    <Viewer fileUrl="https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf" />
                  </div>
                </Worker>
              </> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
