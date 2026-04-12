import { Tool, tools } from "@/lib/tools";
import { CheckCircle, Info, Lightbulb, AlertCircle, Download, Shield, Zap, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ToolPageContentProps {
  tool: Tool;
  children: React.ReactNode;
}

export function ToolPageContent({ tool, children }: ToolPageContentProps) {
  // Get related tools from same category
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);
  const getToolCategoryDescription = (category: string) => {
    switch (category) {
      case "compress":
        return "Image compression tools reduce file size while maintaining visual quality, essential for web performance and storage optimization.";
      case "convert":
        return "Format conversion tools transform images between different file formats, each with unique advantages for specific use cases.";
      case "edit":
        return "Image editing tools allow you to modify dimensions, orientation, and apply effects to enhance or transform your images.";
      case "utility":
        return "Utility tools provide specialized functions like metadata removal or encoding for specific technical requirements.";
      default:
        return "A powerful image processing tool designed to help you optimize and transform your images.";
    }
  };

  const getFormatBenefits = (formats: string[]) => {
    const benefits: Record<string, string> = {
      ".jpg": "Best for photographs and complex images with smooth gradients",
      ".jpeg": "Same as JPG - ideal for photos with millions of colors",
      ".png": "Perfect for graphics, logos, and images requiring transparency",
      ".webp": "Modern format offering 30-50% better compression than JPG/PNG",
      ".svg": "Vector format ideal for logos and graphics that need to scale",
      ".gif": "Supports animation and simple graphics with limited colors",
      ".bmp": "Uncompressed format preserving maximum quality but large file size"
    };

    return formats.map(format => benefits[format] || `${format.replace('.', '').toUpperCase()} format`).join(", ");
  };

  const getCommonUseCases = (toolId: string) => {
    const useCases: Record<string, string[]> = {
      "compress-jpg": [
        "Optimizing photos for website loading speed",
        "Reducing email attachment sizes",
        "Preparing images for social media posts",
        "Creating mobile-friendly image galleries",
        "Saving storage space on devices and servers"
      ],
      "compress-png": [
        "Optimizing website graphics and logos",
        "Reducing UI/interface element file sizes",
        "Preparing images with transparency for web",
        "Creating efficient app assets",
        "Compressing screenshots and diagrams"
      ],
      "compress-webp": [
        "Modern website image optimization",
        "Progressive web app asset preparation",
        "Mobile app image optimization",
        "E-commerce product image compression",
        "Blog and content platform image optimization"
      ],
      "bulk-compress": [
        "Processing entire photo albums at once",
        "Optimizing website image libraries",
        "Preparing images for client delivery",
        "Batch processing social media content",
        "Compressing product catalogs for e-commerce"
      ],
      "resize-image": [
        "Creating responsive images for different screen sizes",
        "Preparing social media profile and cover photos",
        "Optimizing images for specific display requirements",
        "Reducing dimensions for faster loading",
        "Creating thumbnails and preview images"
      ],
      "convert-to-webp": [
        "Modernizing website image formats",
        "Improving Core Web Vitals scores",
        "Reducing bandwidth usage",
        "Preparing images for progressive web apps",
        "Future-proofing image assets"
      ],
      "convert-to-jpg": [
        "Converting graphics for print materials",
        "Preparing images for legacy systems",
        "Creating universal compatibility",
        "Removing transparency when not needed",
        "Reducing file size of PNG graphics"
      ],
      "convert-to-png": [
        "Adding transparency to images",
        "Creating logos and graphics with clean edges",
        "Preserving text and line art quality",
        "Preparing images for graphic design work",
        "Creating assets for applications"
      ],
      "reduce-image-size": [
        "Meeting specific file size requirements",
        "Optimizing for email attachment limits",
        "Preparing images for forms with size restrictions",
        "Creating optimized assets for slow connections",
        "Meeting platform-specific size limits"
      ],
      "crop-image": [
        "Creating profile pictures and avatars",
        "Preparing images for social media posts",
        "Removing unwanted edges or backgrounds",
        "Focusing on specific parts of an image",
        "Creating consistent aspect ratios for galleries"
      ],
      "rotate-image": [
        "Correcting orientation from camera imports",
        "Creating mirrored or flipped effects",
        "Preparing images for different layouts",
        "Fixing incorrectly oriented scans",
        "Creating artistic transformations"
      ],
      "add-watermark": [
        "Protecting copyright on digital photos",
        "Branding images for social media",
        "Adding logos to product images",
        "Creating professional portfolio pieces",
        "Marking images for specific use cases"
      ],
      "add-text": [
        "Creating memes and social media content",
        "Adding captions to photos",
        "Creating promotional graphics",
        "Adding labels to diagrams",
        "Creating personalized images"
      ],
      "image-filters": [
        "Enhancing photo quality and appeal",
        "Creating consistent visual styles",
        "Correcting exposure and color issues",
        "Applying artistic effects",
        "Preparing images for specific moods or themes"
      ],
      "remove-exif": [
        "Protecting privacy by removing location data",
        "Reducing file size by stripping metadata",
        "Preparing images for anonymous sharing",
        "Meeting privacy compliance requirements",
        "Cleaning images for professional use"
      ],
      "image-to-base64": [
        "Embedding images directly in HTML/CSS",
        "Creating data URLs for web applications",
        "Reducing HTTP requests for small images",
        "Creating self-contained HTML documents",
        "Embedding images in email templates"
      ],
      "svg-to-png": [
        "Converting vector graphics for web use",
        "Creating high-resolution logos",
        "Preparing SVG files for print",
        "Converting for compatibility with older systems",
        "Creating static versions of vector graphics"
      ]
    };

    return useCases[toolId] || [
      "Improving website performance",
      "Optimizing images for specific platforms",
      "Reducing storage requirements",
      "Enhancing visual presentation",
      "Meeting technical requirements"
    ];
  };

  const getBestPractices = (toolId: string) => {
    const practices: Record<string, string[]> = {
      "compress-jpg": [
        "Use 60-80% quality for web images (balance of size and quality)",
        "Always strip EXIF data for privacy and smaller files",
        "Resize images to maximum display dimensions before compressing",
        "Use WebP format when possible for even better compression",
        "Test different quality settings to find the optimal balance"
      ],
      "compress-png": [
        "Use lossless compression for graphics with text or sharp edges",
        "Try lossy compression for photographs and complex images",
        "Reduce color palette when possible (256 colors often sufficient)",
        "Remove unnecessary metadata and color profiles",
        "Consider converting to WebP for even better compression"
      ],
      "compress-webp": [
        "Use lossless mode for graphics and lossy for photos",
        "Experiment with quality settings (75-85% is often optimal)",
        "Enable alpha channel only when transparency is needed",
        "Compare file sizes with original to ensure meaningful savings",
        "Provide fallback JPG/PNG for older browsers when needed"
      ]
    };

    return practices[toolId] || [
      "Always preview results before finalizing",
      "Keep original files as backups",
      "Test on different devices and screens",
      "Consider the specific use case when choosing settings",
      "Balance quality with file size based on your needs"
    ];
  };

  return (
    <div className="space-y-8">
      {/* Hero Header with Tool Feature */}
      <header className="space-y-4">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">
              {tool.name}
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              {tool.description} All processing happens 100% privately in your browser.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-20 h-20 flex items-center justify-center"
              style={{ backgroundColor: `${tool.color}15` }}
            >
              <tool.icon className="w-10 h-10" style={{ color: tool.color }} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Tool Component - Featured Card */}
      <section className="bg-white border border-slate-300 p-6">
        <div className="mb-4">
          <span className="inline-block bg-slate-900 text-white text-xs font-bold px-3 py-1 mb-3">
            TOOL INTERFACE
          </span>
          <h2 className="text-xl font-bold text-slate-900">
            {tool.name} Tool
          </h2>
        </div>
        {children}
      </section>

      {/* Key Features - Highlighted Cards */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Why Use Our {tool.name} Tool?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border border-slate-300 p-4 hover:shadow-md hover:border-slate-400 transition-all">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">100% Private</p>
                <p className="text-xs text-slate-600 mt-1">Images never leave your device. All processing in browser.</p>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 p-4 hover:shadow-md hover:border-slate-400 transition-all">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Lightning Fast</p>
                <p className="text-xs text-slate-600 mt-1">Process in milliseconds. No uploads or waiting.</p>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 p-4 hover:shadow-md hover:border-slate-400 transition-all">
            <div className="flex items-start gap-3">
              <Download className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">No Signup</p>
                <p className="text-xs text-slate-600 mt-1">Use immediately. No account or email needed.</p>
              </div>
            </div>
          </div>
          <div className="border border-slate-300 p-4 hover:shadow-md hover:border-slate-400 transition-all">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-sm">Batch Ready</p>
                <p className="text-xs text-slate-600 mt-1">Process multiple images at once.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 border-t border-b border-slate-200 py-6 px-0">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          How {tool.name} Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-3">1</div>
            <h3 className="font-bold text-slate-900 mb-2">Upload Your Image</h3>
            <p className="text-sm text-slate-500">
              Drag & drop, paste from clipboard, or browse to select your {tool.acceptedFormats.map(f => f.replace('.', '').toUpperCase()).join(', ')} image{tool.acceptedFormats.length > 1 ? 's' : ''}.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-3">2</div>
            <h3 className="font-bold text-slate-900 mb-2">Adjust Settings</h3>
            <p className="text-sm text-slate-500">
              Use our intuitive controls to customize the {tool.name.toLowerCase()} process according to your specific needs.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-bold text-lg flex items-center justify-center mx-auto mb-3">✓</div>
            <h3 className="font-bold text-slate-900 mb-2">Download Result</h3>
            <p className="text-sm text-slate-500">
              Get your processed image instantly. For multiple images, download all as a ZIP file.
            </p>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Common Use Cases
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {getCommonUseCases(tool.id).map((useCase, index) => (
            <div key={index} className="flex items-start gap-3 p-3 border border-slate-300 hover:shadow-sm transition-all">
              <CheckCircle className="w-4 h-4 text-slate-700 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700">{useCase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-blue-500" />
          Best Practices & Tips
        </h2>
        
        <div className="space-y-4">
          {getBestPractices(tool.id).map((practice, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <p className="text-slate-700">{practice}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">
            <strong>Pro Tip:</strong> Always keep original files as backups. While our tools are designed to be safe and reliable, 
            having originals ensures you can reprocess if needed or if requirements change.
          </p>
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Technical Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Supported Formats</h3>
            <div className="space-y-2">
              {tool.acceptedFormats.map((format, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-slate-700">
                    <code className="bg-slate-100 px-2 py-1 rounded text-sm">{format}</code>
                    <span className="text-slate-500 text-sm ml-2">
                      {format === '.jpg' || format === '.jpeg' ? 'Photographs & complex images' :
                       format === '.png' ? 'Graphics with transparency' :
                       format === '.webp' ? 'Modern web-optimized format' :
                       format === '.svg' ? 'Vector graphics' :
                       format === '.gif' ? 'Animated images' :
                       format === '.bmp' ? 'Uncompressed bitmaps' : 'Image format'}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Processing Technology</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>100% client-side processing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Web Workers for parallel processing</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Canvas API for image manipulation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Modern JavaScript & WebAssembly</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="bg-slate-50 border-t border-b border-slate-200 py-6 px-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Related Tools
            </h2>
            <Link href="/" className="text-xs font-bold text-slate-600 hover:text-slate-900">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {relatedTools.map((relatedTool) => (
              <Link 
                key={relatedTool.id} 
                href={relatedTool.route} 
                className="border border-slate-300 p-4 hover:shadow-md hover:border-slate-400 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-2"
                    style={{ backgroundColor: `${relatedTool.color}15` }}
                  >
                    <relatedTool.icon className="w-5 h-5" style={{ color: relatedTool.color }} />
                  </div>
                  <span className="text-xs font-bold text-slate-900">{relatedTool.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Preview */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Quick FAQ
        </h2>
        <div className="space-y-3">
          <a href="#" className="flex gap-4 p-3 border border-slate-300 hover:shadow-md hover:border-slate-400 transition-all group">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <span className="text-xs font-bold text-slate-600">?</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-sm group-hover:text-slate-700">Is my data safe?</p>
              <p className="text-xs text-slate-600 mt-0.5">100% processing in your browser. Images never uploaded.</p>
            </div>
            <span className="text-slate-400 group-hover:text-slate-600">→</span>
          </a>
          <a href="#" className="flex gap-4 p-3 border border-slate-300 hover:shadow-md hover:border-slate-400 transition-all group">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <span className="text-xs font-bold text-slate-600">?</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-sm group-hover:text-slate-700">File size limits?</p>
              <p className="text-xs text-slate-600 mt-0.5">Process up to 50MB per image. No daily limits.</p>
            </div>
            <span className="text-slate-400 group-hover:text-slate-600">→</span>
          </a>
          <a href="#" className="flex gap-4 p-3 border border-slate-300 hover:shadow-md hover:border-slate-400 transition-all group">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <span className="text-xs font-bold text-slate-600">?</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-sm group-hover:text-slate-700">Need an account?</p>
              <p className="text-xs text-slate-600 mt-0.5">No signup required. Use for free immediately.</p>
            </div>
            <span className="text-slate-400 group-hover:text-slate-600">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
       
