import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Zap, Shield, TrendingUp, Smartphone, Globe, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Ultimate Image Optimization Guide for Websites (2025) | GetImgTools",
  description: "Complete guide to optimizing images for websites. Learn techniques to improve page speed, SEO rankings, and user experience with practical examples and tools.",
  keywords: [
    "image optimization",
    "website performance",
    "page speed",
    "SEO optimization",
    "webp conversion",
    "lazy loading",
    "responsive images",
    "core web vitals",
    "image compression",
    "web performance"
  ],
  openGraph: {
    title: "Ultimate Image Optimization Guide for Websites (2025)",
    description: "Complete guide to optimizing images for websites. Learn techniques to improve page speed, SEO rankings, and user experience.",
    type: "article",
    publishedTime: "2025-04-15T00:00:00.000Z",
    authors: ["GetImgTools Team"],
  },
};

export default function UltimateImageOptimizationGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          Performance Guide
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Ultimate Image Optimization Guide for Websites (2025)
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Learn how to optimize images for faster loading, better SEO, and improved user experience. Practical techniques with real-world examples.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          <span>📅 Published: April 15, 2025</span>
          <span>⏱️ 12 min read</span>
          <span>🏷️ Performance, SEO, Web Development</span>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "⚡",
            title: "Faster Loading",
            description: "Reduce page load time by 50-80%"
          },
          {
            icon: "📈",
            title: "Better SEO",
            description: "Improve Core Web Vitals scores"
          },
          {
            icon: "📱",
            title: "Mobile Friendly",
            description: "Optimize for all devices"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Table of Contents */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold text-slate-900 mb-4">What You'll Learn</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Choosing the right image format",
            "Optimal compression settings",
            "Responsive image techniques",
            "Lazy loading implementation",
            "CDN and caching strategies",
            "SEO optimization tips",
            "Tools and automation",
            "Performance monitoring"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: Image Formats */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Choose the Right Image Format</h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Format Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Format</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Best For</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Compression</th>
                    <th className="text-left py-3 px-4 font-medium text-slate-900">Browser Support</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      format: "WebP",
                      bestFor: "Photos, graphics, transparency",
                      compression: "30-50% smaller than JPG",
                      support: "96% (All modern browsers)"
                    },
                    {
                      format: "AVIF",
                      bestFor: "High-quality photos",
                      compression: "50% smaller than JPG",
                      support: "85% (Chrome, Firefox, Edge)"
                    },
                    {
                      format: "JPG/JPEG",
                      bestFor: "Photographs, complex images",
                      compression: "Lossy, good quality",
                      support: "100% (All browsers)"
                    },
                    {
                      format: "PNG",
                      bestFor: "Logos, graphics with transparency",
                      compression: "Lossless, larger files",
                      support: "100% (All browsers)"
                    },
                    {
                      format: "SVG",
                      bestFor: "Icons, logos, simple graphics",
                      compression: "Vector, infinitely scalable",
                      support: "100% (All browsers)"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{row.format}</td>
                      <td className="py-3 px-4 text-slate-700">{row.bestFor}</td>
                      <td className="py-3 px-4 text-slate-700">{row.compression}</td>
                      <td className="py-3 px-4 text-slate-700">{row.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">💡 Recommendation</h4>
              <p className="text-blue-800 text-sm">
                Use WebP as your primary format with JPG fallback. For maximum compatibility:
              </p>
              <div className="mt-2 bg-white/50 p-3 rounded text-xs font-mono text-blue-900 overflow-x-auto">
                <pre>{`<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Compression Guidelines */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">2. Optimal Compression Settings</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              type: "Product Photos",
              quality: "85-90%",
              size: "1200-1500px width",
              format: "WebP",
              tip: "Maintain sharp details for zoom functionality"
            },
            {
              type: "Blog Images",
              quality: "75-85%",
              size: "800-1200px width",
              format: "WebP",
              tip: "Balance quality with fast page loading"
            },
            {
              type: "Hero Images",
              quality: "80-85%",
              size: "1920px width",
              format: "WebP",
              tip: "Use progressive loading for large images"
            },
            {
              type: "Thumbnails",
              quality: "70-75%",
              size: "300-400px width",
              format: "WebP",
              tip: "Aggressive compression acceptable"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 mb-3">{item.type}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Quality:</span>
                  <span className="text-sm font-medium text-slate-900">{item.quality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Size:</span>
                  <span className="text-sm font-medium text-slate-900">{item.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Format:</span>
                  <span className="text-sm font-medium text-slate-900">{item.format}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-600">💡 {item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Responsive Images */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">3. Responsive Image Implementation</h2>
        
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Modern srcset Syntax</h3>
          
          <div className="space-y-4">
            <div className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono">
{`<img
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w,
    image-1600.jpg 1600w
  "
  sizes="
    (max-width: 600px) 400px,
    (max-width: 1200px) 800px,
    1200px
  "
  alt="Responsive image example"
  loading="lazy"
/>`}
              </pre>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Breakpoints",
                  items: ["400px", "800px", "1200px", "1600px"]
                },
                {
                  title: "Device Targets",
                  items: ["Mobile", "Tablet", "Desktop", "Retina"]
                },
                {
                  title: "File Size Savings",
                  items: ["60% smaller", "Faster loading", "Better UX"]
                }
              ].map((col, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-3">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-slate-700 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Tools & Automation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">4. Tools & Automation</h2>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Online Tools",
                tools: [
                  { name: "GetImgTools", purpose: "Compression & conversion" },
                  { name: "Squoosh", purpose: "Advanced compression" },
                  { name: "TinyPNG", purpose: "PNG/JPG compression" }
                ]
              },
              {
                category: "Build Tools",
                tools: [
                  { name: "ImageOptim", purpose: "Mac automation" },
                  { name: "Sharp", purpose: "Node.js processing" },
                  { name: "Webpack Plugin", purpose: "Build-time optimization" }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-4">{section.category}</h3>
                <div className="space-y-3">
                  {section.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">{tool.name}</span>
                      <span className="text-sm text-slate-600">{tool.purpose}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h4 className="font-bold text-amber-900 mb-2">🚀 Automation Workflow</h4>
            <ol className="space-y-2 text-amber-800 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>Upload original images to CDN/storage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>Automatically generate WebP versions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>Create responsive sizes (400w, 800w, 1200w)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span>Implement lazy loading with blur placeholders</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Performance Checklist */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Image Optimization Checklist</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              task: "Convert to WebP/AVIF",
              priority: "High",
              impact: "30-50% size reduction"
            },
            {
              task: "Implement responsive images",
              priority: "High",
              impact: "60% bandwidth savings"
            },
            {
              task: "Add lazy loading",
              priority: "Medium",
              impact: "Faster initial load"
            },
            {
              task: "Optimize alt text",
              priority: "Medium",
              impact: "SEO improvement"
            },
            {
              task: "Use CDN delivery",
              priority: "High",
              impact: "Global fast delivery"
            },
            {
              task: "Monitor Core Web Vitals",
              priority: "Medium",
              impact: "Performance tracking"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-slate-900">{item.task}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.priority === "High" 
                    ? "bg-red-100 text-red-800" 
                    : "bg-amber-100 text-amber-800"
                }`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-sm text-slate-600">Impact: {item.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Takeaways</h2>

        <div className="space-y-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h3 className="font-bold text-emerald-900 mb-2">Start with format + compression</h3>
            <p className="text-sm text-emerald-800">
              Switching to modern formats (WebP/AVIF) and applying sensible compression is the fastest win.
              It reduces bandwidth, improves Core Web Vitals, and speeds up every page.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">Use responsive images everywhere</h3>
            <p className="text-sm text-blue-800">
              Serve smaller images to smaller screens using <code className="font-mono">srcset</code> / <code className="font-mono">sizes</code>.
              This avoids shipping desktop-sized images to mobile users.
            </p>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-bold text-amber-900 mb-2">Automate the workflow</h3>
            <p className="text-sm text-amber-800">
              Use build tools (Sharp/webpack) or a CDN pipeline to generate multiple sizes + formats automatically.
              Consistent automation beats manual optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Tools */}
      <div className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Recommended Free Tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Compress images online",
              description: "Reduce file sizes for JPG/PNG/WebP without noticeable quality loss.",
              href: "/tools",
              cta: "Explore tools"
            },
            {
              title: "Convert to WebP",
              description: "Convert JPG/PNG to WebP for smaller, faster images on the web.",
              href: "/convert-to-webp",
              cta: "Convert to WebP"
            },
            {
              title: "Resize images",
              description: "Create properly sized images for responsive breakpoints and thumbnails.",
              href: "/resize-image",
              cta: "Resize images"
            },
            {
              title: "Image metadata remover",
              description: "Remove EXIF/GPS metadata to improve privacy and slightly reduce size.",
              href: "/remove-exif",
              cta: "Remove EXIF"
            }
          ].map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group block border border-slate-200 hover:border-blue-300 rounded-xl p-5 transition-colors"
            >
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 mb-2">{tool.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{tool.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                {tool.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">FAQ: Image Optimization</h2>
          <div className="space-y-5">
            {[
              {
                q: "What is the best image format for websites?",
                a: "WebP is a great default for most websites because it's widely supported and produces much smaller files than JPG/PNG. Use AVIF when you can (best compression), but keep WebP/JPG fallbacks for compatibility."
              },
              {
                q: "How much should I compress images for the web?",
                a: "A common sweet spot is 75–85% quality for photos (or equivalent WebP/AVIF settings). Always validate visually at 100% zoom, and aim for the smallest file size that still looks good."
              },
              {
                q: "Do responsive images really matter?",
                a: "Yes. Responsive images can save 40–70% bandwidth by sending smaller assets to phones and tablets. It's one of the highest impact changes after format conversion."
              },
              {
                q: "Should I lazy load all images?",
                a: "Lazy load below-the-fold images. Avoid lazy loading the hero/LCP image, or it can hurt your Core Web Vitals score."
              }
            ].map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: "JPG vs PNG vs WebP: Which Format to Use",
              description: "A practical guide to choosing the right image format every time.",
              readTime: "6 min read",
              href: "/blog/jpg-vs-png-vs-webp-which-format"
            },
            {
              title: "How to Compress Images for Web Performance",
              description: "Step-by-step compression tips to improve loading speed.",
              readTime: "7 min read",
              href: "/blog/how-to-compress-images-for-web-performance"
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Optimize your images in minutes</h2>
              <p className="text-white/80">
                Use GetImgTools to compress, convert, resize, and improve performance without installing anything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Explore all tools
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/compress-webp"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
              >
                Compress WebP
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
