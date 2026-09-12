import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  console.log('Generating ATS-compliant Resume PDF for Aditi Phulara...');

  const pdfDoc = await PDFDocument.create();
  
  // A4 dimensions: 595 x 842
  const width = 595;
  const height = 842;
  const page = pdfDoc.addPage([width, height]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const leftMargin = 45;
  const rightMargin = 45;
  const printableWidth = width - leftMargin - rightMargin;
  
  let y = height - 40;

  function drawText(text, fontSize, font, color = rgb(0, 0, 0), xOffset = 0) {
    page.drawText(text, {
      x: leftMargin + xOffset,
      y: y,
      size: fontSize,
      font: font,
      color: color,
    });
  }

  function drawWrappedText(text, fontSize, font, leading = 11.5, xOffset = 0, textColor = rgb(0.1, 0.1, 0.1)) {
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
      if (y < 35) break;
      drawText(lines[i], fontSize, font, textColor, xOffset);
      if (i < lines.length - 1) {
        y -= leading;
      }
    }
    return lines.length;
  }

  function drawBulletPoint(text, fontSize = 8.5, xOffset = 12) {
    y -= 11;
    page.drawText('•', {
      x: leftMargin + xOffset - 8,
      y: y,
      size: fontSize,
      font: fontBold,
      color: rgb(0.2, 0.2, 0.2),
    });
    drawWrappedText(text, fontSize, fontRegular, 11, xOffset, rgb(0.15, 0.15, 0.15));
  }

  function drawSectionHeading(title) {
    y -= 16;
    drawText(title.toUpperCase(), 10, fontBold, rgb(0.35, 0.1, 0.55));
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y: y },
      end: { x: width - rightMargin, y: y },
      thickness: 0.7,
      color: rgb(0.7, 0.7, 0.7),
    });
    y -= 8;
  }

  // 1. HEADER SECTION
  const nameText = 'Aditi Phulara';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 18);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 18,
    font: fontBold,
    color: rgb(0.05, 0.05, 0.05),
  });

  y -= 13;
  const contactText = 'aditifulara@gmail.com  |  +91 9414633810  |  linkedin.com/in/aditi-fulara  |  github.com/AditiPhulara';
  const contactWidth = fontRegular.widthOfTextAtSize(contactText, 8);
  page.drawText(contactText, {
    x: (width - contactWidth) / 2,
    y: y,
    size: 8,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });

  y -= 4;

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  drawWrappedText(
    'Computer Science undergraduate with hands-on experience in machine learning, deep learning, and full-stack web development. Completed an AI/ML research internship at CSIR-CEERI on biomedical signal processing and a software development internship. Built AI-powered applications with Python, TensorFlow, React.js, and Node.js. Seeking Software Engineering or AI/ML roles.',
    8.5,
    fontRegular,
    11
  );

  // 3. TECHNICAL SKILLS
  drawSectionHeading('Technical Skills');
  const skillCategories = [
    { label: 'Languages:', items: 'C++, Python, Java, JavaScript, SQL' },
    { label: 'Frontend:', items: 'React.js, HTML5, CSS3, JavaScript, Chart.js' },
    { label: 'Backend:', items: 'Node.js, Express.js, Flask, REST APIs' },
    { label: 'AI / ML:', items: 'Machine Learning, Deep Learning, CNN, Computer Vision, TensorFlow, Keras, OpenCV, NumPy, Streamlit, Gemini AI, OpenAI API' },
    { label: 'Database & Tools:', items: 'MySQL, Git, GitHub, Linux (Ubuntu), Docker, CI/CD, VS Code' },
    { label: 'Core CS:', items: 'Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS' },
  ];

  skillCategories.forEach(cat => {
    y -= 10;
    drawText(cat.label, 8.5, fontBold, rgb(0.1, 0.1, 0.1));
    const labelWidth = fontBold.widthOfTextAtSize(cat.label + ' ', 8.5);
    drawWrappedText(cat.items, 8.5, fontRegular, 10.5, labelWidth);
  });

  // 4. WORK EXPERIENCE
  drawSectionHeading('Internships');

  // Experience 1
  drawText('AI/ML Research Intern', 9, fontBold, rgb(0.1, 0.1, 0.1));
  const exp1Sub = 'CSIR – Central Electronics Engineering Research Institute (CEERI), Pilani';
  drawText(exp1Sub, 8.5, fontItalic, rgb(0.3, 0.3, 0.3), fontBold.widthOfTextAtSize('AI/ML Research Intern ', 9));
  const date1 = "Jun '26 – Jul '26";
  page.drawText(date1, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(date1, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });

  drawBulletPoint('Implemented deep learning and signal processing techniques for fetal ECG extraction from maternal ECG signals.');
  drawBulletPoint('Developed and evaluated ECG feature detection models for accurate R-peak identification.');
  drawBulletPoint('Preprocessed and analyzed physiological signal datasets to improve model training and evaluation workflows.');

  // Experience 2
  y -= 4;
  drawText('Software Developer Intern', 9, fontBold, rgb(0.1, 0.1, 0.1));
  drawText('Byte Band Technologies Private Limited', 8.5, fontItalic, rgb(0.3, 0.3, 0.3), fontBold.widthOfTextAtSize('Software Developer Intern ', 9));
  const date2 = "May '26 – Jul '26";
  page.drawText(date2, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(date2, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });

  drawBulletPoint('Contributed to software design, development, and testing activities.');
  drawBulletPoint('Assisted in implementing and debugging application features.');
  drawBulletPoint('Collaborated with the development team to improve functionality and code quality.');
  drawBulletPoint('Participated in testing and validation of software modules.');

  // 5. PROJECTS
  drawSectionHeading('Projects');

  // Project 1
  drawText('GestureTalk | Real-Time Sign Language to Speech Translation', 9, fontBold, rgb(0.1, 0.1, 0.1));
  const p1Date = "Aug '25 – Nov '25";
  page.drawText(p1Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(p1Date, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });
  drawBulletPoint('Developed a real-time sign language translation system using computer vision and deep learning to convert hand gestures into spoken language.');
  drawBulletPoint('Extracted 21 hand landmark keypoints using MediaPipe Hands and trained TensorFlow/Keras models on 63-dimensional feature vectors for gesture classification.');
  drawBulletPoint('Integrated Gemini and Hugging Face APIs for confidence-based sentence reconstruction and contextual output generation.');
  drawBulletPoint('Achieved 88% gesture recognition accuracy, 10–12 FPS processing performance, and ~2-second speech generation latency.');
  drawBulletPoint('Tech: Python, TensorFlow, Keras, MediaPipe, OpenCV, Gemini API, Hugging Face, pyttsx3, gTTS');

  // Project 2
  y -= 4;
  drawText('AI-Powered Plant Disease Detection System', 9, fontBold, rgb(0.1, 0.1, 0.1));
  const p2Date = "Jan '26 – May '26";
  page.drawText(p2Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(p2Date, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });
  drawBulletPoint('Engineered a deep learning-based plant disease detection system using CNNs and TensorFlow, capable of classifying 38 plant disease categories from leaf images.');
  drawBulletPoint('Built an interactive web application using Streamlit and Flask, enabling real-time disease prediction with confidence scores and treatment recommendations.');
  drawBulletPoint('Integrated a Gemini AI-powered chatbot to provide plant health guidance, disease information, and preventive recommendations.');
  drawBulletPoint('Optimized image preprocessing and model inference pipelines, improving prediction speed and enhancing user experience.');
  drawBulletPoint('Tech: Python, TensorFlow, Keras, CNN, Streamlit, Flask, OpenCV, NumPy, Gemini AI');

  // Project 3
  y -= 4;
  drawText('AI-Powered Chronic Pain Tracking & Analysis System', 9, fontBold, rgb(0.1, 0.1, 0.1));
  const p3Date = "Jan '26 – May '26";
  page.drawText(p3Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(p3Date, 8.5),
    y: y,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });
  drawBulletPoint('Architected and developed an AI-powered chronic pain monitoring platform for tracking pain intensity, affected regions, symptoms, and daily health patterns.');
  drawBulletPoint('Built a full-stack web application featuring dashboards, pain history tracking, and trend visualization.');
  drawBulletPoint('Implemented AI-driven pain analysis to generate personalized recommendations, identify recurring pain triggers, and provide domain-specific health insights.');
  drawBulletPoint('Implemented interactive charts and analytics for monitoring pain progression and supporting data-driven self-management.');
  drawBulletPoint('Tech: React.js, Node.js, Express.js, MySQL, Chart.js, JavaScript, REST APIs, OpenAI API');

  // 6. CERTIFICATIONS & TRAINING
  drawSectionHeading('Certifications & Training');
  drawText('DevOps & Cloud Engineering', 8.5, fontBold, rgb(0.1, 0.1, 0.1));
  drawText('EduNiketan', 8.5, fontItalic, rgb(0.3, 0.3, 0.3), fontBold.widthOfTextAtSize('DevOps & Cloud Engineering ', 8.5));
  const cert1Date = "Jun '26 – Jul '26";
  page.drawText(cert1Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(cert1Date, 8),
    y: y,
    size: 8,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });
  drawBulletPoint('Completed intensive hands-on training in DevOps and Cloud Engineering concepts, covering Git, GitHub, Linux, Docker, CI/CD pipelines, and cloud computing fundamentals.');
  drawBulletPoint('Worked on deployment workflows, version control, and automation practices with practical exposure to industry cloud services and DevOps tools.');

  y -= 4;
  drawText('Database Management System – Infosys', 8.5, fontBold, rgb(0.1, 0.1, 0.1));
  const cert2Date = "Jul '26";
  page.drawText(cert2Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(cert2Date, 8),
    y: y,
    size: 8,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });

  y -= 11;
  drawText('Database and SQL – Infosys', 8.5, fontBold, rgb(0.1, 0.1, 0.1));
  const cert3Date = "Sep '26";
  page.drawText(cert3Date, {
    x: width - rightMargin - fontRegular.widthOfTextAtSize(cert3Date, 8),
    y: y,
    size: 8,
    font: fontRegular,
    color: rgb(0.4, 0.4, 0.4),
  });

  // 7. ACHIEVEMENTS
  drawSectionHeading('Achievements');
  drawBulletPoint('Solved 100+ DSA problems on LeetCode, strengthening problem-solving and algorithmic thinking skills.');
  drawBulletPoint('Completed 2 technical internships in AI/ML and Software Development domains.');
  drawBulletPoint('Built and deployed full-stack and AI-powered applications using modern web and machine learning technologies.');

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

