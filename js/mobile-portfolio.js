/**
 * Mobile Portfolio Enhancement Module
 * Provides Load More, Swipe Gestures, Pinch Zoom, and 2-Column Masonry for mobile devices
 * SEO-friendly with hybrid link/button approach
 */

class MobilePortfolio {
  constructor(gallerySelector, options = {}) {
    this.gallery = document.querySelector(gallerySelector);
    if (!this.gallery) return;

    this.options = {
      itemsPerPage: options.itemsPerPage || 12,
      mobileBreakpoint: options.mobileBreakpoint || 968,
      enableSwipe: options.enableSwipe !== false,
      enableZoom: options.enableZoom !== false,
      captionMode: options.captionMode || 'tap', // 'tap', 'subtle', or 'none'
      ...options
    };

    this.allItems = Array.from(this.gallery.children);
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.allItems.length / this.options.itemsPerPage);
    this.lightboxOpen = false;
    this.currentZoomImage = null;

    this.init();
  }

  init() {
    // Apply masonry classes based on image orientation
    this.applyMasonryClasses();

    // Only activate on mobile
    if (window.innerWidth > this.options.mobileBreakpoint) {
      this.showAllItems();
      return;
    }

    this.setupPagination();
    this.addCaptions();
    this.setupSwipeGestures();
    this.setupZoom();
    this.attachResizeListener();
  }

  applyMasonryClasses() {
    // Auto-detect and apply masonry classes based on image filename patterns
    this.allItems.forEach((item, index) => {
      const img = item.querySelector('img');
      if (!img || !img.src) return;

      const src = img.src.toLowerCase();

      // Check if item already has masonry classes
      const hasMasonryClass = item.classList.contains('gallery-tall') ||
                               item.classList.contains('gallery-wide');

      // Only auto-apply if no masonry classes exist
      if (!hasMasonryClass) {
        if (src.includes('_vertical.jpg') || src.includes('_vertical.png')) {
          // Vertical images span 2 rows
          item.classList.add('gallery-tall');
        } else if (src.includes('_horizontal.jpg') || src.includes('_horizontal.png')) {
          // Occasionally make horizontal images span 2 columns for variety
          // Use a pattern to create visual interest (every 5th horizontal image)
          const horizontalIndex = Math.floor(index / 3);
          if (horizontalIndex % 5 === 0 && index > 0) {
            item.classList.add('gallery-wide');
          }
        }
      }
    });
  }

  setupPagination() {
    // Hide items beyond first page
    this.updateVisibleItems();

    // Create Load More button if needed
    if (this.totalPages > 1) {
      this.createLoadMoreButton();
    }
  }

  updateVisibleItems() {
    const visibleCount = this.currentPage * this.options.itemsPerPage;

    this.allItems.forEach((item, index) => {
      if (index < visibleCount) {
        item.style.display = '';
        item.classList.add('visible');
      } else {
        item.style.display = 'none';
        item.classList.remove('visible');
      }
    });

    // Update Load More button if it exists
    if (this.loadMoreBtn) {
      if (this.currentPage >= this.totalPages) {
        this.loadMoreBtn.style.display = 'none';
      } else {
        this.loadMoreBtn.style.display = 'inline-flex';
        this.updateLoadMoreLink();
      }
    }
  }

  createLoadMoreButton() {
    const container = document.createElement('div');
    container.className = 'load-more-container';
    container.style.cssText = 'text-align: center; margin-top: 48px;';

    // SEO-friendly: Use <a> tag that JS will intercept
    // If JS fails or bot crawls, it navigates to next page
    this.loadMoreBtn = document.createElement('a');
    this.loadMoreBtn.href = this.getPageURL(this.currentPage + 1);
    this.loadMoreBtn.className = 'load-more-btn';
    this.loadMoreBtn.innerHTML = `
      <span>Load More</span>
      <span class="load-more-count">(${this.getRemainingCount()} more)</span>
    `;
    this.loadMoreBtn.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 32px;
      background: #0A0A0A;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    `;

    // Intercept click for smooth JS loading
    this.loadMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.loadMore();
    });

    container.appendChild(this.loadMoreBtn);
    this.gallery.parentElement.appendChild(container);
  }

  loadMore() {
    if (this.currentPage >= this.totalPages) return;

    this.currentPage++;

    // Update URL without page reload (for history)
    if (window.history.pushState) {
      window.history.pushState(null, '', this.getPageURL(this.currentPage));
    }

    // Smooth reveal animation
    const startIndex = (this.currentPage - 1) * this.options.itemsPerPage;
    const endIndex = this.currentPage * this.options.itemsPerPage;

    this.allItems.slice(startIndex, endIndex).forEach((item, index) => {
      setTimeout(() => {
        item.style.display = '';
        item.classList.add('visible');
        item.style.animation = 'fadeInUp 0.4s ease forwards';
      }, index * 50);
    });

    this.updateVisibleItems();
  }

  getPageURL(page) {
    const url = new URL(window.location.href);
    if (page > 1) {
      url.searchParams.set('page', page);
    } else {
      url.searchParams.delete('page');
    }
    return url.toString();
  }

  getRemainingCount() {
    return Math.min(
      this.options.itemsPerPage,
      this.allItems.length - (this.currentPage * this.options.itemsPerPage)
    );
  }

  updateLoadMoreLink() {
    if (!this.loadMoreBtn) return;

    this.loadMoreBtn.href = this.getPageURL(this.currentPage + 1);
    const countSpan = this.loadMoreBtn.querySelector('.load-more-count');
    if (countSpan) {
      countSpan.textContent = `(${this.getRemainingCount()} more)`;
    }
  }

  addCaptions() {
    if (this.options.captionMode === 'none') return;

    this.allItems.forEach(item => {
      const img = item.querySelector('img');
      if (!img || !img.alt) return;

      const caption = document.createElement('div');
      caption.className = 'portfolio-caption';
      caption.textContent = img.alt;

      if (this.options.captionMode === 'tap') {
        caption.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          padding: 16px;
          font-size: 14px;
          line-height: 1.4;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        `;

        item.style.position = 'relative';
        item.addEventListener('click', (e) => {
          if (!this.lightboxOpen) {
            e.preventDefault();
            caption.style.opacity = caption.style.opacity === '1' ? '0' : '1';
          }
        });
      } else if (this.options.captionMode === 'subtle') {
        caption.style.cssText = `
          padding: 8px 0;
          font-size: 13px;
          color: #6B7280;
          line-height: 1.4;
        `;
      }

      item.appendChild(caption);
    });
  }

  setupSwipeGestures() {
    if (!this.options.enableSwipe) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    this.gallery.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    this.gallery.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      this.handleSwipe(touchStartX, touchEndX, touchStartY, touchEndY);
    }, { passive: true });
  }

  handleSwipe(startX, endX, startY, endY) {
    const diffX = Math.abs(startX - endX);
    const diffY = Math.abs(startY - endY);

    // Only handle horizontal swipes (diffX > diffY)
    if (diffX < 50 || diffX < diffY) return;

    // Swipe left = load more (if available)
    if (startX > endX && this.currentPage < this.totalPages) {
      this.loadMore();
    }
  }

  setupZoom() {
    if (!this.options.enableZoom) return;

    this.allItems.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;

      // Double tap to zoom
      let lastTap = 0;
      item.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 300 && tapLength > 0) {
          e.preventDefault();
          this.openZoomLightbox(img);
        }
        lastTap = currentTime;
      });

      // Click to zoom on mobile
      item.addEventListener('click', (e) => {
        if (window.innerWidth <= this.options.mobileBreakpoint) {
          e.preventDefault();
          this.openZoomLightbox(img);
        }
      });
    });
  }

  openZoomLightbox(img) {
    this.lightboxOpen = true;

    // Create lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'zoom-lightbox';
    lightbox.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.2s ease;
    `;

    const zoomImg = document.createElement('img');
    zoomImg.src = img.src;
    zoomImg.alt = img.alt;
    zoomImg.style.cssText = `
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      touch-action: pinch-zoom;
      transform-origin: center center;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      width: 44px;
      height: 44px;
      border: none;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 32px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    `;

    lightbox.appendChild(zoomImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Pinch to zoom functionality
    this.setupPinchZoom(zoomImg);

    // Close handlers
    const closeLightbox = () => {
      lightbox.style.animation = 'fadeOut 0.2s ease';
      setTimeout(() => {
        document.body.removeChild(lightbox);
        this.lightboxOpen = false;
      }, 200);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  setupPinchZoom(img) {
    let scale = 1;
    let initialDistance = 0;

    img.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        initialDistance = this.getDistance(e.touches[0], e.touches[1]);
      }
    }, { passive: true });

    img.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
        const scaleChange = currentDistance / initialDistance;
        scale = Math.min(Math.max(1, scale * scaleChange), 4);
        img.style.transform = `scale(${scale})`;
        initialDistance = currentDistance;
      }
    });

    img.addEventListener('touchend', () => {
      if (scale < 1.2) {
        scale = 1;
        img.style.transform = 'scale(1)';
      }
    }, { passive: true });
  }

  getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  showAllItems() {
    this.allItems.forEach(item => {
      item.style.display = '';
      item.classList.add('visible');
    });
  }

  attachResizeListener() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth > this.options.mobileBreakpoint) {
          this.showAllItems();
          if (this.loadMoreBtn) {
            this.loadMoreBtn.parentElement.style.display = 'none';
          }
        } else {
          this.updateVisibleItems();
          if (this.loadMoreBtn) {
            this.loadMoreBtn.parentElement.style.display = 'block';
          }
        }
      }, 250);
    });
  }

  // Static method to handle URL page parameter on load
  static initFromURL(gallerySelector, options) {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;

    const portfolio = new MobilePortfolio(gallerySelector, options);

    // Load to specified page
    if (page > 1 && portfolio.gallery) {
      portfolio.currentPage = Math.min(page, portfolio.totalPages);
      portfolio.updateVisibleItems();
    }

    return portfolio;
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .load-more-btn:hover {
    background: #1A1A1A !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .load-more-btn:active {
    transform: translateY(0);
  }

  .service-gallery-item {
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  @media (max-width: 968px) {
    .service-gallery-item:active {
      transform: scale(0.98);
    }
  }
`;
document.head.appendChild(style);

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MobilePortfolio;
}
