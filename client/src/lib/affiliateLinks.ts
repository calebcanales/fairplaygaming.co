/**
 * Centralized Affiliate Link Management
 * 
 * This utility hides WagerNetwork tracking URLs from Google's HTML crawler
 * by injecting them via JavaScript after page load.
 * 
 * Usage:
 * 1. Add class "affiliate-link" to any <a> tag
 * 2. Call initAffiliateLinks() on page load
 * 3. Links will automatically get the tracking URL injected
 */

// WagerNetwork tracking URL
const AFFILIATE_URL = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233";

/**
 * Initialize affiliate link injection
 * Call this function when the page loads to inject tracking URLs
 */
export function initAffiliateLinks() {
  // Use setTimeout to ensure React has finished rendering
  setTimeout(() => {
    injectLinks();
  }, 100);
  
  // Also re-inject on route changes (for SPA navigation)
  const observer = new MutationObserver(() => {
    injectLinks();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * Inject affiliate tracking URLs into all marked links
 */
function injectLinks() {
  // Find all links with the affiliate-link class
  const affiliateLinks = document.querySelectorAll('a.affiliate-link');
  
  affiliateLinks.forEach((link) => {
    // Set the href to the tracking URL
    (link as HTMLAnchorElement).href = AFFILIATE_URL;
    
    // Ensure link opens in new tab for better tracking
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
  
  console.log(`✅ Injected ${affiliateLinks.length} affiliate links`);
}

/**
 * Get the affiliate URL directly (for programmatic use)
 */
export function getAffiliateUrl(): string {
  return AFFILIATE_URL;
}

/**
 * Create an affiliate link element programmatically
 */
export function createAffiliateLink(text: string, className?: string): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = AFFILIATE_URL;
  link.textContent = text;
  link.className = className || 'affiliate-link';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}
