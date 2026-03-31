#!/usr/bin/env python3
"""
WordPress Backup Content Analyzer
Extracts and analyzes all pages, posts, and content from the backup
"""

import re
import html
import json
from collections import defaultdict

def strip_html(text):
    """Remove HTML tags and decode entities"""
    if not text or text == 'N;':
        return ''
    # Decode HTML entities
    text = html.unescape(text)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def parse_insert_values(insert_statement):
    """Parse INSERT VALUES statement into individual records"""
    # This is a simplified parser - WordPress escapes quotes with backslash
    records = []
    
    # Find all complete records between parentheses
    pattern = r'\(([^)]*(?:\([^)]*\)[^)]*)*)\)(?=,|\;)'
    matches = re.finditer(pattern, insert_statement)
    
    for match in matches:
        record_str = match.group(1)
        # Split by commas, but respect quoted strings
        fields = []
        current = ''
        in_quotes = False
        escape_next = False
        
        for char in record_str:
            if escape_next:
                current += char
                escape_next = False
                continue
            
            if char == '\\':
                escape_next = True
                current += char
                continue
            
            if char == "'" and not escape_next:
                in_quotes = not in_quotes
                current += char
                continue
            
            if char == ',' and not in_quotes:
                fields.append(current.strip())
                current = ''
                continue
            
            current += char
        
        if current:
            fields.append(current.strip())
        
        if len(fields) >= 23:  # pxtah_posts has 23 fields
            records.append(fields)
    
    return records

def extract_quoted_value(field):
    """Extract value from quoted SQL field"""
    if field == 'NULL' or not field:
        return None
    # Remove surrounding quotes
    if field.startswith("'") and field.endswith("'"):
        field = field[1:-1]
    # Unescape
    field = field.replace("\\'", "'").replace("\\\\", "\\")
    return field

# Read the SQL file
print("🔍 Reading WordPress database backup...")
with open('/home/ahmed/work/zainab-engineering/backup-3.1.2026_10-56-40_zainabengineerin/mysql/zainaben_newdb.sql', 'r', encoding='utf-8', errors='ignore') as f:
    sql_content = f.read()

print("📊 Extracting posts data...")

# Find the INSERT INTO pxtah_posts section
posts_match = re.search(r"INSERT INTO `pxtah_posts`[^;]+VALUES (.+?);", sql_content, re.DOTALL)

if not posts_match:
    print("❌ Could not find posts data")
    exit(1)

insert_data = posts_match.group(1)
records = parse_insert_values(insert_data)

print(f"✅ Found {len(records)} total records in pxtah_posts\n")

# Organize by post type
pages = []
posts = []
attachments = []
other = []

column_names = ['ID', 'post_author', 'post_date', 'post_date_gmt', 'post_content', 
                'post_title', 'post_excerpt', 'post_status', 'comment_status', 
                'ping_status', 'post_password', 'post_name', 'to_ping', 'pinged', 
                'post_modified', 'post_modified_gmt', 'post_content_filtered', 
                'post_parent', 'guid', 'menu_order', 'post_type', 'post_mime_type', 
                'comment_count']

for record in records:
    if len(record) != 23:
        continue
    
    post_dict = {}
    for i, col in enumerate(column_names):
        post_dict[col] = extract_quoted_value(record[i])
    
    post_type = post_dict.get('post_type', '')
    post_status = post_dict.get('post_status', '')
    
    if post_type == 'page' and post_status == 'publish':
        pages.append(post_dict)
    elif post_type == 'post' and post_status == 'publish':
        posts.append(post_dict)
    elif post_type == 'attachment':
        attachments.append(post_dict)
    else:
        other.append(post_dict)

print(f"📄 Published Pages: {len(pages)}")
print(f"📝 Published Posts: {len(posts)}")
print(f"🖼️  Attachments: {len(attachments)}")
print(f"📋 Other: {len(other)}\n")

# Create comprehensive report
report = {
    'summary': {
        'total_pages': len(pages),
        'total_posts': len(posts),
        'total_attachments': len(attachments),
        'total_other': len(other)
    },
    'pages': [],
    'posts': [],
    'attachments': []
}

print("=" * 80)
print("📖 WORDPRESS SITE CONTENT ANALYSIS")
print("=" * 80)
print()

# Analyze Pages
if pages:
    print("=" * 80)
    print("📄 PAGES")
    print("=" * 80)
    print()
    
    for i, page in enumerate(pages, 1):
        title = page.get('post_title', 'Untitled')
        slug = page.get('post_name', '')
        content = page.get('post_content', '')
        excerpt = page.get('post_excerpt', '')
        date = page.get('post_date', '')
        
        clean_content = strip_html(content)
        clean_excerpt = strip_html(excerpt)
        
        word_count = len(clean_content.split())
        
        print(f"PAGE {i}: {title}")
        print(f"Slug: {slug}")
        print(f"Date: {date}")
        print(f"Word Count: {word_count}")
        print(f"\nContent Summary:")
        if clean_content:
            # Show first 1000 chars
            print(clean_content[:1000])
            if len(clean_content) > 1000:
                print(f"... ({len(clean_content) - 1000} more characters)")
        else:
            print("(No text content)")
        
        # Check for images in content
        image_urls = re.findall(r'(http[s]?://[^\s<>"]+?\.(?:jpg|jpeg|png|gif|svg))', content, re.IGNORECASE)
        if image_urls:
            print(f"\n🖼️  Images referenced: {len(image_urls)}")
            for img_url in image_urls[:5]:
                print(f"   - {img_url}")
            if len(image_urls) > 5:
                print(f"   ... and {len(image_urls) - 5} more")
        
        print("\n" + "-" * 80 + "\n")
        
        report['pages'].append({
            'title': title,
            'slug': slug,
            'date': date,
            'word_count': word_count,
            'content': clean_content,
            'excerpt': clean_excerpt,
            'images': image_urls
        })

# Analyze Posts
if posts:
    print("=" * 80)
    print("📝 BLOG POSTS")
    print("=" * 80)
    print()
    
    for i, post in enumerate(posts, 1):
        title = post.get('post_title', 'Untitled')
        slug = post.get('post_name', '')
        content = post.get('post_content', '')
        excerpt = post.get('post_excerpt', '')
        date = post.get('post_date', '')
        
        clean_content = strip_html(content)
        clean_excerpt = strip_html(excerpt)
        
        word_count = len(clean_content.split())
        
        print(f"POST {i}: {title}")
        print(f"Slug: {slug}")
        print(f"Date: {date}")
        print(f"Word Count: {word_count}")
        print(f"\nContent Summary:")
        if clean_content:
            print(clean_content[:800])
            if len(clean_content) > 800:
                print(f"... ({len(clean_content) - 800} more characters)")
        else:
            print("(No text content)")
        
        # Check for images
        image_urls = re.findall(r'(http[s]?://[^\s<>"]+?\.(?:jpg|jpeg|png|gif|svg))', content, re.IGNORECASE)
        if image_urls:
            print(f"\n🖼️  Images referenced: {len(image_urls)}")
        
        print("\n" + "-" * 80 + "\n")
        
        report['posts'].append({
            'title': title,
            'slug': slug,
            'date': date,
            'word_count': word_count,
            'content': clean_content,
            'excerpt': clean_excerpt,
            'images': image_urls
        })

# Analyze Attachments/Media
print("=" * 80)
print("🖼️  MEDIA / IMAGES")
print("=" * 80)
print()

image_types = defaultdict(int)
for att in attachments:
    mime_type = att.get('post_mime_type', 'unknown')
    image_types[mime_type] += 1

print(f"Total Media Files: {len(attachments)}")
print("\nBreakdown by Type:")
for mime_type, count in sorted(image_types.items(), key=lambda x: x[1], reverse=True):
    print(f"  {mime_type}: {count}")

print("\nSample Media Files:")
for i, att in enumerate(attachments[:20]):
    title = att.get('post_title', 'Untitled')
    guid = att.get('guid', '')
    print(f"  {i+1}. {title} - {guid}")

if len(attachments) > 20:
    print(f"  ... and {len(attachments) - 20} more files")

# Save report to JSON
with open('/tmp/wordpress-content-report.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print("\n" + "=" * 80)
print("✅ Analysis complete!")
print(f"📄 Full report saved to: /tmp/wordpress-content-report.json")
print("=" * 80)
