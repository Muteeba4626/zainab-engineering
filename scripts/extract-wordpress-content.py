#!/usr/bin/env python3
"""
Final WordPress Content Extractor - Comprehensive Report
"""

import re
import html
import json

def clean_html(text):
    """Remove HTML tags and decode entities"""
    if not text or text in ['', 'N;']:
        return ''
    text = html.unescape(text)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Read SQL file
print("📖 Reading WordPress database backup...")
with open('/home/ahmed/work/zainab-engineering/backup-3.1.2026_10-56-40_zainabengineerin/mysql/zainaben_newdb.sql', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Extract the posts table section
start_idx = content.find("LOCK TABLES `pxtah_posts` WRITE;")
end_idx = content.find("UNLOCK TABLES;", start_idx)

if start_idx == -1 or end_idx == -1:
    print("❌ Could not find posts table")
    exit(1)

posts_section = content[start_idx:end_idx]

# Get all record lines (lines starting with opening paren)
record_lines = []
for line in posts_section.split('\n'):
    stripped = line.strip()
    if stripped.startswith('(') and len(stripped) > 10:
        record_lines.append(stripped)

print(f"✅ Found {len(record_lines)} records in pxtah_posts table\n")

# Parse records more carefully
# SQL format: (ID,author,date,date_gmt,CONTENT,TITLE,excerpt,status,comment_status,ping_status,password,SLUG,...)
def parse_wp_record(record_line):
    """Parse a WordPress post record"""
    # Remove trailing comma or semicolon
    record_line = record_line.rstrip(',').rstrip(';')
    
    # Remove opening and closing parens
    if record_line.startswith('('):
        record_line = record_line[1:]
    if record_line.endswith(')'):
        record_line = record_line[:-1]
    
    # Split by ',' but respect quoted strings
    fields = []
    current = ''
    in_quotes = False
    escape = False
    
    i = 0
    while i < len(record_line):
        char = record_line[i]
        
        if escape:
            current += char
            escape = False
            i += 1
            continue
        
        if char == '\\':
            escape = True
            current += char
            i += 1
            continue
        
        if char == "'" and not escape:
            in_quotes = not in_quotes
            current += char
            i += 1
            continue
        
        if char == ',' and not in_quotes:
            fields.append(current)
            current = ''
            i += 1
            continue
        
        current += char
        i += 1
    
    if current:
        fields.append(current)
    
    if len(fields) < 23:
        return None
    
    def unquote(s):
        s = s.strip()
        if s.startswith("'") and s.endswith("'"):
            s = s[1:-1]
        s = s.replace("\\'", "'").replace('\\"', '"').replace('\\\\', '\\')
        return s
    
    return {
        'ID': unquote(fields[0]),
        'post_author': unquote(fields[1]),
        'post_date': unquote(fields[2]),
        'post_date_gmt': unquote(fields[3]),
        'post_content': unquote(fields[4]),
        'post_title': unquote(fields[5]),
        'post_excerpt': unquote(fields[6]),
        'post_status': unquote(fields[7]),
        'comment_status': unquote(fields[8]),
        'ping_status': unquote(fields[9]),
        'post_password': unquote(fields[10]),
        'post_name': unquote(fields[11]),
        'to_ping': unquote(fields[12]),
        'pinged': unquote(fields[13]),
        'post_modified': unquote(fields[14]),
        'post_modified_gmt': unquote(fields[15]),
        'post_content_filtered': unquote(fields[16]),
        'post_parent': unquote(fields[17]),
        'guid': unquote(fields[18]),
        'menu_order': unquote(fields[19]),
        'post_type': unquote(fields[20]),
        'post_mime_type': unquote(fields[21]),
        'comment_count': unquote(fields[22])
    }

# Parse all records
parsed_records = []
for line in record_lines:
    rec = parse_wp_record(line)
    if rec:
        parsed_records.append(rec)

print(f"✅ Parsed {len(parsed_records)} valid records\n")

# Filter by type and status
pages = [r for r in parsed_records if r['post_type'] == 'page' and r['post_status'] == 'publish']
posts = [r for r in parsed_records if r['post_type'] == 'post' and r['post_status'] == 'publish']
portfolio = [r for r in parsed_records if r['post_type'] == 'portfolio_page' and r['post_status'] == 'publish']
attachments = [r for r in parsed_records if r['post_type'] == 'attachment']

print(f"📄 Published Pages: {len(pages)}")
print(f"📝 Published Posts: {len(posts)}")
print(f"🎨 Portfolio Pages: {len(portfolio)}")
print(f"🖼️  Attachments: {len(attachments)}")
print()

# Generate comprehensive report
print("=" * 100)
print(" " * 35 + "WORDPRESS WEBSITE CONTENT ANALYSIS")
print("=" * 100)
print()
print("Website: Zainab Engineering (deprecated WordPress site)")
print(f"Total Content Items: {len(pages) + len(posts) + len(portfolio)}")
print(f"Total Media Files: {len(attachments)}")
print()

# Detailed Page Analysis
if pages:
    print("=" * 100)
    print("📄 WEBSITE PAGES")
    print("=" * 100)
    print()
    
    for i, page in enumerate(pages, 1):
        title = page['post_title']
        slug = page['post_name']
        content = page['post_content']
        clean_content = clean_html(content)
        
        print(f"{'─' * 100}")
        print(f"PAGE #{i}: {title.upper()}")
        print(f"{'─' * 100}")
        print(f"URL Slug: /{slug}")
        print(f"Last Modified: {page['post_modified']}")
        print(f"Word Count: {len(clean_content.split())}")
        print()
        print("CONTENT:")
        print(clean_content if clean_content else "(No textual content - may be a visual/layout page)")
        print()
        
        # Find images
        images = re.findall(r'https?://[^\s<>"]+?\.(?:jpg|jpeg|png|gif|svg)', content, re.IGNORECASE)
        if images:
            print(f"🖼️  IMAGES IN THIS PAGE: {len(images)}")
            for img in images[:10]:
                print(f"   • {img}")
            if len(images) > 10:
                print(f"   ... and {len(images) - 10} more images")
        print()

# Portfolio Pages
if portfolio:
    print("=" * 100)
    print("🎨 PORTFOLIO / PROJECT PAGES")
    print("=" * 100)
    print()
    
    for i, port in enumerate(portfolio, 1):
        title = port['post_title']
        slug = port['post_name']
        content = port['post_content']
        excerpt = port['post_excerpt']
        clean_content = clean_html(content)
        clean_excerpt = clean_html(excerpt)
        
        print(f"{'─' * 100}")
        print(f"PORTFOLIO #{i}: {title.upper()}")
        print(f"{'─' * 100}")
        print(f"URL Slug: /{slug}")
        print(f"Last Modified: {port['post_modified']}")
        print()
        if clean_excerpt:
            print("EXCERPT:")
            print(clean_excerpt)
            print()
        print("FULL DESCRIPTION:")
        print(clean_content if clean_content else "(No textual content)")
        print()
        
        images = re.findall(r'https?://[^\s<>"]+?\.(?:jpg|jpeg|png|gif|svg)', content, re.IGNORECASE)
        if images:
            print(f"🖼️  IMAGES: {len(images)}")
        print()

# Blog Posts
if posts:
    print("=" * 100)
    print("📝 BLOG POSTS")
    print("=" * 100)
    print()
    
    for i, post in enumerate(posts, 1):
        title = post['post_title']
        content = post['post_content']
        clean_content = clean_html(content)
        
        print(f"POST #{i}: {title}")
        print(f"Date: {post['post_date']}")
        print(f"Content: {clean_content[:500]}...")
        print()

# Media Summary
print("=" * 100)
print("🖼️  MEDIA FILES SUMMARY")
print("=" * 100)
print()
print(f"Total Media Files: {len(attachments)}")

# Count by type
from collections import defaultdict
media_types = defaultdict(int)
for att in attachments:
    mime = att['post_mime_type']
    media_types[mime] += 1

print("\nBreakdown by File Type:")
for mime, count in sorted(media_types.items(), key=lambda x: x[1], reverse=True):
    print(f"  • {mime}: {count} files")

print("\n" + "=" * 100)
print("✅ ANALYSIS COMPLETE")
print("=" * 100)

# Save to JSON
report_data = {
    'summary': {
        'pages': len(pages),
        'posts': len(posts),
        'portfolio': len(portfolio),
        'media': len(attachments)
    },
    'pages': [{'title': p['post_title'], 'slug': p['post_name'], 'content': clean_html(p['post_content'])} for p in pages],
    'portfolio': [{'title': p['post_title'], 'slug': p['post_name'], 'content': clean_html(p['post_content']), 'excerpt': clean_html(p['post_excerpt'])} for p in portfolio],
    'posts': [{'title': p['post_title'], 'content': clean_html(p['post_content'])} for p in posts]
}

with open('/tmp/wordpress-full-report.json', 'w', encoding='utf-8') as f:
    json.dump(report_data, f, indent=2, ensure_ascii=False)

print("\n📊 Detailed JSON report saved to: /tmp/wordpress-full-report.json")
