import React from "react";
import { Link } from "react-router-dom";

export default function HowToPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 bg-[#f5f5f5] z-50 border-b border-[#dfe0e1]">
        <div className="mx-auto px-12" style={{ maxWidth: "1440px", height: '64px' }}>
          <div className="flex items-center justify-between h-full">
            {/* Left: Faire logo */}
            <Link to="/" className="flex items-center">
              <img 
                alt="Faire Logo" 
                src="https://cdn.faire.com/static/logo.svg" 
                className="h-3"
              />
            </Link>
            
            {/* Right: Navigation tabs */}
            <div className="flex gap-6">
              <Link
                to="/experimental"
                className="py-3 px-1 text-sm font-medium text-[#757575] hover:text-[#333333] transition-colors"
              >
                Experimental
              </Link>
              <Link
                to="/templates"
                className="py-3 px-1 text-sm font-medium text-[#757575] hover:text-[#333333] transition-colors"
              >
                Templates
              </Link>
              <Link
                to="/components"
                className="py-3 px-1 text-sm font-medium text-[#757575] hover:text-[#333333] transition-colors"
              >
                Components
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Paper container */}
      <div className="px-4 pt-8 md:pt-12">
        <div 
          className="mx-auto bg-white rounded-t-3xl shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.04)]"
          style={{ maxWidth: "1000px" }}
        >
          {/* Document header */}
          <div className="px-8 md:px-16 py-6 border-b border-[#e5e5e5]">
            <span className="text-xs font-medium tracking-widest text-[#666666] uppercase">
              Faire Prototyping Playground
            </span>
          </div>

          {/* Title section with TOC */}
          <div className="px-8 md:px-16 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-normal text-[#000000] tracking-tight mb-4" style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
                  Getting Started Guide
                </h1>
                <a 
                  href="https://fairewhosale.slack.com/channels/design-proto-playground" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#666666] hover:text-[#000000] border border-[#e0e0e0] hover:border-[#999999] rounded-full px-4 py-2 transition-colors"
                >
                  <span>↗</span>
                  <span>#design-proto-playground</span>
                </a>
              </div>
              
              {/* Table of contents */}
              <div className="space-y-3 flex-shrink-0">
                <TOCItem number={1} title="One-time setup" href="#setup" />
                <TOCItem number={2} title="Build your prototype" href="#build" />
                <TOCItem number={3} title="Go live" href="#go-live" />
                <TOCItem number={4} title="Tips & FAQ" href="#tips" />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <Section label="Introduction">
            <p className="text-[#444444] leading-relaxed">
              The Faire Prototyping Playground is a lightweight, standalone environment that lets non-technical designers rapidly build and test interfaces using Faire's UI components — without touching the monorepo. Using AI tools like Cursor, you describe what you want in plain English and the AI writes the code. Prototypes are good enough to validate concepts, demonstrate intended interactions, and share with stakeholders, but not meant to ship directly. Think of it as a clean room for exploring ideas with real components, minus the complexity of staging environments and business logic.
            </p>
          </Section>

          {/* One-time setup */}
          <Section label="One-time setup" id="setup">
            <h2 className="text-xl md:text-2xl font-medium text-[#000000] mb-4" style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
              Get set up in a few minutes.
            </h2>
            <p className="text-[#444444] leading-relaxed mb-6">
              You only need to do this once. After that, starting new prototypes takes almost no time.
            </p>

            <p className="text-[#888888] text-sm mb-6">
              This guide assumes you have Cursor installed and GitHub set up. If not, please take care of that first.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#000000] mb-2">1. Clone the playground repo</h3>
                <p className="text-[#444444] leading-relaxed mb-3">
                  Open Cursor and click <strong>"Clone Git Repository..."</strong> on the welcome screen. When prompted, paste this URL:
                </p>
                <div className="bg-[#f5f5f5] rounded px-4 py-3 font-mono text-sm text-[#333333] mb-3">
                  https://github.com/ryanlee-faire/faire-proto-playground
                </div>
                <p className="text-[#444444] leading-relaxed">
                  Choose where to save it (Desktop works fine), then click <strong>"Open"</strong> when asked. Cursor may prompt you to install dependencies — click Yes.
                </p>
              </div>

            </div>
          </Section>

          {/* Build your prototype */}
          <Section label="Build your prototype" id="build">
            <h2 className="text-xl md:text-2xl font-medium text-[#000000] mb-4" style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
              Start a conversation with Cursor.
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#000000] mb-2">1. Open the AI chat</h3>
                <p className="text-[#444444] leading-relaxed">
                  Press <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] border border-[#e0e0e0] rounded text-xs font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] border border-[#e0e0e0] rounded text-xs font-mono">L</kbd> or click the chat icon in the sidebar.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-2">2. Start with the keyphrase</h3>
                
                <div className="bg-[#f5f5f5] rounded px-4 py-3 mb-4 font-mono text-sm text-[#333333]">
                  "I want to build a new prototype"
                </div>
                
                <p className="text-[#444444] leading-relaxed mb-3">
                  <strong>Why this phrase?</strong> We've configured Cursor with custom instructions (called "Cursor Rules") specifically for this playground. When you say "I want to build a new prototype," it triggers a guided workflow that knows exactly how to set things up — creating the right files, adding your prototype to the gallery, using Faire's design patterns, and more.
                </p>
                <p className="text-[#444444] leading-relaxed">
                  Cursor will ask you a few questions: What's your feature called? Do you have a PRD or Notion doc? Is it for Brand or Retailer? Answer these and watch it build your prototype automatically.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-2">3. You're off to the races</h3>
                <p className="text-[#444444] leading-relaxed">
                  From here, just keep the conversation going. Describe what you want to change, drag in screenshots for reference, and iterate until you're happy with it.
                </p>
              </div>
            </div>
          </Section>

          {/* Go live */}
          <Section label="Go live" id="go-live">
            <h2 className="text-xl md:text-2xl font-medium text-[#000000] mb-4" style={{ fontFamily: 'ui-serif, Georgia, serif' }}>
              Share your prototype with anyone.
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#000000] mb-2">1. Submit your work</h3>
                <p className="text-[#444444] leading-relaxed mb-3">
                  Tell Cursor:
                </p>
                <div className="bg-[#f5f5f5] rounded px-4 py-3 mb-3 font-mono text-sm text-[#333333]">
                  "Push my changes and create a PR"
                </div>
                <p className="text-[#444444] leading-relaxed">
                  It will give you a link to your Pull Request on GitHub.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-2">2. Get reviewed</h3>
                <p className="text-[#444444] leading-relaxed">
                  Add someone as a reviewer (Gabe, Ryan, John, etc). They'll make sure everything is good to go.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-2">3. Merge and you're live</h3>
                <p className="text-[#444444] leading-relaxed mb-3">
                  Once approved, click the green <strong>Merge</strong> button. Your prototype deploys automatically and will be live at:
                </p>
                <div className="bg-[#f5f5f5] rounded px-4 py-3 font-mono text-sm text-[#333333]">
                  faire-proto-playground.vercel.app/<span className="text-[#16a34a]">your-prototype</span>
                </div>
                <p className="text-[#888888] text-sm mt-3">
                  Share this link with anyone — no login required.
                </p>
              </div>
            </div>
          </Section>

          {/* Tips */}
          <Section label="Tips" id="tips">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-[#000000] mb-1">Save regularly</h3>
                <p className="text-[#444444] leading-relaxed">
                  Tell the AI <em>"Push my changes to GitHub"</em> to back up your work anytime.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-1">Coming back later?</h3>
                <p className="text-[#444444] leading-relaxed">
                  Open Cursor, press ⌘+L, and say <em>"I want to continue working on [your feature name]"</em>.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-1">Keep it isolated</h3>
                <p className="text-[#444444] leading-relaxed">
                  Only edit your own prototype files. Don't modify the home page, shared components, or other people's work — this prevents conflicts.
                </p>
              </div>
            </div>
          </Section>

          {/* FAQ */}
          <Section label="FAQ" isLast>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#000000] mb-1">Do I need to know how to code?</h3>
                <p className="text-[#444444] leading-relaxed">
                  No. Just describe what you want in plain English. The AI writes all the code for you.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-1">What if something breaks?</h3>
                <p className="text-[#444444] leading-relaxed">
                  Just tell the AI what's wrong — "The button isn't working" or "I see an error". It can diagnose and fix issues.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-1">How long until my prototype is live?</h3>
                <p className="text-[#444444] leading-relaxed">
                  Once your PR is merged, it deploys in about 1-2 minutes.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#000000] mb-1">Can I use my own images?</h3>
                <p className="text-[#444444] leading-relaxed">
                  Yes. Drag images into the chat or paste URLs. Say "Make it look like this" and the AI will try to match it.
                </p>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

// Section component with label on the left
function Section({ 
  label, 
  children, 
  isLast = false,
  id
}: { 
  label: string; 
  children: React.ReactNode; 
  isLast?: boolean;
  id?: string;
}) {
  return (
    <div id={id} className={`px-8 md:px-16 py-10 md:py-12 ${!isLast ? 'border-b border-[#e5e5e5]' : ''} scroll-mt-20`}>
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="md:w-40 flex-shrink-0 mb-4 md:mb-0">
          <span className="text-sm text-[#888888]">{label}</span>
        </div>
        <div className="flex-1 max-w-[560px]">
          {children}
        </div>
      </div>
    </div>
  );
}

// Table of contents item
function TOCItem({ 
  number, 
  title, 
  href
}: { 
  number: number; 
  title: string; 
  href?: string;
}) {
  const content = (
    <>
      <span className="w-6 h-6 rounded-full bg-[#f5f5f5] text-[#666666] text-xs flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e5e5e5] transition-colors">
        {number}
      </span>
      <span className="font-medium text-[#000000]">{title}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-3 group hover:opacity-70 transition-opacity">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-start gap-3">
      {content}
    </div>
  );
}
