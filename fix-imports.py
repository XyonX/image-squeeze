#!/usr/bin/env python3
"""
Script to fix import statements in tool pages.
The update script generated incorrect client component names.
"""

import os
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).parent

# Tool pages to fix with their correct client component names
TOOL_FIXES = {
    "add-text": "AddTextToImagesClient",
    "add-watermark": "WatermarkImagesClient",
    "convert-to-jpg": "ConvertToJPGClient",
    "convert-to-png": "ConvertToPNGClient",
    "convert-to-webp": "ConvertToWebPClient",
    # These should be correct already:
    "resize-image": "ResizeImageClient",
    "reduce-image-size": "ReduceImageSizeClient",
    "crop-image": "CropImageClient",
    "rotate-image": "RotateImageClient",
    "image-filters": "ImageFiltersClient",
    "remove-exif": "RemoveExifClient",
    "image-to-base64": "ImageToBase64Client",
    "svg-to-png": "SvgToPngClient",
    "bulk-compress": "BulkCompressClient",
    "compress-jpg": "CompressJPGClient",
    "compress-png": "CompressPNGClient",
    "compress-webp": "CompressWebPClient",
}

def fix_tool_page(tool_id: str, correct_client_name: str):
    """Fix import statement in a single tool page."""
    page_path = BASE_DIR / "src" / "app" / tool_id / "page.tsx"
    
    if not page_path.exists():
        print(f"⚠️  Warning: Page not found: {page_path}")
        return False
    
    # Read the file
    with open(page_path, 'r') as f:
        content = f.read()
    
    # Generate the wrong client name that was likely used
    # The script used: AddTextClient, AddWatermarkClient, ConvertToJpgClient, etc.
    wrong_client_name = ''.join(word.capitalize() for word in tool_id.split('-')) + "Client"
    
    # Fix the import
    if wrong_client_name in content:
        content = content.replace(wrong_client_name, correct_client_name)
        print(f"✅ Fixed: {tool_id} - {wrong_client_name} → {correct_client_name}")
    else:
        # Check if it's already correct
        if correct_client_name in content:
            print(f"✓ Already correct: {tool_id}")
            return True
        else:
            print(f"⚠️  Could not find import to fix in {tool_id}")
            return False
    
    # Write the fixed content
    with open(page_path, 'w') as f:
        f.write(content)
    
    return True

def main():
    print("🔄 Fixing import statements in tool pages...")
    print("=" * 60)
    
    fixed_count = 0
    total_count = len(TOOL_FIXES)
    
    for tool_id, correct_client_name in TOOL_FIXES.items():
        print(f"\n📝 Processing: {tool_id}")
        if fix_tool_page(tool_id, correct_client_name):
            fixed_count += 1
    
    print("\n" + "=" * 60)
    print(f"📊 Summary: Fixed {fixed_count}/{total_count} tool pages")
    
    if fixed_count == total_count:
        print("🎉 All tool pages fixed successfully!")
    else:
        print(f"⚠️  Some pages may not have been fixed. Check warnings above.")
    
    print("\n📋 Next steps:")
    print("1. Run the build again: npm run build")
    print("2. If build succeeds, deploy: npm run deploy")
    print("3. Test the live site after deployment")

if __name__ == "__main__":
    main()