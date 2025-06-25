import qrcode from "qrcode";
import fs from "fs"; // For saving the QR code image

// Define your contact information
const contact = {
  firstName: "Dr. Jini K.",
  lastName: "Gopinath",
  phoneNumber: "+919844021955",
  email: "drjini@drjini.com",
  organization: "Mind Matters",
  title: "Consultant, Clinical Psychologist and Clinical Hypnotherapist",
};

// Format the contact data as a vCard string
const vcard = `BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName}
FN:${contact.firstName} ${contact.lastName}
TEL:${contact.phoneNumber}
EMAIL:${contact.email}
ORG:${contact.organization}
TITLE:${contact.title}
END:VCARD`;

// Generate the QR code as a data URL (or save to a file)
qrcode.toDataURL(vcard, (err, url) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("QR Code Data URL:", url);

  // Optional: Save the QR code image to a file
  const base64Data = url.replace(/^data:image\/png;base64,/, "");
  fs.writeFile("contact_qr.png", base64Data, "base64", (err) => {
    if (err) {
      console.error("Error saving QR code:", err);
    } else {
      console.log("QR Code saved as contact_qr.png");
    }
  });
});
