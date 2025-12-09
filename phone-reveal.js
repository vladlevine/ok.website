/**
 * Phone Reveal Functionality
 * Protects phone number from scrapers while maintaining UX
 * - Mobile: Direct call on click (never shows number)
 * - Desktop: Reveals number on click
 */

function revealPhone(button) {
  const phoneNumber = '(929) 445-0603';
  const phoneLink = 'tel:+19294450603';

  // On mobile, just make the call without revealing number
  if (window.innerWidth <= 768) {
    window.location.href = phoneLink;
    return;
  }

  // On desktop, reveal the number
  button.innerHTML = phoneNumber;
  button.href = phoneLink;
  button.style.pointerEvents = 'auto'; // Allow clicking the revealed number
  button.onclick = null; // Remove click handler

  // Add a subtle fade-in effect
  button.style.opacity = '0.7';
  setTimeout(() => {
    button.style.opacity = '1';
  }, 100);
}

// Optional: Auto-initialize on page load if needed
document.addEventListener('DOMContentLoaded', function() {
  // Add hover hint on desktop
  if (window.innerWidth > 768) {
    document.querySelectorAll('.phone-reveal-btn').forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        if (this.innerHTML.includes('Click')) {
          this.style.opacity = '0.8';
        }
      });
      btn.addEventListener('mouseleave', function() {
        if (this.innerHTML.includes('Click')) {
          this.style.opacity = '1';
        }
      });
    });
  }
});
