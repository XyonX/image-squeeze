# Google Search Console Data

This directory contains organized Google Search Console data for the GetImgTools website.

## Current Data Structure

```
2026-04/                          # April 2026 data
├── performance/                  # Performance reports
│   ├── Pages.csv                - Top performing pages
│   ├── Queries.csv              - Search queries and performance
│   ├── Countries.csv            - Traffic by country
│   ├── Devices.csv              - Traffic by device type
│   ├── Search appearance.csv    - Search appearance metrics
│   └── Chart.csv                - Performance charts data
└── coverage/                     # Coverage reports
    ├── Critical issues.csv      - Critical indexing issues
    ├── Non-critical issues.csv  - Non-critical issues
    ├── Chart.csv                - Coverage charts data
    └── Metadata.csv             - Coverage metadata
```

## Key Insights from Current Data (April 2026)

### Performance Highlights:
- **Total Impressions:** ~54 (very low - site is barely ranking)
- **Total Clicks:** 1 (only from `/bulk-compress`)
- **Average Position:** 67-90 (very poor ranking - page 7+ on Google)

### Top Performing Page:
- `/bulk-compress` - 1 click, 54 impressions, position 84.13
  - This is the BEST performing page but still ranking poorly

### Top Search Queries (All have 0 clicks):
1. "bulk compress images" (10 impressions, position 87.3)
2. "bulk jpg compress" (9 impressions, position 82.89)
3. "compress image bulk" (7 impressions, position 79)
4. "remove exif data" (2 impressions, position 90)
5. Various EXIF-related queries (15 total impressions)

### Critical Issues Found:
- 3 pages with redirects (hurting SEO) - **NOTE:** These are just protocol/prefix variations redirecting to canonical `https://getimgtools.com/`, which is GOOD SEO practice
- Some pages "Discovered - currently not indexed"

## SEO Recommendations Based on This Data

### Immediate Actions:
1. **Optimize `/bulk-compress` page** - Target "bulk compress images" keywords
2. **Create content around "remove exif data"** - 15 impressions already
3. **Improve meta tags** for all tool pages
4. **Add FAQ schema** to top-performing pages

### Long-term Strategy:
1. **Create blog content** for high-impression queries
2. **Improve internal linking** between tools
3. **Monitor monthly progress** using this organized data

## How to Update

1. **Monthly:** Download new GSC data at the beginning of each month
2. **Create new folder:** `analytics/gsc/YYYY-MM/`
3. **Organize files:** Place in appropriate `performance/` or `coverage/` subfolders
4. **Update this README:** Add key insights from the new data

## Analysis Tools

Consider using:
- **Google Sheets/Excel** for data analysis
- **Python pandas** for automated reporting
- **Data visualization tools** to track progress over time

## Git Considerations

- These CSV files are relatively small and should be version controlled
- Consider `.gitignore` patterns if files become very large in the future
- Commit messages should reference the month and key insights