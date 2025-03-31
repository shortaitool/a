// Initialize the tool
document.addEventListener('DOMContentLoaded', function() {
    initializeTool('image-to-png');
});

// Get DOM elements
const form = document.getElementById('imageConverterForm');
const imageInput = document.getElementById('imageInput');
const qualitySlider = document.getElementById('qualitySlider');
const qualityValue = document.getElementById('qualityValue');
const maintainTransparency = document.getElementById('maintainTransparency');
const previewSection = document.getElementById('previewSection');
const originalPreview = document.getElementById('originalPreview');
const convertedPreview = document.getElementById('convertedPreview');
const downloadBtn = document.getElementById('downloadBtn');

let originalImage = null;

// Update quality value display
qualitySlider.addEventListener('input', function() {
    qualityValue.textContent = this.value;
});

// Handle image selection
imageInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage = new Image();
            originalImage.onload = function() {
                originalPreview.src = e.target.result;
                previewSection.style.display = 'block';
            };
            originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!originalImage) {
        alert('Please select an image first.');
        return;
    }

    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;

    // Draw image
    ctx.drawImage(originalImage, 0, 0);

    // Convert to PNG
    const quality = qualitySlider.value / 100;
    const pngDataUrl = canvas.toDataURL('image/png', quality);

    // Display converted image
    convertedPreview.src = pngDataUrl;

    // Setup download button
    downloadBtn.onclick = function() {
        const link = document.createElement('a');
        link.download = 'converted-image.png';
        link.href = pngDataUrl;
        link.click();
    };
});

// Add drag and drop support
const dropZone = document.querySelector('.card-body');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropZone.classList.add('border-primary');
}

function unhighlight(e) {
    dropZone.classList.remove('border-primary');
}

dropZone.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const file = dt.files[0];

    if (file && file.type.startsWith('image/')) {
        imageInput.files = dt.files;
        const event = new Event('change');
        imageInput.dispatchEvent(event);
    } else {
        alert('Please drop an image file.');
    }
}

// Add error handling
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        alert('Error loading image. Please try again.');
    }
}); 