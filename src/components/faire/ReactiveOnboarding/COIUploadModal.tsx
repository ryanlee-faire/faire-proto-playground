import React, { useState } from 'react';

interface COIUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (fileName: string) => void;
}

export function COIUploadModal({ isOpen, onClose, onUpload }: COIUploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile.name);
      setSelectedFile(null); // Reset for next time
    }
  };

  const handleClose = () => {
    setSelectedFile(null); // Reset file when closing
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[var(--color-border-subdued)] p-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
              Upload your Certificate of Insurance
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full hover:bg-[var(--color-grey-200)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4L4 12M4 4l8 8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* File Upload Dropzone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative mb-6 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
              isDragging
                ? 'border-[var(--color-grey-900)] bg-[var(--color-grey-100)]'
                : 'border-[var(--color-border-subdued)] bg-white'
            }`}
          >
            <input
              type="file"
              id="file-upload"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            {!selectedFile ? (
              <>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-grey-200)]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 10v12M10 16h12" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28 22v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4M22 10l-6-6-6 6M16 4v12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="type-paragraph text-[var(--color-text-primary)]">
                    Drop your file here or{' '}
                    <span className="underline hover:text-[var(--color-text-subdued)]">
                      click to browse
                    </span>
                  </span>
                </label>
              </>
            ) : (
              <div className="flex items-center justify-between rounded-lg border border-[var(--color-border-subdued)] bg-[var(--color-grey-100)] p-4">
                <div className="flex items-center gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="type-paragraph text-[var(--color-text-primary)]">
                    {selectedFile.name}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[var(--color-grey-300)]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 4L4 12M4 4l8 8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Information Banner */}
          <div className="rounded-lg bg-[#F5F7FA] p-4">
            <p className="type-paragraph mb-3 text-[var(--color-text-primary)]">
              Enterprise retailers require basic insurance documentation before ordering. Uploading your COI ensures you're eligible for high-value orders.
            </p>
            <p className="type-paragraph text-[var(--color-text-subdued)]">
              <button className="underline hover:text-[var(--color-text-primary)]">
                Learn more about Certificate of Insurance
              </button>
              {' '}or{' '}
              <button className="underline hover:text-[var(--color-text-primary)]">
                contact support
              </button>
              {' '}for additional help.
            </p>
          </div>

          {/* Requirements */}
          <div className="mt-6 space-y-2">
            <p className="type-paragraph-medium text-[var(--color-text-primary)]">
              COI Requirements:
            </p>
            <ul className="type-paragraph ml-6 list-disc space-y-1 text-[var(--color-text-subdued)]">
              <li>Minimum $2M aggregate general liability coverage</li>
              <li>Policy must be active and unexpired</li>
              <li>Must list 'Faire Wholesale, Inc.' as additional insured</li>
              <li>Accepted formats: PDF, JPG, PNG (≤ 25 MB)</li>
            </ul>
          </div>

          {/* FAQs */}
          <div className="mt-6 space-y-3 border-t border-[var(--color-border-subdued)] pt-4">
            <details className="group">
              <summary className="type-paragraph-medium cursor-pointer text-[var(--color-text-primary)] hover:text-[var(--color-text-subdued)]">
                What is a Certificate of Insurance?
              </summary>
              <p className="type-paragraph mt-2 text-[var(--color-text-subdued)]">
                Proof from your insurer showing active liability coverage.
              </p>
            </details>
            <details className="group">
              <summary className="type-paragraph-medium cursor-pointer text-[var(--color-text-primary)] hover:text-[var(--color-text-subdued)]">
                My policy is below $2M, what should I do?
              </summary>
              <p className="type-paragraph mt-2 text-[var(--color-text-subdued)]">
                Ask your insurer for a coverage rider or increase.
              </p>
            </details>
            <details className="group">
              <summary className="type-paragraph-medium cursor-pointer text-[var(--color-text-primary)] hover:text-[var(--color-text-subdued)]">
                How do I add Faire as an additional insured?
              </summary>
              <p className="type-paragraph mt-2 text-[var(--color-text-subdued)]">
                Request your provider include "Faire Wholesale, Inc." on the certificate.
              </p>
            </details>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--color-border-subdued)] p-6">
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className={`w-full rounded-lg py-3 type-paragraph-medium transition-colors ${
              selectedFile
                ? 'bg-[var(--color-grey-900)] text-white hover:bg-[var(--color-grey-800)]'
                : 'bg-[var(--color-grey-300)] text-[var(--color-text-subdued)] cursor-not-allowed'
            }`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

