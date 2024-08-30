"use client"
import Image from "next/image";


export default function Home() {

  const PDF_FILE_URL = 'http://localhost:3000/file_pdf.pdf'

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
      <button onClick={() => {dowloadFileAtURL(PDF_FILE_URL)}}>Download File</button>
    </div>
  );
}
