import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Remove Background from Images for Free (5 Methods) | GetImgTools",
  description: "Complete guide to removing backgrounds from images for free. Learn 5 different methods including online tools, AI solutions, and manual techniques. Perfect for e-commerce, social media, and design projects.",
  keywords: [
    "remove background from image",
    "free background remover",
    "transparent background",
    "image background removal",
    "online background remover",
    "remove bg free",
    "transparent image maker",
    "product photo background",
    "e-commerce image editing",
    "social media images"
  ],
  openGraph: {
    title: "How to Remove Background from Images for Free (5 Methods)",
    description: "Complete guide to removing backgrounds from images for free. Learn 5 different methods including online tools, AI solutions, and manual techniques.",
    type: "article",
    publishedTime: "2025-04-15T00:00:00.000Z",
    authors: ["GetImgTools Team"],
  },
};

export default function RemoveBackgroundGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <ImageIcon className="w-4 h-4" />
          Image Editing Guide
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          How to Remove Background from Images for Free (5 Methods)
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          A complete guide to creating transparent backgrounds for product photos, social media images, and design projects — all without spending a dime.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>📅 Published: April 15, 2025</span>
          <span>⏱️ 8 min read</span>
          <span>🏷️ Image Editing, Design Tools</span>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-700">📋</span>
          What You'll Learn
        </h2>
        <ul className="space-y-3">
          {[
            "5 free methods for background removal",
            "When to use each technique",
            "Step-by-step tutorials for each method",
            "Tips for perfect transparent backgrounds",
            "Common mistakes to avoid",
            "Best tools for different use cases"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Remove Backgrounds?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              icon: "🛒",
              title: "E-commerce",
              description: "Clean product photos increase sales by 30-40%"
            },
            {
              icon: "📱",
              title: "Social Media",
              description: "Professional-looking posts stand out in feeds"
            },
            {
              icon: "🎨",
              title: "Design Projects",
              description: "Flexibility to place images anywhere"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Method 1: Online Tools */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
          <h2 className="text-2xl font-bold text-slate-900">Method 1: Free Online Tools</h2>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Best for: Quick & Easy Background Removal</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Pros</h4>
              <ul className="space-y-2">
                {[
                  "No software installation required",
                  "Works on any device with a browser",
                  "AI-powered for accurate results",
                  "Batch processing available",
                  "Free tiers with generous limits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Cons</h4>
              <ul className="space-y-2">
                {[
                  "Internet connection required",
                  "File size limits on free plans",
                  "May have watermarks on free versions",
                  "Privacy concerns with sensitive images"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">✗</div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">💡 Recommended Tools</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-blue-800">Remove.bg</span>
                <span className="text-sm text-blue-600">Free for personal use</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-800">Canva Background Remover</span>
                <span className="text-sm text-blue-600">Free with Canva account</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-blue-800">Adobe Express</span>
                <span className="text-sm text-blue-600">Free with Adobe account</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Method 2: Photo Editing Software */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
          <h2 className="text-2xl font-bold text-slate-900">Method 2: Photo Editing Software</h2>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Best for: Professional-Level Control</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Free Software Options</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GIMP",
                    description: "Powerful open-source alternative to Photoshop",
                    features: ["Advanced selection tools", "Layer masks", "Batch processing"]
                  },
                  {
                    name: "Photopea",
                    description: "Browser-based Photoshop clone",
                    features: ["Familiar Photoshop interface", "No installation", "Auto-save to cloud"]
                  }
                ].map((tool, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <h5 className="font-bold text-slate-900 mb-2">{tool.name}</h5>
                    <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
                    <ul className="space-y-1">
                      {tool.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-xs text-slate-700 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-bold text-amber-900 mb-2">⚠️ Learning Curve Warning</h4>
              <p className="text-amber-800 text-sm">
                Professional software like GIMP has a steeper learning curve but offers unparalleled control. 
                Expect to spend 2-3 hours learning the basics before you can efficiently remove backgrounds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Tutorial */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Step-by-Step: Remove Background with Online Tool</h2>
        
        <div className="space-y-8">
          {[
            {
              step: "1",
              title: "Choose Your Image",
              description: "Select a high-contrast image with clear edges. Images with fuzzy hair or transparent objects are more challenging.",
              tip: "Use images with solid color backgrounds for best results"
            },
            {
              step: "2",
              title: "Upload to Tool",
              description: "Drag and drop your image into the online tool's upload zone. Most tools support JPG, PNG, and WebP formats.",
              tip: "Keep file size under 5MB for faster processing"
            },
            {
              step: "3",
              title: "Let AI Work",
              description: "The AI will automatically detect and remove the background. This usually takes 2-10 seconds depending on image complexity.",
              tip: "For complex images, use the manual refinement tools"
            },
            {
              step: "4",
              title: "Download Result",
              description: "Download your image with transparent background (PNG format) or with a new background of your choice.",
              tip: "Choose PNG for transparency, JPG for solid backgrounds"
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-700 mb-3">{item.description}</p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="text-sm font-medium text-slate-900">💡 Pro Tip:</span>
                  <span className="text-sm text-slate-700 ml-2">{item.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Mistakes to Avoid</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              mistake: "Using low-resolution images",
              solution: "Always use the highest resolution source image available",
              impact: "Results in jagged edges and poor quality"
            },
            {
              mistake: "Ignoring hair/fur details",
              solution: "Use specialized hair selection tools or manual refinement",
              impact: "Creates unnatural cut-out appearance"
            },
            {
              mistake: "Forgetting to check edges",
              solution: "Zoom in to 200% and inspect edges for leftover background pixels",
              impact: "Visible halo effect around subjects"
            },
            {
              mistake: "Saving in wrong format",
              solution: "Use PNG for transparency, WebP for web use, JPG for solid backgrounds",
              impact: "Loss of transparency or unnecessary large file sizes"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-red-100 text-red-700 rounded flex items-center justify-center font-bold flex-shrink-0">
                  ✗
                </div>
                <h3 className="font-bold text-slate-900">{item.mistake}</h3>
              </div>
              <p className="text-sm text-slate-700 mb-3">{item.solution}</p>
              <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                Impact: {item.impact}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Recommendations</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            {
              scenario: "Quick social media post",
              recommendation: "Use free online tool",
              time: "1-2 minutes"
            },
            {
              scenario: "E-commerce product photos",
              recommendation: "Professional software",
              time: "5-10 minutes per image"
            },
            {
              scenario: "Batch processing",
              recommendation: "Tool with batch support",
              time: "Varies by quantity"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-2">{item.scenario}</h3>
              <p className="text-blue-700 font-medium mb-2">{item.recommendation}</p>
              <div className="text-sm text-slate-600">⏱️ {item.time}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-slate-700 mb-6">
            Remember: The best method depends on your specific needs, time constraints, and quality requirements.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
            <Link href="/tools" className="flex items-center gap-2">
              Explore All Image Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "How to Compress Images for Web Performance",
              description: "Reduce file sizes without losing quality",
              readTime: "7 min read",
              href: "/blog/how-to-compress-images-for-web-performance"
            },
            {
              title: "JPG vs PNG vs WebP: Which Format to Use",
              description: "Complete guide to image formats",
              readTime: "6 min read",
              href: "/blog/jpg-vs-png-vs-webp-which-format"
            }
          ].map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="block border border-slate-200 hover:border-blue-300 rounded-xl p-5 transition-colors group"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 mb-2">{article.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{article.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{article.readTime}</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-700">
                  Read article
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-6">FAQ: Background Removal</h2>
          <div className="space-y-5">
            {[
              {
                q: "What is the best free background remover?",
                a: "For quick results, online AI tools are the easiest option. If you need more control, use free editors like GIMP or Photopea. The ‘best’ choice depends on your image complexity (hair, transparent objects) and how many images you need to process."
              },
              {
                q: "Will I lose quality when removing a background?",
                a: "The subject quality usually stays the same, but edges can look rough if the tool makes an inaccurate cut. To preserve quality, export as PNG for transparency (or WebP for smaller files) and zoom in to check edges before saving."
              },
              {
                q: "Which format should I use for a transparent background?",
                a: "PNG is the most common format for transparency. WebP also supports transparency and typically produces smaller files for the web. JPG doesn’t support transparency."
              },
              {
                q: "Can I remove background from images on my phone for free?",
                a: "Yes. Most browser-based tools work on mobile, and many mobile apps offer free background removal with limits. If you’re doing a lot of images, a desktop workflow is usually faster and more consistent."
              }
            ].map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Need more image tools?</h2>
              <p className="text-white/80">
                Compress, convert, resize, and optimize images for the web — all in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Browse all tools
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/remove-exif"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
              >
                Remove metadata (EXIF)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
