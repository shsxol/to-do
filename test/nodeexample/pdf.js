const pdfkit = require("pdfkit");
const fs = require("fs");

const payload = {
  text: "Hello World!",
  image: "image.jpg",
};

const pdfGenerator = (payload) => {
  console.log("Generating PDF...");
  const { text, image } = payload;
  if (!text && !image) throw new Error("Text or image is required");
  const doc = new pdfkit();
  doc.text(text);
  if (image) {
    doc.image(image, {
      fit: [250, 300],
      align: "center",
      valign: "center",
    });
  }
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.end();
  console.log("PDF generated successfully!");
};

pdfGenerator(payload);