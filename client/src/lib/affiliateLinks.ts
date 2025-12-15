/**
 * Affiliate Link Injection Utility
 * 
 * This utility injects WagerNetwork tracking URLs via JavaScript click handlers
 * on buttons, ensuring Google's crawler cannot see affiliate links in the HTML.
 * 
 * Compliance Strategy:
 * - No <a href> tags with affiliate URLs in HTML
 * - Buttons with click event listeners only
 * - User-initiated navigation (not auto-triggered)
 * - Google cannot follow or discover affiliate URLs during crawl
 */

// WagerNetwork tracking URL
const AFFILIATE_URL = "https://promotions.betonline.ag/best-online-casino?btag=ubUlKh_Oaw6AaGdneVkaxWNd7ZgqdRLk&affid=114233";

/**
 * Initialize affiliate link injection
 * Call this function when the page loads to attach click handlers to buttons
 */
export function initAffiliateLinks() {
  // Use setTimeout to ensure React has finished rendering
  setTimeout(() => {
    attachClickHandlers();
  }, 100);
  
  // Also re-attach on route changes (for SPA navigation)
  const observer = new MutationObserver(() => {
    attachClickHandlers();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * Attach click handlers to all affiliate buttons
 */
function attachClickHandlers() {
  const affiliateButtons = document.querySelectorAll('button.affiliate-cta, .affiliate-cta');
  
  affiliateButtons.forEach((button) => {
    // Check if handler already attached
    if (button.getAttribute('data-affiliate-ready') === 'true') {
      return;
    }
    
    // Mark as ready to avoid duplicate handlers
    button.setAttribute('data-affiliate-ready', 'true');
    
    // Attach click handler
    button.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = AFFILIATE_URL;
    });
  });
  
  console.log(`✅ Attached click handlers to ${affiliateButtons.length} affiliate buttons`);
}
