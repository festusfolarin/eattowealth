import QRCode from "qrcode";

const url = "https://www.eattowealth.com";

// SYNCHRONOUS JS
// QRCode.toFile("qrcode.png", url, { version: 10 }, (err) => {
//   if (err) return console.log("error");
// });

//ASYNCHRONOUS JS - USING PROMISES
QRCode.toFile("qrcode.png", url, {
  version: 4,
  errorCorrectionLevel: "H",
  width: 1080,
})
  .then(() => {
    console.log("QR code with high error correction generated successfully");
  })
  .catch((err) => {
    console.error("Error generating QR code:", err);
  });

// ASYNCHRONOUS JS - USING ASYNC/AWAIT
// const generateQR = async (url) => {
//   try {
//     await QRCode.toFile(
//       "qrcode.png",
//       url,
//       { errorCorrectionLevel: "H" },
//       (err) => {
//         // console.log(qrCodeUrl);
//       }
//     );
//   } catch (err) {
//     console.error(err);
//   }
// };
