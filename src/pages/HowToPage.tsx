import React from "react";
import { Link } from "react-router-dom";

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
      <div className="px-12 py-24">
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl text-[#333333] mb-4" style={{ fontFamily: 'Nantes, serif' }}>
            How to Get Started
          </h1>
          <p className="text-base text-[#757575] mb-12">
            The Design Prototype Playground has built-in AI automation. You just describe your idea - Cursor handles the technical setup.
          </p>

          {/* The Magic Callout */}
          <div className="bg-white rounded-3xl shadow-sm p-8 mb-12">
            <h2 className="text-xl font-semibold text-[#333333] mb-3">
              ✨ What Makes This Easy
            </h2>
            <p className="text-sm text-[#757575] mb-4">
              This playground has a <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">.cursorrules</code> file that automatically teaches Cursor:
            </p>
            <ul className="space-y-2 text-sm text-[#757575]">
              <li>✓ What the Design Prototype Playground is and how it works</li>
              <li>✓ Where prototype files go and how to structure them</li>
              <li>✓ How to register prototypes in the gallery</li>
              <li>✓ Faire's design patterns (colors, fonts, components)</li>
              <li>✓ How to create git branches automatically</li>
            </ul>
            <p className="text-sm text-[#757575] mt-4">
              <strong>Result:</strong> Every new Cursor chat knows how the DPP works. You never have to explain it - just describe what you want to build!
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">
                    Request Access
                  </h3>
                  <p className="text-sm text-[#757575]">
                    Contact Ryan or John to get access to the GitHub repository. Once you're added, you'll be able to clone and contribute.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">
                    Clone the Repo in Cursor
                  </h3>
                  <p className="text-sm text-[#757575] mb-3">
                    Get the code on your computer:
                  </p>
                  <ol className="space-y-2 text-sm text-[#757575] ml-4">
                    <li>1. Open Cursor</li>
                    <li>2. Click <strong>File → Clone Repository</strong> (or use Command Palette)</li>
                    <li>3. Paste the repo URL: <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">https://github.com/ryanlee-faire/faire-proto-playground</code></li>
                    <li>4. Choose where to save it on your computer</li>
                    <li>5. Click "Clone" and wait for Cursor to open the project</li>
                  </ol>
                  <p className="text-xs text-[#757575] mt-3 p-3 bg-[#f5f5f5] rounded">
                    <strong>First time?</strong> Cursor may ask to install dependencies or start the dev server. Just click "Yes" - this only happens once.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">
                    Start Building Your Prototype
                  </h3>
                  <p className="text-sm text-[#757575] mb-3">
                    Here's where the magic happens:
                  </p>
                  <ol className="space-y-2 text-sm text-[#757575] ml-4">
                    <li>1. Click <strong>"New Agent"</strong> in Cursor (Cmd+L or the chat icon)</li>
                    <li>2. Say: <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">"I want to build a new prototype"</code></li>
                    <li>3. Answer the agent's questions:
                      <ul className="ml-6 mt-2 space-y-1 text-xs">
                        <li>• What's your feature called?</li>
                        <li>• Link to your PRD or Notion doc?</li>
                        <li>• Is it for Brand or Retailer surface?</li>
                      </ul>
                    </li>
                    <li>4. Cursor builds everything for you!</li>
                  </ol>
                  
                  <div className="mt-4 p-4 bg-[#f5f5f5] rounded-lg">
                    <p className="text-sm font-semibold text-[#333333] mb-2">
                      What Cursor Does Automatically:
                    </p>
                    <ul className="space-y-1 text-xs text-[#757575]">
                      <li>✓ Creates a new git branch with your feature name</li>
                      <li>✓ Creates the prototype page file</li>
                      <li>✓ Adds routing configuration</li>
                      <li>✓ Registers it in the gallery</li>
                      <li>✓ Uses Faire design patterns automatically</li>
                      <li>✓ Adds mock data</li>
                      <li>✓ Commits and pushes to GitHub</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#333333] text-white flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#333333] mb-2">
                    Review & Share
                  </h3>
                  <p className="text-sm text-[#757575] mb-3">
                    Once Cursor finishes building:
                  </p>
                  <ol className="space-y-2 text-sm text-[#757575] ml-4">
                    <li>1. Test your prototype at <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">localhost:3000/your-feature</code></li>
                    <li>2. Check that it appears in the gallery</li>
                    <li>3. Go to GitHub and create a Pull Request</li>
                    <li>4. Tag reviewers (Gabe, Ryan, etc.) for feedback</li>
                  </ol>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link 
              to="/"
              className="inline-block bg-[#333333] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#000000] transition-colors"
            >
              Back to Playground
            </Link>
          </div>

          {/* FAQ/Troubleshooting */}
          <div className="mt-16 bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-[#333333] mb-6">
              Common Questions
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  Do I need to know how to code?
                </h3>
                <p className="text-sm text-[#757575]">
                  Nope! You just need to describe what you want. Cursor writes the code. You can tweak styling or content by talking to the agent.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  What if something breaks?
                </h3>
                <p className="text-sm text-[#757575]">
                  Just tell the agent what's wrong. It can fix errors, adjust styling, or rebuild sections. Each prototype is isolated, so you can't break other people's work.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  How do I share my prototype?
                </h3>
                <p className="text-sm text-[#757575]">
                  Once merged to main, your prototype is live at <code className="bg-[#f5f5f5] px-2 py-1 rounded text-xs">retailer-template.vercel.app/your-feature</code>. You can share that URL with anyone!
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-[#333333] mb-1">
                  Can I work on multiple prototypes?
                </h3>
                <p className="text-sm text-[#757575]">
                  Yes! Just start a new agent chat for each one. The agent will ask if it's a new feature (creates new branch) or continuing existing work.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

