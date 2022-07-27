import { PDFOptions as OriginalPDFOptions, launch } from "puppeteer";

export type PDFOptions = OriginalPDFOptions;

export abstract class PDFGenerator {
  static async convertToPdf(html: string, options: PDFOptions) {
    if (!options?.path) throw new Error("You must specify output path");
    const opts: OriginalPDFOptions = {
      format: options?.format ?? "A4",
      headerTemplate: options?.headerTemplate ?? "<p></p>",
      footerTemplate: options?.footerTemplate ?? "<p></p>",
      displayHeaderFooter: options?.displayHeaderFooter ?? false,
      margin: options?.margin ?? {
        top: "40px",
        bottom: "100px",
      },
      printBackground: options?.printBackground ?? true,
      path: options?.path,
    };

    const finalHtml = encodeURIComponent(html);
    const browser = await launch({
      args: ["--no-sandbox"],
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
      waitUntil: "networkidle0",
    });
    await page.pdf(options);
    await browser.close();
  }
}

// const options: PDFOptions = {
//     format: "A4",
//     headerTemplate: "<p></p>",
//     footerTemplate: "<p></p>",
//     displayHeaderFooter: false,
//     margin: {
//       top: "40px",
//       bottom: "100px",
//     },
//     printBackground: true,
//     path: "invoice.pdf",
//   };
