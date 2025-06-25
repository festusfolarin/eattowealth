import QRCode from "qrcode";
import fs from "fs";

// Function to create vCard format string
function createVCard(contactInfo) {
  const {
    firstName = "",
    lastName = "",
    organization = "",
    title = "",
    phone = "",
    email = "",
    website = "",
    address = {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  } = contactInfo;

  const fullName = `${firstName} ${lastName}`.trim();
  const addressLine = `${address.street};${address.city};${address.state};${address.zip};${address.country}`;

  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${fullName}
N:${lastName};${firstName};;;
ORG:${organization}
TITLE:${title}
TEL:${phone}
EMAIL:${email}
URL:${website}
ADR:;;${addressLine}
END:VCARD`;

  return vCard;
}

// Function to generate QR code
async function generateContactQR(contactInfo, options = {}) {
  try {
    const {
      outputPath = "contact-qr.png",
      width = 300,
      margin = 2,
      color = {
        dark: "#000000",
        light: "#FFFFFF",
      },
    } = options;

    // Create vCard string
    const vCardData = createVCard(contactInfo);

    // Generate QR code
    const qrOptions = {
      width: width,
      margin: margin,
      color: color,
      type: "png",
    };

    // Generate and save to file
    await QRCode.toFile(outputPath, vCardData, qrOptions);
    console.log(`QR code saved to: ${outputPath}`);

    // Also save vCard data to a .vcf file
    const vcfFileName = outputPath.replace(".png", ".vcf");
    fs.writeFileSync(vcfFileName, vCardData);
    console.log(`vCard file saved as: ${vcfFileName}`);

    return {
      filePath: outputPath,
      vcfPath: vcfFileName,
      vCardData: vCardData,
    };
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw error;
  }
}

// Dr. Jini's contact information
const drJiniContact = {
  firstName: "Dr. Jini K.",
  lastName: "Gopinath",
  organization: "Mind Matters",
  title: "Consultant, Clinical Psychologist and Clinical Hypnotherapist",
  phone: "+919844021955",
  email: "drjini@drjini.com",
  website: "https://drjini.com",
  address: {
    street: "",
    city: "Bangalore",
    state: "Karnataka",
    zip: "",
    country: "India",
  },
};

// QR code options
const qrOptions = {
  outputPath: "dr-jini-contact-qr.png",
  width: 400,
  margin: 3,
  color: {
    dark: "#1a472a", // Professional green
    light: "#ffffff",
  },
};

// Main execution
async function main() {
  console.log("🔄 Generating QR code for Dr. Jini K. Gopinath...\n");

  try {
    const result = await generateContactQR(drJiniContact, qrOptions);

    console.log("\n✅ Contact QR code generated successfully!");
    console.log("📁 Files created:");
    console.log(`   • QR Code: ${result.filePath}`);
    console.log(`   • vCard: ${result.vcfPath}`);
    console.log("\n📱 Instructions:");
    console.log("   1. Open the QR code image");
    console.log("   2. Scan with any smartphone camera");
    console.log("   3. Tap to add contact to phone");
    console.log("\n📋 Contact Details in QR:");
    console.log(
      `   Name: ${drJiniContact.firstName} ${drJiniContact.lastName}`
    );
    console.log(`   Organization: ${drJiniContact.organization}`);
    console.log(`   Title: ${drJiniContact.title}`);
    console.log(`   Phone: ${drJiniContact.phone}`);
    console.log(`   Email: ${drJiniContact.email}`);
    console.log(`   Website: ${drJiniContact.website}`);
    console.log(
      `   Location: ${drJiniContact.address.city}, ${drJiniContact.address.state}, ${drJiniContact.address.country}`
    );
  } catch (error) {
    console.error("❌ Failed to generate contact QR code:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
