# Analytics Data Management

This directory contains analytics data for the GetImgTools website, organized for version control and historical tracking.

## Directory Structure

```
analytics/
├── gsc/                          # Google Search Console data
│   ├── YYYY-MM/                  # Monthly folders (e.g., 2026-04)
│   │   ├── performance/          # Performance reports
│   │   │   ├── Pages.csv
│   │   │   ├── Queries.csv
│   │   │   ├── Countries.csv
│   │   │   ├── Devices.csv
│   │   │   ├── Search appearance.csv
│   │   │   └── Chart.csv
│   │   └── coverage/             # Coverage reports
│   │       ├── Critical issues.csv
│   │       ├── Non-critical issues.csv
│   │       ├── Chart.csv
│   │       └── Metadata.csv
│   └── README.md                 # GSC-specific documentation
└── README.md                     # This file
```

## How to Add New GSC Data

1. **Download data from Google Search Console:**
   - Go to https://search.google.com/search-console
   - Navigate to Performance or Coverage reports
   - Click "Export" → "Download CSV"

2. **Organize the files:**
   - Create a new monthly folder if it doesn't exist: `analytics/gsc/YYYY-MM/`
   - Place performance CSV files in `performance/` subfolder
   - Place coverage CSV files in `coverage/` subfolder

3. **Naming convention:**
   - Keep original filenames from Google Search Console
   - No need to rename files

## Best Practices

- **Monthly updates:** Download and organize data at least once per month
- **Version control:** Commit analytics data to track SEO progress over time
- **Analysis:** Use this data to identify trends and optimize content
- **Backup:** Consider backing up older data to separate archive if storage becomes an issue

## Data Usage

This data is valuable for:
- Tracking SEO performance over time
- Identifying high-performing pages and queries
- Finding technical issues that need fixing
- Measuring the impact of SEO optimizations
- Planning content strategy based on search demand