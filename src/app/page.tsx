"use client"
import Image from "next/image";


export default function Home() {

  const PDF_FILE_URL = 'http://localhost:3000/file_pdf.pdf'
  const PNG_FILE_URL = 'http://localhost:3000/file_png.png'
  const CSV_FILE_URL = 'http://localhost:3000/file_csv.xlsx'
  const ZIP_FILE_URL = 'http://localhost:3000/file_zip.zip'

  const dowloadFileAtURL = async (url: any) => {
    const fileName = url.split("/").pop()
    const aTag = document.createElement('a');
    aTag.href = url
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }
  return (
    <div className="App">
      <button onClick={() => {dowloadFileAtURL(PDF_FILE_URL)}}>Download File PDF</button>
      <button onClick={() => {dowloadFileAtURL(PNG_FILE_URL)}}>Download File PNG</button>
      <button onClick={() => {dowloadFileAtURL(CSV_FILE_URL)}}>Download File CSV</button>
      <button onClick={() => {dowloadFileAtURL(ZIP_FILE_URL)}}>Download File ZIP</button>
    </div>
  );
}
