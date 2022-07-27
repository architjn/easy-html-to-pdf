# easy-html-to-pdf
> Upto the date lib for creating pdf files using HTML, internally using updated version of puppeteer for smooth integration.

# Install
    npm install --save dmarc-solution

# How to use
### Generate PDF with HTML Content
```javascript
const pdf = require("easy-html-to-pdf").PDFGenerator;

const options = {
  format: "A4", //allowed formats - 'letter', 'legal', 'tabloid', 'ledger', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6'
  headerTemplate: "<p></p>",
  footerTemplate: "<p></p>",
  displayHeaderFooter: false,
  margin: {
    top: "40px",
    bottom: "100px",
    right: "0px",
    left: "0px",
  },
  landscape: false,
  printBackground: true,
  path: "test.pdf", //only required field
};

pdf.convertToPdf("<h1>Hello world</h1>", options);
```
