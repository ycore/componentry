/**
 * HTML to Plain Text Converter for Email
 *
 * Converts HTML email content to well-formatted plain text while preserving
 * structure, links, and readability. Optimized for email clients that prefer
 * or require plain text alternatives.
 */

/**
 * Convert HTML string to plain text with preserved structure
 *
 * This converter:
 * - Preserves heading hierarchy with visual markers (# for h1, ## for h2, etc.)
 * - Converts links to [text](url) format
 * - Formats buttons as [BUTTON TEXT]: url
 * - Maintains paragraph breaks and whitespace
 * - Removes all HTML tags and styling
 * - Wraps lines at 78 characters (email standard)
 *
 * @param html - HTML string to convert
 * @returns Plain text string
 */
export function htmlToPlainText(html: string): string {
  if (!html) {
    return '';
  }

  let text = html;

  // Remove script and style tags entirely
  text = text.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Remove HTML comments
  text = text.replace(/<!--[\s\S]*?-->/g, '');

  // Convert headings with visual hierarchy
  text = text.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n\n# $1\n\n');
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n\n## $1\n\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n\n### $1\n\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n\n#### $1\n\n');
  text = text.replace(/<h5[^>]*>(.*?)<\/h5>/gi, '\n\n##### $1\n\n');
  text = text.replace(/<h6[^>]*>(.*?)<\/h6>/gi, '\n\n###### $1\n\n');

  // Convert links to markdown-style: [text](url)
  text = text.replace(/<a[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, (_match, url, linkText) => {
    // Clean link text from any nested HTML
    const cleanText = linkText.replace(/<[^>]+>/g, '').trim();

    // If link text is same as URL, just show URL
    if (cleanText === url || !cleanText) {
      return url;
    }

    return `${cleanText} (${url})`;
  });

  // Convert buttons to emphasized format with URL
  text = text.replace(/<button[^>]*>(.*?)<\/button>/gi, '\n\n[BUTTON: $1]\n\n');

  // Convert horizontal rules to text dividers
  text = text.replace(/<hr[^>]*>/gi, '\n\n────────────────────────────────────────\n\n');

  // Convert line breaks to newlines
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Convert paragraphs to double newlines
  text = text.replace(/<\/p>/gi, '\n\n');
  text = text.replace(/<p[^>]*>/gi, '');

  // Convert divs to line breaks
  text = text.replace(/<\/div>/gi, '\n');
  text = text.replace(/<div[^>]*>/gi, '');

  // Convert list items
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, '• $1\n');
  text = text.replace(/<\/(ul|ol)>/gi, '\n');
  text = text.replace(/<(ul|ol)[^>]*>/gi, '');

  // Convert table cells to tabs
  text = text.replace(/<\/td>/gi, '\t');
  text = text.replace(/<td[^>]*>/gi, '');
  text = text.replace(/<\/tr>/gi, '\n');
  text = text.replace(/<tr[^>]*>/gi, '');
  text = text.replace(/<\/(table|thead|tbody|tfoot)>/gi, '\n');
  text = text.replace(/<(table|thead|tbody|tfoot)[^>]*>/gi, '');

  // Convert strong/bold to *text*
  text = text.replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/gi, '*$2*');

  // Convert emphasis/italic to _text_
  text = text.replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/gi, '_$2_');

  // Convert code blocks
  text = text.replace(/<pre[^>]*>(.*?)<\/pre>/gis, (_match, code) => {
    const cleanCode = code.replace(/<[^>]+>/g, '');
    return `\n\n\`\`\`\n${cleanCode}\n\`\`\`\n\n`;
  });

  // Convert inline code
  text = text.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');

  // Remove all remaining HTML tags
  text = text.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  text = decodeHTMLEntities(text);

  // Clean up whitespace
  text = text.replace(/\t/g, '    '); // Convert tabs to spaces
  text = text.replace(/\r\n/g, '\n'); // Normalize line endings
  text = text.replace(/\r/g, '\n');
  text = text.replace(/ +/g, ' '); // Multiple spaces to single space
  text = text.replace(/\n\n\n+/g, '\n\n'); // Max 2 consecutive newlines
  text = text.trim();

  // Wrap lines at 78 characters (email standard)
  text = wrapText(text, 78);

  return text;
}

/**
 * Decode common HTML entities to their character equivalents
 *
 * @param text - Text with HTML entities
 * @returns Decoded text
 */
function decodeHTMLEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' ',
    '&mdash;': '—',
    '&ndash;': '–',
    '&hellip;': '...',
    '&copy;': '©',
    '&reg;': '®',
    '&trade;': '™',
    '&bull;': '•',
    '&middot;': '·',
    '&laquo;': '«',
    '&raquo;': '»',
    '&ldquo;': '"',
    '&rdquo;': '"',
    '&lsquo;': "'",
    '&rsquo;': "'",
  };

  let decoded = text;

  // Replace named entities
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }

  // Replace numeric entities (e.g., &#8220; or &#x2022;)
  decoded = decoded.replace(/&#(\d+);/g, (_match, dec) => {
    return String.fromCharCode(Number(dec));
  });

  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (_match, hex) => {
    return String.fromCharCode(Number.parseInt(hex, 16));
  });

  return decoded;
}

/**
 * Wrap text at specified line length while preserving formatting
 *
 * @param text - Text to wrap
 * @param maxLength - Maximum line length (default: 78)
 * @returns Wrapped text
 */
function wrapText(text: string, maxLength = 78): string {
  const lines = text.split('\n');
  const wrappedLines: string[] = [];

  for (const line of lines) {
    // Don't wrap empty lines or lines that are part of code blocks
    if (!line.trim() || line.startsWith('```') || line.startsWith('    ')) {
      wrappedLines.push(line);
      continue;
    }

    // Don't wrap headings
    if (line.startsWith('#')) {
      wrappedLines.push(line);
      continue;
    }

    // Don't wrap list items
    if (line.trim().startsWith('•')) {
      wrappedLines.push(line);
      continue;
    }

    // Wrap long lines at word boundaries
    if (line.length <= maxLength) {
      wrappedLines.push(line);
    } else {
      const words = line.split(' ');
      let currentLine = '';

      for (const word of words) {
        if (currentLine.length + word.length + 1 <= maxLength) {
          currentLine += (currentLine ? ' ' : '') + word;
        } else {
          if (currentLine) {
            wrappedLines.push(currentLine);
          }
          currentLine = word;
        }
      }

      if (currentLine) {
        wrappedLines.push(currentLine);
      }
    }
  }

  return wrappedLines.join('\n');
}

/**
 * Preview text extractor - gets first N characters suitable for email preview
 *
 * @param html - HTML content
 * @param maxLength - Maximum preview length (default: 100)
 * @returns Preview text
 */
export function extractPreviewText(html: string, maxLength = 100): string {
  const plainText = htmlToPlainText(html);

  // Remove heading markers for preview
  const cleaned = plainText.replace(/^#+\s*/gm, '').trim();

  // Get first paragraph or sentence
  const lines = cleaned.split('\n\n');
  const firstContent = lines.find(line => line.trim().length > 0) || '';

  // Truncate to maxLength
  if (firstContent.length <= maxLength) {
    return firstContent;
  }

  // Truncate at word boundary
  const truncated = firstContent.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > maxLength * 0.8) {
    return `${truncated.slice(0, lastSpace)}...`;
  }

  return `${truncated}...`;
}
