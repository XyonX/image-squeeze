#!/usr/bin/env python3
"""
Script to update all tool pages with rich content component.
This script will update the metadata and add ToolPageContent wrapper to all tool pages.
"""

import os
import re
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).parent

# Tool pages to update (excluding already updated ones)
TOOL_PAGES = [
    "resize-image",
    "convert-to-webp",
    "convert-to-jpg",
    "convert-to-png",
    "reduce-image-size",
    "crop-image",
    "rotate-image",
    "add-watermark",
    "add-text",
    "image-filters",
    "remove-exif",
    "image-to-base64",
    "svg-to-png",
    "bulk-compress",
]

# Template for updated page content
PAGE_TEMPLATE = '''import type {{ Metadata }} from "next";
import {{ {client_component} }} from "./{client_component}";
import {{ ToolPageContent }} from "@/components/ui/ToolPageContent";
import {{ tools }} from "@/lib/tools";

export const metadata: Metadata = {{
	title: "{title}",
	description:
		"{description}",
	keywords: [
		{keywords}
	],
	openGraph: {{
		title: "{og_title}",
		description: "{og_description}",
	}},
}};

export default function {page_component}() {{
	const tool = tools.find(t => t.id === "{tool_id}");
	
	if (!tool) {{
		return <{client_component} />;
	}}

	return (
		<ToolPageContent tool={{tool}}>
			<{client_component} />
		</ToolPageContent>
	);
}}
'''

# Metadata for each tool
TOOL_METADATA = {
    "resize-image": {
        "title": "Resize Image Online — Free & Private | Image Resizer Tool",
        "description": "Free online image resizer tool. Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"resize image"',
            '"resize image online"',
            '"image resizer"',
            '"resize photo online free"',
            '"image size changer"',
            '"photo resizer"',
            '"social media image sizes"',
            '"free image tools"'
        ],
        "og_title": "Resize Image Online — Free & Private Image Resizer Tool",
        "og_description": "Resize images by percentage or exact dimensions with social media presets. 100% private browser-based processing.",
    },
    "convert-to-webp": {
        "title": "Convert to WebP Online — Free & Private | JPG/PNG to WebP",
        "description": "Free online image converter tool. Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"convert to webp"',
            '"jpg to webp"',
            '"png to webp"',
            '"webp converter"',
            '"image converter"',
            '"modern image format"',
            '"web performance"',
            '"free image tools"'
        ],
        "og_title": "Convert to WebP Online — Free & Private Image Converter",
        "og_description": "Convert JPG, PNG images to WebP format for 30-50% smaller file sizes. 100% private browser-based processing.",
    },
    "convert-to-jpg": {
        "title": "Convert to JPG Online — Free & Private | PNG/WebP to JPG",
        "description": "Free online image converter tool. Convert PNG, WebP, and other image formats to JPG format. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"convert to jpg"',
            '"png to jpg"',
            '"webp to jpg"',
            '"jpg converter"',
            '"image converter"',
            '"photo converter"',
            '"universal format"',
            '"free image tools"'
        ],
        "og_title": "Convert to JPG Online — Free & Private Image Converter",
        "og_description": "Convert PNG, WebP, and other image formats to JPG format. 100% private browser-based processing.",
    },
    "convert-to-png": {
        "title": "Convert to PNG Online — Free & Private | JPG/WebP to PNG",
        "description": "Free online image converter tool. Convert JPG, WebP images to PNG format with transparency support. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"convert to png"',
            '"jpg to png"',
            '"webp to png"',
            '"png converter"',
            '"image converter"',
            '"transparent images"',
            '"graphics format"',
            '"free image tools"'
        ],
        "og_title": "Convert to PNG Online — Free & Private Image Converter",
        "og_description": "Convert JPG, WebP images to PNG format with transparency support. 100% private browser-based processing.",
    },
    "reduce-image-size": {
        "title": "Reduce Image Size Online — Free & Private | Target Size Compressor",
        "description": "Free online image size reducer tool. Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"reduce image size"',
            '"compress to size"',
            '"target size compressor"',
            '"image size reducer"',
            '"file size optimizer"',
            '"specific size compression"',
            '"email attachment size"',
            '"free image tools"'
        ],
        "og_title": "Reduce Image Size Online — Free & Private Target Size Compressor",
        "og_description": "Compress images to specific file sizes — 100KB, 200KB, 500KB, or custom targets. 100% private browser-based processing.",
    },
    "crop-image": {
        "title": "Crop Image Online — Free & Private | Image Cropper Tool",
        "description": "Free online image cropper tool. Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"crop image"',
            '"crop image online"',
            '"image cropper"',
            '"photo cropper"',
            '"aspect ratio cropper"',
            '"social media crop"',
            '"profile picture cropper"',
            '"free image tools"'
        ],
        "og_title": "Crop Image Online — Free & Private Image Cropper Tool",
        "og_description": "Crop images with custom or preset aspect ratios including social media presets. 100% private browser-based processing.",
    },
    "rotate-image": {
        "title": "Rotate Image Online — Free & Private | Image Rotator Tool",
        "description": "Free online image rotator tool. Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"rotate image"',
            '"rotate image online"',
            '"image rotator"',
            '"photo rotator"',
            '"flip image"',
            '"image orientation"',
            '"correct photo rotation"',
            '"free image tools"'
        ],
        "og_title": "Rotate Image Online — Free & Private Image Rotator Tool",
        "og_description": "Rotate images 90°, 180°, 270° or flip horizontally/vertically. 100% private browser-based processing.",
    },
    "add-watermark": {
        "title": "Add Watermark Online — Free & Private | Watermark Tool",
        "description": "Free online watermark tool. Add text or logo watermark to images with customizable position, size, and opacity. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"add watermark"',
            '"watermark image"',
            '"photo watermark"',
            '"logo watermark"',
            '"copyright protection"',
            '"brand images"',
            '"image protection"',
            '"free image tools"'
        ],
        "og_title": "Add Watermark Online — Free & Private Watermark Tool",
        "og_description": "Add text or logo watermark to images with customizable position, size, and opacity. 100% private browser-based processing.",
    },
    "add-text": {
        "title": "Add Text to Images Online — Free & Private | Text on Photos",
        "description": "Free online text adder tool. Add custom text to images with multiple fonts, colors, and positioning options. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"add text to image"',
            '"text on photos"',
            '"image text editor"',
            '"photo caption"',
            '"meme maker"',
            '"text overlay"',
            '"custom text on images"',
            '"free image tools"'
        ],
        "og_title": "Add Text to Images Online — Free & Private Text Tool",
        "og_description": "Add custom text to images with multiple fonts, colors, and positioning options. 100% private browser-based processing.",
    },
    "image-filters": {
        "title": "Image Filters Online — Free & Private | Photo Effects Tool",
        "description": "Free online image filters tool. Apply filters, adjust brightness, contrast, and add effects to images. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"image filters"',
            '"photo filters"',
            '"image effects"',
            '"photo editor"',
            '"brightness contrast"',
            '"image adjustments"',
            '"photo enhancement"',
            '"free image tools"'
        ],
        "og_title": "Image Filters Online — Free & Private Photo Effects Tool",
        "og_description": "Apply filters, adjust brightness, contrast, and add effects to images. 100% private browser-based processing.",
    },
    "remove-exif": {
        "title": "Remove EXIF Data Online — Free & Private | Metadata Remover",
        "description": "Free online EXIF data remover tool. Strip metadata, GPS location, camera info from images for privacy. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"remove exif"',
            '"exif data remover"',
            '"strip metadata"',
            '"photo privacy"',
            '"gps removal"',
            '"camera info removal"',
            '"image privacy tool"',
            '"free image tools"'
        ],
        "og_title": "Remove EXIF Data Online — Free & Private Metadata Remover",
        "og_description": "Strip metadata, GPS location, camera info from images for privacy. 100% private browser-based processing.",
    },
    "image-to-base64": {
        "title": "Image to Base64 Online — Free & Private | Base64 Converter",
        "description": "Free online Base64 converter tool. Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"image to base64"',
            '"base64 converter"',
            '"image encoder"',
            '"data url"',
            '"html image embedding"',
            '"css background image"',
            '"inline images"',
            '"free image tools"'
        ],
        "og_title": "Image to Base64 Online — Free & Private Base64 Converter",
        "og_description": "Convert any image to Base64 encoded string for embedding in HTML/CSS. 100% private browser-based processing.",
    },
    "svg-to-png": {
        "title": "SVG to PNG Online — Free & Private | Vector to Raster Converter",
        "description": "Free online SVG to PNG converter tool. Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"svg to png"',
            '"svg converter"',
            '"vector to raster"',
            '"png converter"',
            '"logo converter"',
            '"graphics conversion"',
            '"high resolution conversion"',
            '"free image tools"'
        ],
        "og_title": "SVG to PNG Online — Free & Private Vector to Raster Converter",
        "og_description": "Convert SVG vector files to PNG raster images at any resolution. 100% private browser-based processing.",
    },
    "bulk-compress": {
        "title": "Bulk Compress Images Online — Free & Private | Batch Compressor",
        "description": "Free online bulk image compressor tool. Compress up to 50 images at once supporting JPG, PNG, and WebP formats. 100% private browser-based processing. No signup required.",
        "keywords": [
            '"bulk compress"',
            '"batch compressor"',
            '"compress multiple images"',
            '"mass image compression"',
            '"bulk image optimizer"',
            '"batch processing"',
            '"multiple file compression"',
            '"free image tools"'
        ],
        "og_title": "Bulk Compress Images Online — Free & Private Batch Compressor",
        "og_description": "Compress up to 50 images at once supporting JPG, PNG, and WebP formats. 100% private browser-based processing.",
    },
}

def update_tool_page(tool_id: str):
    """Update a single tool page with rich content."""
    page_path = BASE_DIR / "src" / "app" / tool_id / "page.tsx"
    
    if not page_path.exists():
        print(f"⚠️  Warning: Page not found: {page_path}")
        return False
    
    # Get client component name (capitalized version of tool-id)
    client_component = ''.join(word.capitalize() for word in tool_id.split('-')) + "Client"
    
    # Get page component name (capitalized version of tool-id)
    page_component = ''.join(word.capitalize() for word in tool_id.split('-')) + "Page"
    
    # Get metadata
    metadata = TOOL_METADATA.get(tool_id)
    if not metadata:
        print(f"⚠️  Warning: No metadata found for {tool_id}")
        return False
    
    # Format keywords
    keywords_str = ",\n\t\t".join(metadata["keywords"])
    
    # Generate new content
    new_content = PAGE_TEMPLATE.format(
        client_component=client_component,
        page_component=page_component,
        tool_id=tool_id,
        title=metadata["title"],
        description=metadata["description"],
        keywords=keywords_str,
        og_title=metadata["og_title"],
        og_description=metadata["og_description"],
    )
    
    # Backup original file
    backup_path = page_path.with_suffix('.tsx.backup')
    if not backup_path.exists():
        page_path.rename(backup_path)
        print(f"📁 Created backup: {backup_path}")
    
    # Write new content
    page_path.write_text(new_content)
    print(f"✅ Updated: {page_path}")
    return True

def main():
    print("🔄 Updating tool pages with rich content component...")
    print("=" * 60)
    
    updated_count = 0
    total_count = len(TOOL_PAGES)
    
    for tool_id in TOOL_PAGES:
        print(f"\n📝 Processing: {tool_id}")
        if update_tool_page(tool_id):
            updated_count += 1
    
    print("\n" + "=" * 60)
    print(f"📊 Summary: Updated {updated_count}/{total_count} tool pages")
    
    if updated_count == total_count:
        print("🎉 All tool pages updated successfully!")
    else:
        print(f"⚠️  Some pages may not have been updated. Check warnings above.")
    
    print("\n📋 Next steps:")
    print("1. Review the updated pages")
    print("2. Run the development server to test: npm run dev")
    print("3. Check that all pages load correctly")
    print("4. Verify the rich content appears on each tool page")

if __name__ == "__main__":
    main()