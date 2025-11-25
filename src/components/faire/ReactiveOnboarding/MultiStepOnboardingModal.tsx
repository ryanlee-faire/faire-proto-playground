import React, { useState } from 'react';

interface MultiStepOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function MultiStepOnboardingModal({ isOpen, onClose, onComplete }: MultiStepOnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [termsChecked, setTermsChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
    // Reset state
    setCurrentStep(1);
    setTermsChecked(false);
    setSelectedFile(null);
  };

  const handleClose = () => {
    // Reset and close
    setCurrentStep(1);
    setTermsChecked(false);
    setSelectedFile(null);
    onClose();
  };

  // File handling
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
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return true; // About Faire+ - always can proceed
      case 2: return termsChecked; // Terms - must check box
      case 3: return selectedFile !== null; // COI - must upload file
      case 4: return true; // Success - can close
      default: return false;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'About Faire+';
      case 2: return 'Sign Agreement';
      case 3: return 'Upload COI';
      case 4: return 'Complete';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#333333" strokeWidth="1.5">
            <path d="M12 4L4 12M4 4l8 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Step indicator */}
        <div className="px-8 pt-8 pb-6">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((step, index) => (
              <React.Fragment key={step}>
                {/* Step circle */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      step < currentStep
                        ? 'bg-[#333333] text-white'
                        : step === currentStep
                        ? 'bg-[#333333] text-white'
                        : 'bg-[#e5e5e5] text-[#999999]'
                    }`}
                  >
                    {step < currentStep ? (
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                        <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      step
                    )}
                  </div>
                  <span className={`mt-1 text-xs ${step === currentStep ? 'text-[#333333] font-medium' : 'text-[#999999]'}`}>
                    {getStepTitle(step)}
                  </span>
                </div>
                {/* Connector line */}
                {index < 3 && (
                  <div
                    className={`h-[2px] w-12 mx-2 mt-[-16px] ${
                      step < currentStep ? 'bg-[#333333]' : 'bg-[#e5e5e5]'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className="px-8 pb-6 min-h-[300px]">
          {/* Step 1: About Faire+ */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">About Faire+</h2>
              <div className="text-sm text-[#666666] leading-relaxed space-y-4">
                <p>
                  Faire+ connects you with larger, multi-location retailers who are looking for quality brands like yours. These enterprise retailers often place bigger orders and can become long-term partners.
                </p>
                <p>
                  By joining the program, you unlock access to retailers you wouldn't reach otherwise—all while keeping your same commission rates and fees.
                </p>
                <div className="bg-[#f7f7f7] rounded-lg p-4 mt-4">
                  <p className="font-medium text-[#333333] mb-2">What you'll need:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#333333] mt-0.5">1.</span>
                      <span>Accept the Faire+ vendor agreement (takes ~1 minute)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#333333] mt-0.5">2.</span>
                      <span>Upload a Certificate of Insurance ($2M liability coverage)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Sign Agreement */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">Sign the Faire+ Agreement</h2>
              <div className="text-sm text-[#666666] leading-relaxed mb-6">
                <p className="mb-4">
                  By signing this agreement, you agree to provide products to enterprise retailers through Faire's Vendor of Record model.
                </p>
                <div className="bg-[#f7f7f7] rounded-lg p-4">
                  <p className="font-medium text-[#333333] mb-2">Key Terms:</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Maintain active Certificate of Insurance</li>
                    <li>Provide accurate product information</li>
                    <li>Meet enterprise fulfillment standards</li>
                    <li>Standard commission rates apply</li>
                  </ul>
                </div>
              </div>
              
              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={termsChecked}
                    onChange={(e) => setTermsChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`h-5 w-5 rounded flex items-center justify-center ${termsChecked ? 'bg-[#333333]' : 'border-2 border-[#333333]'}`}>
                    {termsChecked && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                        <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[#333333]">
                  I agree to the{' '}
                  <button className="underline hover:text-[#666666]">Faire+ Terms & Conditions</button>.
                </span>
              </label>
            </div>
          )}

          {/* Step 3: Upload COI */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-[#333333] mb-4">Upload Certificate of Insurance</h2>
              <div className="text-sm text-[#666666] leading-relaxed mb-4">
                <p>
                  Upload proof of $2M liability insurance with Faire listed as additional insured. Your insurance provider can issue this document.
                </p>
              </div>

              {/* File Upload Dropzone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative mb-4 rounded-lg border-2 border-dashed h-[160px] flex flex-col items-center justify-center transition-colors ${
                  isDragging
                    ? 'border-[#333333] bg-[#f7f7f7]'
                    : 'border-[#dfe0e1] bg-[#fbfbfb]'
                }`}
              >
                <input
                  type="file"
                  id="file-upload-multistep"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                {!selectedFile ? (
                  <>
                    <div className="mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1.5">
                        <path d="M12 16V4M12 4l-5 5M12 4l5 5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <label htmlFor="file-upload-multistep" className="cursor-pointer text-center">
                      <span className="text-sm text-[#666666]">
                        Drop your updated CSV file here or{' '}
                        <span className="text-[#333333] underline">click to browse</span>
                      </span>
                    </label>
                  </>
                ) : (
                  <div className="flex items-center gap-3 px-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333333" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#333333] flex-1">{selectedFile.name}</span>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#e5e5e5]"
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#333333" strokeWidth="1.5">
                        <path d="M12 4L4 12M4 4l8 8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Requirements */}
              <div className="text-xs text-[#666666] bg-[#f7f7f7] rounded-lg p-3">
                <p className="font-medium text-[#333333] mb-1">Requirements:</p>
                <ul className="ml-4 list-disc space-y-0.5">
                  <li>$2M aggregate general liability</li>
                  <li>List 'Faire Wholesale, Inc.' as additional insured</li>
                  <li>PDF, JPG, or PNG (≤ 25 MB)</li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f5e9] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2">
                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#333333] mb-2">You're all set!</h2>
              <p className="text-sm text-[#666666] leading-relaxed max-w-md mx-auto">
                Your Faire+ enrollment is complete. We'll verify your Certificate of Insurance within 1-2 business days and notify you by email.
              </p>
              <p className="text-sm text-[#666666] mt-4">
                You can now accept orders from enterprise retailers.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#f7f7f7] px-8 py-4 flex items-center justify-between">
          <div>
            {currentStep > 1 && currentStep < 4 && (
              <button
                onClick={handleBack}
                className="text-sm text-[#666666] hover:text-[#333333] underline"
              >
                Back
              </button>
            )}
          </div>
          <div className="flex gap-3">
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  canProceed()
                    ? 'bg-[#333333] text-white hover:bg-[#444444]'
                    : 'bg-[#e5e5e5] text-[#999999] cursor-not-allowed'
                }`}
              >
                {currentStep === 1 ? 'Get Started' : 'Continue'}
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="px-6 py-2 rounded-lg text-sm font-medium bg-[#333333] text-white hover:bg-[#444444]"
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


