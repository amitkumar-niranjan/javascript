// first intall npm i pdf-lib@latest

const { PDFDocument } = require('pdf-lib');
const fs = require('fs').promises;

async function compressPdf(inputPath, outputPath) {
  const inputBytes = await fs.readFile(inputPath);
  const pdfDoc = await PDFDocument.load(inputBytes);

  // Create a new PDFDocument with compressed pages
  const compressedPdfDoc = await PDFDocument.create();

  const pages = await compressedPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());
  pages.forEach((page) => compressedPdfDoc.addPage(page));

  // Save the compressed PDF
  const modifiedBytes = await compressedPdfDoc.save();
  await fs.writeFile(outputPath, modifiedBytes);
}

const inputPath = './medical-expenses-pdf/1.pdf';
const outputPath = './medical-expenses-pdf/1c.pdf';

compressPdf(inputPath, outputPath)
  .then(() => console.log('PDF compression complete'))
  .catch((error) => console.error('Error compressing PDF:', error));