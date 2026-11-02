// Karaoke Ad Skipper
// Runs inside YouTube's embedded player, only when that player sits on the karaoke site.
// While an ad plays: mute, tell the karaoke page (it shows the "Song Loading" banner),
// and after 10 seconds of the ad, click Skip at random 0.2 to 1 second intervals.
// When the song itself starts: restore sound and tell the page to hide the banner.
(() => {
  'use strict';

  // ---- settings ----
  const KARAOKE_SITES = ['https://ruckusandreasoneli.github.io'];
  const FIRST_CLICK_AFTER_MS = 10000;   // wait this long into each ad before clicking
  const CLICK_MIN_MS = 200;             // random gap between clicks: min
  const CLICK_MAX_MS = 1000;            // random gap between clicks: max
  const AD_END_CONFIRM_MS = 800;        // ad must be gone this long before sound comes back (handles back-to-back ads)
  const FAST_FORWARD_FALLBACK = true;   // if Skip clicks don't take, jump the ad to its end
  const FAST_FORWARD_AFTER_FAILED_MS = 3000;
  const UNSKIPPABLE_FAST_FORWARD_MS = 15000; // no Skip button by this point: fast-forward (if fallback on)

  // ---- only run inside players embedded on the karaoke site ----
  let parentOrigin = '';
  try {
    const ancestors = location.ancestorOrigins && location.ancestorOrigins.length
      ? Array.from(location.ancestorOrigins)
      : (document.referrer ? [new URL(document.referrer).origin] : []);
    parentOrigin = ancestors.find(o => KARAOKE_SITES.includes(o)) || '';
  } catch (e) { /* ignore */ }
  if (!parentOrigin) return;

  const SKIP_SELECTORS = [
    '.ytp-skip-ad-button',
    '.ytp-ad-skip-button',
    '.ytp-ad-skip-button-modern',
    '.ytp-ad-skip-button-slot button',
    '.videoAdUiSkipButton',
    'button[id^="skip-button"]'
  ].join(',');

  const player = () => document.querySelector('.html5-video-player');
  const video = () => document.querySelector('video');
  const adShowing = () => {
    const p = player();
    return !!p && (p.classList.contains('ad-showing') || p.classList.contains('ad-interrupting'));
  };
  const randomGap = () => CLICK_MIN_MS + Math.random() * (CLICK_MAX_MS - CLICK_MIN_MS);
  const tell = (state) => {
    try { window.parent.postMessage({ source: 'karaoke-ad-skipper', state }, parentOrigin); } catch (e) { /* ignore */ }
  };
  const isVisible = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden' && Number(cs.opacity) > 0;
  };

  // Click somewhere inside the Skip button, like a person would
  function clickSkip() {
    const btn = Array.from(document.querySelectorAll(SKIP_SELECTORS)).find(isVisible);
    if (!btn) return false;
    const r = btn.getBoundingClientRect();
    const x = r.left + r.width * (0.3 + Math.random() * 0.4);
    const y = r.top + r.height * (0.3 + Math.random() * 0.4);
    const base = { bubbles: true, cancelable: true, composed: true, view: window, clientX: x, clientY: y, button: 0 };
    const ptr = Object.assign({ pointerId: 1, pointerType: 'mouse', isPrimary: true }, base);
    btn.dispatchEvent(new PointerEvent('pointerover', ptr));
    btn.dispatchEvent(new MouseEvent('mouseover', base));
    btn.dispatchEvent(new PointerEvent('pointerdown', ptr));
    btn.dispatchEvent(new MouseEvent('mousedown', base));
    btn.dispatchEvent(new PointerEvent('pointerup', ptr));
    btn.dispatchEvent(new MouseEvent('mouseup', base));
    btn.dispatchEvent(new MouseEvent('click', base));
    return true;
  }

  function fastForward() {
    const v = video();
    if (v && isFinite(v.duration) && v.duration > 0.5) {
      try { v.currentTime = v.duration - 0.1; } catch (e) { /* ignore */ }
    }
  }

  let inAd = false;
  let adStartedAt = 0;      // when the current ad (this clip) started
  let firstClickAt = 0;     // when we first found and clicked Skip on this clip
  let adSrc = '';           // to notice the next ad in a back-to-back pod
  let goneSince = 0;        // when the ad marker disappeared
  let soundWasMuted = false;

  function tick() {
    let next = 250;
    const v = video();

    if (adShowing()) {
      goneSince = 0;
      if (!inAd) {
        inAd = true;
        soundWasMuted = v ? v.muted : false;
        tell('start');
      }
      const src = v ? (v.currentSrc || v.src || '') : '';
      if (src !== adSrc || !adStartedAt) { adSrc = src; adStartedAt = Date.now(); firstClickAt = 0; }
      if (v && !v.muted) v.muted = true;

      const elapsed = Date.now() - adStartedAt;
      if (elapsed >= FIRST_CLICK_AFTER_MS) {
        if (clickSkip()) {
          if (!firstClickAt) firstClickAt = Date.now();
          if (FAST_FORWARD_FALLBACK && Date.now() - firstClickAt > FAST_FORWARD_AFTER_FAILED_MS) fastForward();
        } else if (FAST_FORWARD_FALLBACK && elapsed > UNSKIPPABLE_FAST_FORWARD_MS) {
          fastForward();
        }
        next = randomGap();
      }
    } else if (inAd) {
      if (!goneSince) goneSince = Date.now();
      if (Date.now() - goneSince >= AD_END_CONFIRM_MS) {
        inAd = false; adStartedAt = 0; firstClickAt = 0; adSrc = ''; goneSince = 0;
        if (v) v.muted = soundWasMuted;
        tell('end');
      }
    }
    setTimeout(tick, next);
  }
  tick();
})();
