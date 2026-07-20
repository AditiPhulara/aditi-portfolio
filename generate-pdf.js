import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  console.log('Generating ATS-compliant Resume PDF for Aditi Fulara...');

  const pdfDoc = await PDFDocument.create();
  
  // A4 dimensions: 595 x 842
  const width = 595;
  const height = 842;
  const page = pdfDoc.addPage([width, height]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const leftMargin = 50;
  const rightMargin = 50;
  const printableWidth = width - leftMargin - rightMargin;
  
  let y = height - 50;

  function drawText(text, fontSize, font, color = rgb(0, 0, 0), xOffset = 0) {
    page.drawText(text, {
      x: leftMargin + xOffset,
      y: y,
      size: fontSize,
      font: font,
      color: color,
    });
  }

  function drawWrappedText(text, fontSize, font, leading = 13, xOffset = 0) {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > (printableWidth - xOffset) && n > 0) {
        lines.push(line.trim());
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());

    for (let i = 0; i < lines.length; i++) {
      if (y < 45) break;
      drawText(lines[i], fontSize, font, rgb(0.1, 0.1, 0.1), xOffset);
      if (i < lines.length - 1) {
        y -= leading;
      }
    }
    return lines.length;
  }

  function drawBulletPoint(text, fontSize = 9.5, xOffset = 15) {
    y -= 13;
    page.drawText('•', {
      x: leftMargin + xOffset - 10,
      y: y,
      size: fontSize,
      font: fontBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    drawWrappedText(text, fontSize, fontRegular, 12, xOffset);
  }

  function drawSectionHeading(title) {
    y -= 24;
    drawText(title.toUpperCase(), 11, fontBold, rgb(0.4, 0.1, 0.6));
    y -= 4;
    page.drawLine({
      start: { x: leftMargin, y: y },
      end: { x: width - rightMargin, y: y },
      thickness: 0.8,
      color: rgb(0.7, 0.7, 0.7),
    });
    y -= 10;
  }

  // 1. HEADER SECTION
  y -= 10;
  const nameText = 'Aditi Fulara';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 20);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 20,
    font: fontBold,
    color: rgb(0, 0, 0),
  });

  y -= 16;
  const contactText = 'aditifulara@gmail.com  |  github.com/AditiPhulara  |  linkedin.com/in/aditi-fulara-208346325/';
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 9);
  page.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 9,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });

  y -= 10;

  // 2. ABOUT ME SECTION
  drawSectionHeading('About Me');
  y -= 2;
  drawWrappedText(
    'Computer Science Engineering Student at Lovely Professional University. Passionate about Cloud Computing, Web Development, AWS services, Docker, Linux, Git, and Problem Solving. Continuously improving technical skills through practical implementations and hands-on projects.',
    9.5,
    fontRegular,
    13,
    0
  );

  // 3. EDUCATION SECTION
  drawSectionHeading('Education');
  drawText('Lovely Professional University', 9.5, fontBold, rgb(0.1, 0.1, 0.1));
  y -= 13;
  drawText('Bachelor of Technology in Computer Science Engineering', 9.5, fontItalic, rgb(0.3, 0.3, 0.3));

  // 4. TECHNICAL SKILLS
  drawSectionHeading('Skills');
  
  const skillCategories = [
    { label: 'Programming:', items: 'C++, Python' },
    { label: 'Web Technologies:', items: 'HTML, CSS, JavaScript, React.js, SQL' },
    { label: 'Cloud & Tools:', items: 'Git, GitHub, Linux, Docker, AWS EC2, GitHub Actions' }
  ];

  skillCategories.forEach(cat => {
    y -= 13;
    drawText(cat.label, 9.5, fontBold, rgb(0.1, 0.1, 0.1));
    const labelWidth = fontBold.widthOfTextAtSize(cat.label + ' ', 9.5);
    page.drawText(cat.items, {
      x: leftMargin + labelWidth,
      y: y,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.2, 0.2, 0.2),
    });
  });

  // 5. EXPERIENCE SECTION
  drawSectionHeading('Experience');
  y -= 2;
  drawWrappedText(
    'Computer Science Student actively learning Cloud Computing, Web Development, AWS, Docker, and Software Engineering through academic projects and self-learning.',
    9.5,
    fontRegular,
    13,
    0
  );

  // 6. PROJECTS SECTION
  drawSectionHeading('Projects');
  
  // Project 1
  drawText('1. Cloud Resume Website with CI/CD', 9.5, fontBold, rgb(0.1, 0.1, 0.1));
  y -= 2;
  drawBulletPoint('Built a responsive personal portfolio website.');
  drawBulletPoint('Containerized using Docker.');
  drawBulletPoint('Deployed on AWS EC2.');
  drawBulletPoint('Automated deployment using GitHub Actions CI/CD.');

  // Project 2
  y -= 12;
  drawText('2. Student Management System', 9.5, fontBold, rgb(0.1, 0.1, 0.1));
  y -= 2;
  drawBulletPoint('Developed a full-stack web application using React.js, HTML, CSS, JavaScript, and SQL for student record management.');

  // 7. ACHIEVEMENTS SECTION
  drawSectionHeading('Achievements');
  y -= 2;
  drawBulletPoint('Built and deployed projects using AWS and Docker.');
  drawBulletPoint('Implemented CI/CD pipelines using GitHub Actions.');
  drawBulletPoint('Strong understanding of Git and Linux.');

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  
  const destDir = path.join('public', 'resume');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const destPath = path.join(destDir, 'Aditi_Fulara_Resume.pdf');
  fs.writeFileSync(destPath, pdfBytes);

  const assetsDir = path.join('public', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  fs.writeFileSync(path.join(assetsDir, 'resume.pdf'), pdfBytes);

  console.log(`Successfully generated PDF resume at: ${destPath}`);
}

generateResume().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
