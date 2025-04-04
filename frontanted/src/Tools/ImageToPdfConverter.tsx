import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import Cropper from 'react-easy-crop';
import './ImageConverter.css'; // Custom CSS file

interface ImageFile {
  file: File;
  preview: string;
  crop?: { x: number; y: number; width: number; height: number };
  zoom?: number;
  brightness: number;
  contrast: number;
  croppedImage?: string;
}

const ImageToPdfConverter: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [zoom, setZoom] = useState(1);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      brightness: 100,
      contrast: 100,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const startEditing = (index: number) => {
    setCurrentImageIndex(index);
    const image = images[index];
    setCrop(image.crop || { x: 0, y: 0, width: 100, height: 100 });
    setZoom(image.zoom || 1);
    setBrightness(image.brightness);
    setContrast(image.contrast);
  };

  const saveEdits = async () => {
    if (currentImageIndex === null) return;

    const image = images[currentImageIndex];
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = image.preview;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    canvas.width = img.width;
    canvas.height = img.height;

    if (ctx) {
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
      ctx.drawImage(img, 0, 0);

      const croppedCanvas = document.createElement('canvas');
      const croppedCtx = croppedCanvas.getContext('2d');
      croppedCanvas.width = crop.width;
      croppedCanvas.height = crop.height;

      if (croppedCtx) {
        croppedCtx.drawImage(
          canvas,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );
      }
      const croppedImage = croppedCanvas.toDataURL('image/jpeg');

      const updatedImages = [...images];
      updatedImages[currentImageIndex] = {
        ...image,
        crop,
        zoom,
        brightness,
        contrast,
        croppedImage,
      };

      setImages(updatedImages);
      setCurrentImageIndex(null);
    }
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;

    const pdfDoc = await PDFDocument.create();

    for (const image of images) {
      const imgToUse = image.croppedImage || image.preview;
      const imgBytes = await fetch(imgToUse).then((res) => res.arrayBuffer());

      let imageEmbed;
      try {
        if (image.file.type === 'image/jpeg') {
          imageEmbed = await pdfDoc.embedJpg(imgBytes);
        } else {
          imageEmbed = await pdfDoc.embedPng(imgBytes);
        }

        const page = pdfDoc.addPage([imageEmbed.width, imageEmbed.height]);
        page.drawImage(imageEmbed, {
          x: 0,
          y: 0,
          width: imageEmbed.width,
          height: imageEmbed.height,
        });
      } catch (error) {
        console.error('Error embedding image:', error);
      }
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'enhanced-images.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="image-converter-container">
      <div className="file-input-container">
        <label className="file-input-label">
          Select Images
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            multiple
          />
        </label>
      </div>

      {currentImageIndex !== null && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            <h3>Edit Image</h3>

            <div className="crop-container">
              <Cropper
                image={images[currentImageIndex].preview}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                cropShape="rect"
              />
            </div>

            <div className="adjustment-controls">
              <div className="slider-control">
                <label>Brightness: {brightness}%</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                />
              </div>

              <div className="slider-control">
                <label>Contrast: {contrast}%</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => setContrast(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="modal-buttons">
              <button onClick={() => setCurrentImageIndex(null)}>Cancel</button>
              <button onClick={saveEdits}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {images.length > 0 && (
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <div
                className="image-preview"
                style={{
                  backgroundImage: `url(${image.croppedImage || image.preview})`,
                  filter: `brightness(${image.brightness}%) contrast(${image.contrast}%)`,
                }}
                onClick={() => startEditing(index)}
              >
                <div className="edit-overlay">Edit</div>
              </div>
              <span className="image-number">{index + 1}</span>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <button className="convert-button" onClick={convertToPdf}>
          Convert to PDF
        </button>
      )}
    </div>
  );
};

export default ImageToPdfConverter;