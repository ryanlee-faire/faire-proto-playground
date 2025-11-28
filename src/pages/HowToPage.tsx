import React from "react";
import { Link } from "react-router-dom";

// Placeholder component for screenshots
const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="bg-[#e0e0e0] rounded-lg flex items-center justify-center text-[#757575] text-sm font-medium border-2 border-dashed border-[#c0c0c0]" style={{ height: '200px' }}>
    📷 {label}
  </div>
);

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 bg-[#f5f5f5] z-50" style={{ borderBottom: '1px solid #dfe0e1' }}>
        <div className="mx-auto px-12" style={{ maxWidth: "1440px", height: '64px' }}>
          <div className="flex items-center justify-between h-full">
            <Link to="/" className="flex items-center">
              <img 
                alt="Faire Logo" 
                src="https://cdn.faire.com/static/logo.svg" 
                className="h-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "http://localhost:3845/assets/1e3ffc68be20eda669774f7388f9632f2f0bab67.svg";
                }}
              />
            </Link>
            
            <Link to="/" className="text-sm text-[#757575] hover:text-[#333333] transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-12 py-16">
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl text-[#333333] mb-4" style={{ fontFamily: 'Nantes, serif' }}>
            Getting started
          </h1>
          <p className="text-base text-[#757575] mb-8">
            Build prototypes using AI. You describe what you want – Cursor handles the code.
          </p>

          {/* Support Callout - Top */}
          <div className="bg-[#fff8e6] border border-[#f5d77a] rounded-xl p-4 mb-12">
            <p className="text-sm text-[#333333]">
              <strong>🙋 Need help?</strong> Stuck on something? Drop a message in <strong>#design-proto-playground</strong> on Slack – we're here to help!
            </p>
          </div>

          {/* Prerequisites */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-12">
            <h2 className="text-lg font-semibold text-[#333333] mb-4">
              Before you begin
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-lg">☐</span>
                <span className="text-sm text-[#757575]">
                  <strong className="text-[#333333]">Cursor is installed</strong> – Download at <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#333333]">cursor.sh</a> if you haven't yet
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">☐</span>
                <span className="text-sm text-[#757575]">
                  <strong className="text-[#333333]">GitHub access granted</strong> – Ask Ryan or John if you need access to the repo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">☐</span>
                <span className="text-sm text-[#757575]">
                  <strong className="text-[#333333]">You have an idea</strong> – A feature, flow, or concept you want to prototype
                </span>
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Clone the repo
                  </h3>
                  <p className="text-xs text-[#757575] mt-1">One-time setup</p>
                </div>
              </div>
              
              <div className="ml-12">
                <ol className="space-y-3 text-sm text-[#757575] mb-4">
                  <li><strong className="text-[#333333]">1.</strong> Open Cursor</li>
                  <li><strong className="text-[#333333]">2.</strong> On the welcome screen, click <strong className="text-[#333333]">"Clone repo"</strong></li>
                </ol>
                
                <div className="mb-4">
                  <ImagePlaceholder label="Screenshot: Cursor welcome screen with Clone repo button" />
                </div>
                
                <ol start={3} className="space-y-3 text-sm text-[#757575] mb-4">
                  <li><strong className="text-[#333333]">3.</strong> Paste this URL:</li>
                </ol>
                
                <div className="bg-[#f5f5f5] rounded-lg p-3 mb-4">
                  <code className="text-xs text-[#333333] break-all">https://github.com/ryanlee-faire/faire-proto-playground</code>
                </div>
                
                <ol start={4} className="space-y-3 text-sm text-[#757575]">
                  <li><strong className="text-[#333333]">4.</strong> Choose where to save it (Desktop or Documents works fine)</li>
                  <li><strong className="text-[#333333]">5.</strong> Click <strong className="text-[#333333]">"Open"</strong> when Cursor asks</li>
                </ol>
                
                <div className="mt-4 p-3 bg-[#f0f7ff] rounded-lg border border-[#cce0ff]">
                  <p className="text-xs text-[#333333]">
                    <strong>First time only:</strong> Cursor may ask to install dependencies – just click Yes. This takes about 30 seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Start a new prototype
                  </h3>
                  <p className="text-xs text-[#757575] mt-1">This is where the magic happens</p>
                </div>
              </div>
              
              <div className="ml-12">
                <ol className="space-y-3 text-sm text-[#757575] mb-4">
                  <li><strong className="text-[#333333]">1.</strong> Click the <strong className="text-[#333333]">chat icon</strong> or press <strong className="text-[#333333]">Cmd+L</strong> to open a new agent</li>
                </ol>
                
                <div className="mb-4">
                  <ImagePlaceholder label="Screenshot: Cursor chat/agent panel" />
                </div>
                
                <ol start={2} className="space-y-3 text-sm text-[#757575] mb-4">
                  <li><strong className="text-[#333333]">2.</strong> Type: <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">"I want to build a new prototype"</code></li>
                  <li><strong className="text-[#333333]">3.</strong> Answer the agent's questions:</li>
                </ol>
                
                <ul className="ml-6 space-y-2 text-sm text-[#757575] mb-4">
                  <li>• What's your feature called?</li>
                  <li>• Link to your PRD or Notion doc?</li>
                  <li>• Is it for Brand or Retailer surface?</li>
                </ul>
                
                <ol start={4} className="space-y-3 text-sm text-[#757575]">
                  <li><strong className="text-[#333333]">4.</strong> Cursor builds everything for you!</li>
                </ol>
                
                <div className="mt-4 p-4 bg-[#f5f5f5] rounded-lg">
                  <p className="text-sm font-semibold text-[#333333] mb-2">
                    What Cursor does automatically:
                  </p>
                  <ul className="space-y-1 text-xs text-[#757575]">
                    <li>✓ Creates a new git branch with your feature name</li>
                    <li>✓ Creates the prototype page file</li>
                    <li>✓ Adds it to the gallery</li>
                    <li>✓ Uses Faire design patterns</li>
                    <li>✓ Adds mock data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Keep building
                  </h3>
                  <p className="text-xs text-[#757575] mt-1">Iterate until you're happy</p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="text-sm text-[#757575] mb-4">
                  Continue talking to Cursor to make changes. Just describe what you want:
                </p>
                
                <ul className="space-y-2 text-sm text-[#757575] mb-4">
                  <li>• "Make the button bigger"</li>
                  <li>• "Add a sidebar with navigation"</li>
                  <li>• "Change the header to match this screenshot"</li>
                </ul>
                
                <div className="p-3 bg-[#f0f7ff] rounded-lg border border-[#cce0ff]">
                  <p className="text-xs text-[#333333]">
                    <strong>💡 Pro tip:</strong> Push your code to GitHub regularly for safekeeping. Ask Cursor: "Push my changes to GitHub"
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Submit for review
                  </h3>
                  <p className="text-xs text-[#757575] mt-1">Get feedback before going live</p>
                </div>
              </div>
              
              <div className="ml-12">
                <ol className="space-y-3 text-sm text-[#757575] mb-4">
                  <li><strong className="text-[#333333]">1.</strong> Ask Cursor: <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">"Push my changes and help me create a PR"</code></li>
                  <li><strong className="text-[#333333]">2.</strong> Go to GitHub and open your Pull Request</li>
                </ol>
                
                <div className="mb-4">
                  <ImagePlaceholder label="Screenshot: GitHub Pull Request page" />
                </div>
                
                <ol start={3} className="space-y-3 text-sm text-[#757575]">
                  <li><strong className="text-[#333333]">3.</strong> Tag <strong className="text-[#333333]">Gabe</strong> (or another reviewer) for feedback</li>
                  <li><strong className="text-[#333333]">4.</strong> Wait for approval, then merge!</li>
                </ol>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333]">
                    Go live! 🎉
                  </h3>
                  <p className="text-xs text-[#757575] mt-1">Share your prototype with anyone</p>
                </div>
              </div>
              
              <div className="ml-12">
                <p className="text-sm text-[#757575] mb-4">
                  Once your PR is merged, Vercel automatically deploys your prototype. It'll be live at:
                </p>
                
                <div className="bg-[#f5f5f5] rounded-lg p-3 mb-4">
                  <code className="text-xs text-[#333333]">faire-proto-playground.vercel.app/your-prototype-name</code>
                </div>
                
                <p className="text-sm text-[#757575]">
                  Share that URL with stakeholders, drop it in Slack, add it to your PRD – anyone can view it!
                </p>
              </div>
            </div>

          </div>

          {/* Guardrails */}
          <div className="mt-12 bg-[#fff5f5] border border-[#ffcdd2] rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-[#333333] mb-4">
              ⚠️ Important: Keep it isolated
            </h2>
            <p className="text-sm text-[#757575] mb-4">
              Multiple designers work in this playground. To avoid conflicts, please follow these guidelines:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-[#2e7d32] mb-2">✅ Do this</h3>
                <ul className="space-y-1 text-sm text-[#757575]">
                  <li>• Create new prototypes</li>
                  <li>• Edit YOUR prototype files</li>
                  <li>• Add new templates or components</li>
                  <li>• Work on your own branch</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#c62828] mb-2">🚫 Avoid this</h3>
                <ul className="space-y-1 text-sm text-[#757575]">
                  <li>• Editing the index page</li>
                  <li>• Modifying existing templates</li>
                  <li>• Changing shared components</li>
                  <li>• Editing other people's prototypes</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xs text-[#757575] mt-4">
              <strong>Why?</strong> Editing shared files can create merge conflicts and break other people's work. When in doubt, ask in <strong>#design-proto-playground</strong> first!
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-[#333333] mb-6">
              Common questions
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  Do I need to know how to code?
                </h3>
                <p className="text-sm text-[#757575]">
                  Nope! Just describe what you want. Cursor writes the code for you.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  What if something breaks?
                </h3>
                <p className="text-sm text-[#757575]">
                  Tell Cursor what's wrong – it can fix errors and adjust things. Your prototype is isolated, so you can't break other people's work.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  Can I come back and continue later?
                </h3>
                <p className="text-sm text-[#757575]">
                  Yes! Just open Cursor, start a new agent chat, and say "I want to continue working on [your feature name]". Cursor will pick up where you left off.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-block bg-[#333333] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#000000] transition-colors"
            >
              Back to Playground
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
