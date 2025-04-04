import React, { useState, useRef, useEffect } from 'react';
import "./PicturesEnhancer.css"

interface EnhancementSettings {
  faceSmoothness: number;
  skinWhitening: number;
  bodyWhitening: number;
  detailRecovery: number;
  eyeEnhancement: number;
  teethWhitening: number;
  lightingAdjustment: number;
  clarity: number;
  hdUpscale: boolean;
  backgroundEnhance: boolean;
}

const defaultSettings: EnhancementSettings = {
  faceSmoothness: 8,
  skinWhitening: 6,
  bodyWhitening: 5,
  detailRecovery: 7,
  eyeEnhancement: 5,
  teethWhitening: 4,
  lightingAdjustment: 3,
  clarity: 6,
  hdUpscale: true,
  backgroundEnhance: false
};

const PicturesEnhancer: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comparisonMode, setComparisonMode] = useState<'side-by-side' | 'slider'>('side-by-side');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [settings, setSettings] = useState<EnhancementSettings>(defaultSettings);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 50 * 1024 * 1024) {
        setError('File size exceeds 50MB limit');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setOriginalImage(event.target?.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragging as any);
    document.addEventListener('touchend', handleDragEnd);
  };

  const handleDragging = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;
    
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    setSliderPosition(pos * 100);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDragging as any);
    document.removeEventListener('touchend', handleDragEnd);
  };

  const enhanceImage = async () => {
    if (!originalImage || !fileInputRef.current?.files?.[0]) return;

    setLoading(true);
    setError(null);
    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('image', file);
    
    // PicturesEnhancerend all settings with explicit string conversion
    Object.entries(settings).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    try {
      const response = await fetch('http://localhost:5000/api/enhance', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Enhancement failed');
      }

      const blob = await response.blob();
      setProcessedImage(URL.createObjectURL(blob));
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Enhancement failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSettingChange = <T extends keyof EnhancementSettings>(
    name: T,
    value: EnhancementSettings[T]
  ) => {
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadImage = () => {
    if (!processedImage) return;
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `enhanced-By-Indian-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  useEffect(() => {
    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragging as any);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  return (
    <div className="app" style={{paddingTop: "6rem"}}>
      <header className="app-header">
        <h1>Professional Photo Enhancer</h1>
        <p>Get studio-quality enhancements with our advanced tools</p>
      </header>

      <div className="upload-area">
        <div 
          className={`drop-zone ${!originalImage ? 'empty' : ''}`}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          {!originalImage ? (
            <div className="upload-prompt">
              <div className="upload-icon">📷</div>
              <h3>Upload Your Photo</h3>
              <p>Drag & drop or click to browse</p>
              <p className="formats">Supports JPEG, PNG, WEBP (Max 50MB)</p>
            </div>
          ) : (
            <img 
              src={originalImage} 
              alt="Original preview" 
              className="preview-image"
            />
          )}
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>

      {originalImage && (
        <div className="processing-section">
          <div className="controls-panel">
            <div className="panel-header">
              <h2>Enhancement Controls</h2>
              <button className="reset-button" onClick={resetSettings}>
                Reset Defaults
              </button>
            </div>
            
            <div className="control-groups-container">
              <div className="control-group-category">
                <h3>Skin & Face</h3>
                
                <div className="control-group">
                  <label>
                    <span>Face Smoothness</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.faceSmoothness}
                        onChange={(e) => handleSettingChange('faceSmoothness', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.faceSmoothness.toFixed(1)}</span>
                    </div>
                    <div className="hint">Reduces skin imperfections</div>
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <span>Skin Whitening</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.skinWhitening}
                        onChange={(e) => handleSettingChange('skinWhitening', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.skinWhitening.toFixed(1)}</span>
                    </div>
                    <div className="hint">Brightens facial skin tone</div>
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <span>Body Whitening</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.bodyWhitening}
                        onChange={(e) => handleSettingChange('bodyWhitening', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.bodyWhitening.toFixed(1)}</span>
                    </div>
                    <div className="hint">Brightens body skin tone</div>
                  </label>
                </div>
              </div>

              <div className="control-group-category">
                <h3>Details & Features</h3>
                
                <div className="control-group">
                  <label>
                    <span>Detail Recovery</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.detailRecovery}
                        onChange={(e) => handleSettingChange('detailRecovery', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.detailRecovery.toFixed(1)}</span>
                    </div>
                    <div className="hint">Enhances facial features</div>
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <span>Eye Enhancement</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.eyeEnhancement}
                        onChange={(e) => handleSettingChange('eyeEnhancement', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.eyeEnhancement.toFixed(1)}</span>
                    </div>
                    <div className="hint">Sharpens and brightens eyes</div>
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <span>Teeth Whitening</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.teethWhitening}
                        onChange={(e) => handleSettingChange('teethWhitening', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.teethWhitening.toFixed(1)}</span>
                    </div>
                    <div className="hint">Brightens teeth</div>
                  </label>
                </div>
              </div>

              <div className="control-group-category">
                <h3>Lighting & Quality</h3>
                
                <div className="control-group">
                  <label>
                    <span>Lighting Adjustment</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="-5"
                        max="5"
                        step="0.1"
                        value={settings.lightingAdjustment}
                        onChange={(e) => handleSettingChange('lightingAdjustment', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.lightingAdjustment > 0 ? `+${settings.lightingAdjustment.toFixed(1)}` : settings.lightingAdjustment.toFixed(1)}</span>
                    </div>
                    <div className="hint">Adjusts overall lighting (-5 to +5)</div>
                  </label>
                </div>

                <div className="control-group">
                  <label>
                    <span>Clarity</span>
                    <div className="slider-container">
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={settings.clarity}
                        onChange={(e) => handleSettingChange('clarity', parseFloat(e.target.value))}
                      />
                      <span className="value-badge">{settings.clarity.toFixed(1)}</span>
                    </div>
                    <div className="hint">Improves overall sharpness</div>
                  </label>
                </div>

                <div className="switch-group">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.hdUpscale}
                      onChange={(e) => handleSettingChange('hdUpscale', e.target.checked)}
                    />
                    <span className="slider-switch"></span>
                    <span className="label-text">HD Upscaling</span>
                  </label>
                </div>

                <div className="switch-group">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.backgroundEnhance}
                      onChange={(e) => handleSettingChange('backgroundEnhance', e.target.checked)}
                    />
                    <span className="slider-switch"></span>
                    <span className="label-text">Background Enhance</span>
                  </label>
                </div>
              </div>
            </div>

            <button 
              className="process-button"
              onClick={enhanceImage}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : 'Enhance Image'}
            </button>
          </div>

          {processedImage && (
            <div className="results-panel">
              <div className="view-options">
                <button
                  className={comparisonMode === 'side-by-side' ? 'active' : ''}
                  onClick={() => setComparisonMode('side-by-side')}
                >
                  Side by Side
                </button>
                <button
                  className={comparisonMode === 'slider' ? 'active' : ''}
                  onClick={() => setComparisonMode('slider')}
                >
                  Comparison Slider
                </button>
              </div>

              <div className={`preview-container ${comparisonMode}`}>
                {comparisonMode === 'side-by-side' && (
                  <div className="split-view">
                    <div className="image-half original">
                      <img src={originalImage} alt="Original" />
                      <div className="label">Original</div>
                    </div>
                    <div className="image-half enhanced">
                      <img src={processedImage} alt="Enhanced" />
                      <div className="label">Enhanced</div>
                    </div>
                  </div>
                )}

                {comparisonMode === 'slider' && (
                  <div className="slider-view" ref={sliderRef}>
                    <div className="image-wrapper">
                      <img src={originalImage} alt="Original" className="base-image" />
                      <img 
                        src={processedImage} 
                        alt="Enhanced" 
                        className="processed-image"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                      />
                      <div 
                        className="slider-handle"
                        style={{ left: `${sliderPosition}%` }}
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                      >
                        <div className="slider-arrow">↔</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                className="download-button"
                onClick={downloadImage}
              >
                Download Enhanced Image
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PicturesEnhancer;