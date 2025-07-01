import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId, fileName = 'resume.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error('Element not found');
    return;
  }

  try {
    // Show loading state
    const originalButton = document.activeElement;
    if (originalButton) {
      originalButton.disabled = true;
      originalButton.textContent = 'Generating PDF...';
    }

    // Get the dimensions of the content
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;
    
    // Calculate the aspect ratio
    const aspectRatio = elementWidth / elementHeight;
    
    // Set PDF dimensions (A4 size in mm)
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = pdfWidth / aspectRatio;
    
    // Create canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: null,
    });
    
    // Calculate the width and height for the PDF
    const imgData = canvas.toDataURL('image/png');
    
    // Create PDF
    const pdf = new jsPDF({
      orientation: pdfHeight > pdfWidth ? 'portrait' : 'landscape',
      unit: 'mm',
    });
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
    // Save the PDF
    pdf.save(fileName);
    
    // Restore button state
    if (originalButton) {
      originalButton.disabled = false;
      originalButton.textContent = 'Download PDF';
    }
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    if (originalButton) {
      originalButton.disabled = false;
      originalButton.textContent = 'Download PDF';
    }
  }
};
