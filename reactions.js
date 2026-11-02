// Ruckus & Reason karaoke: custom reaction emojis (original artwork, 100x100 SVG)
(function () {
  var O = 'stroke="#2b1530" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"';
  function svg(body) { return '<svg viewBox="0 0 100 100" aria-hidden="true" style="overflow:visible"><g ' + O + '>' + body + '</g></svg>'; }
  function heart(x, y, s, fill) {
    return '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 -3 C0 -8 -8 -9 -8 -2 C-8 4 0 8 0 11 C0 8 8 4 8 -2 C8 -9 0 -8 0 -3 Z" fill="' + fill + '" stroke-width="' + (3.5 / s).toFixed(2) + '"/>';
  }

  window.KQ_REACTIONS = [
    { id: 'drunk', label: 'Drunk & Hyped', svg: svg(
      '<g transform="rotate(-12 44 54)">' +
        '<circle cx="44" cy="54" r="33" fill="#ffd23f"/>' +
        '<ellipse cx="26" cy="64" rx="7" ry="4.5" fill="#ff7aa8" stroke="none" opacity=".85"/>' +
        '<ellipse cx="62" cy="64" rx="7" ry="4.5" fill="#ff7aa8" stroke="none" opacity=".85"/>' +
        '<path d="M28 46 a5.5 5.5 0 1 1 5.5 5.5 a3 3 0 1 1 -3 -3" fill="none" stroke-width="3"/>' +
        '<path d="M51 46 a5.5 5.5 0 1 1 5.5 5.5 a3 3 0 1 1 -3 -3" fill="none" stroke-width="3"/>' +
        '<path d="M23 36 q6 -7 13 -2 M50 34 q7 -5 13 2" fill="none"/>' +
        '<path d="M27 63 Q44 90 63 62 Z" fill="#7a1430"/>' +
        '<path d="M36 73 q9 9 18 0 q-9 -4 -18 0 z" fill="#ff7aa8" stroke="none"/>' +
      '</g>' +
      '<g transform="rotate(16 82 62)">' +
        '<rect x="71" y="52" width="20" height="28" rx="3" fill="#ffb52e"/>' +
        '<path d="M91 58 h5 a6 6 0 0 1 0 14 h-5" fill="none"/>' +
        '<path d="M77 58 v16 M85 58 v16" stroke="#d27a0a" stroke-width="2.5"/>' +
        '<path d="M68 53 q2 -8 9 -5 q4 -7 11 -1 q7 -2 6 6 z" fill="#fff"/>' +
      '</g>' +
      '<circle cx="90" cy="34" r="3.5" fill="#fff"/><circle cx="96" cy="24" r="2.2" fill="#fff" stroke-width="2.5"/>' +
      '<path d="M8 18 v8 M4 22 h8 M18 6 v6 M15 9 h6" stroke="#ffd23f" stroke-width="3"/>'
    ) },

    { id: 'omg', label: 'OMG', svg: svg(
      '<circle cx="50" cy="52" r="35" fill="#ffd23f"/>' +
      '<ellipse cx="37" cy="44" rx="8.5" ry="11" fill="#fff"/><ellipse cx="63" cy="44" rx="8.5" ry="11" fill="#fff"/>' +
      '<circle cx="37" cy="46" r="3.6" fill="#2b1530" stroke="none"/><circle cx="63" cy="46" r="3.6" fill="#2b1530" stroke="none"/>' +
      '<path d="M27 27 q10 -7 18 0 M55 27 q8 -7 18 0" fill="none"/>' +
      '<ellipse cx="50" cy="71" rx="8" ry="11" fill="#7a1430"/>' +
      '<path d="M6 66 q-2 -18 10 -20 q9 -1 10 9 l2 18 q-7 11 -17 4 z" fill="#ffc13a"/>' +
      '<path d="M94 66 q2 -18 -10 -20 q-9 -1 -10 9 l-2 18 q7 11 17 4 z" fill="#ffc13a"/>' +
      '<path d="M10 56 l7 2 M9 63 l8 1 M90 56 l-7 2 M91 63 l-8 1" fill="none" stroke-width="2.5"/>' +
      '<path d="M12 18 l6 6 M22 8 l3 8 M88 18 l-6 6 M78 8 l-3 8" stroke="#ff2d95" fill="none"/>'
    ) },

    { id: 'mindblown', label: 'Mind Blown', svg: svg(
      '<path d="M50 2 L58 20 L76 8 L72 28 L94 26 L79 42 L21 42 L6 26 L28 28 L24 8 L42 20 Z" fill="#ff7a2e"/>' +
      '<path d="M50 14 L56 27 L68 21 L64 33 L77 35 L67 44 L33 44 L23 35 L36 33 L32 21 L44 27 Z" fill="#ffd23f" stroke="none"/>' +
      '<path d="M18 50 L26 43 L33 50 L41 42 L49 50 L57 42 L64 50 L72 43 L82 50 L82 62 A32 32 0 0 1 18 62 Z" fill="#ffd23f"/>' +
      '<path d="M78 4 q6 -5 11 1 q6 0 4 7 q-4 6 -10 2 q-7 1 -5 -10 z" fill="#ff9ec4"/>' +
      '<path d="M83 6 q2 3 0 5" fill="none" stroke-width="2"/>' +
      '<circle cx="37" cy="60" r="7" fill="#fff"/><circle cx="63" cy="60" r="7" fill="#fff"/>' +
      '<circle cx="39" cy="61" r="2.4" fill="#2b1530" stroke="none"/><circle cx="61" cy="59" r="2.4" fill="#2b1530" stroke="none"/>' +
      '<ellipse cx="50" cy="78" rx="6" ry="5" fill="#7a1430"/>' +
      '<path d="M10 52 h-6 M90 52 h6 M14 40 l-5 -3 M86 40 l5 -3" fill="none"/>'
    ) },

    { id: 'lovetoot', label: 'Love Toot', svg: svg(
      '<path d="M66 60 q18 -8 11 -28" fill="none" stroke-width="9"/>' +
      '<path d="M66 60 q18 -8 11 -28" fill="none" stroke="#ffad5c" stroke-width="3"/>' +
      '<path d="M32 76 v10 M44 78 v9 M55 78 v9 M64 75 v10" stroke-width="7"/>' +
      '<path d="M32 76 v10 M44 78 v9 M55 78 v9 M64 75 v10" stroke="#ffad5c" stroke-width="2.5"/>' +
      '<ellipse cx="46" cy="64" rx="24" ry="17" fill="#ffad5c"/>' +
      '<path d="M44 50 q3 7 0 12 M54 50 q3 7 0 12" fill="none" stroke="#e5781f" stroke-width="3"/>' +
      '<path d="M12 40 L12 22 L24 31 Z" fill="#ffad5c"/><path d="M28 30 L40 23 L40 40 Z" fill="#ffad5c"/>' +
      '<path d="M15 34 L15 27 L20 31 Z M32 31 L37 28 L37 35 Z" fill="#ff9ec4" stroke="none"/>' +
      '<circle cx="26" cy="46" r="16" fill="#ffad5c"/>' +
      '<path d="M17 45 q3.5 -4 7 0 M28 45 q3.5 -4 7 0" fill="none" stroke-width="3"/>' +
      '<ellipse cx="16" cy="51" rx="4" ry="2.6" fill="#ff7aa8" stroke="none"/><ellipse cx="36" cy="51" rx="4" ry="2.6" fill="#ff7aa8" stroke="none"/>' +
      '<path d="M24 50 l2 2 l2 -2 z" fill="#ff7aa8" stroke-width="2"/>' +
      '<path d="M22 54 q2 3 4 0 q2 3 4 0" fill="none" stroke-width="2.5"/>' +
      '<path d="M68 70 q4 -7 10 -3 q6 -3 9 3 q4 4 -1 8 q-3 5 -10 2 q-8 1 -8 -6 z" fill="#ffe4f0" stroke-width="2.5"/>' +
      heart(88, 58, 1.4, '#ff2d95') + heart(96, 33, 1.0, '#ff4fa3') + heart(80, 15, 0.75, '#ff7aa8')
    ) },

    { id: 'micdrop', label: 'Mic Drop', svg: svg(
      '<rect x="22" y="4" width="36" height="17" rx="8.5" fill="#ffc78a"/>' +
      '<rect x="23" y="14" width="7.5" height="16" rx="3.75" fill="#ffc78a"/><rect x="31.5" y="15" width="7.5" height="18" rx="3.75" fill="#ffc78a"/>' +
      '<rect x="40" y="15" width="7.5" height="17" rx="3.75" fill="#ffc78a"/><rect x="48.5" y="14" width="7.5" height="14" rx="3.75" fill="#ffc78a"/>' +
      '<rect x="55" y="6" width="15" height="7.5" rx="3.75" fill="#ffc78a" transform="rotate(28 55 6)"/>' +
      '<path d="M36 40 l3 7 M46 38 l3 7 M56 38 l2 6" fill="none" stroke="#ff2d95"/>' +
      '<g transform="rotate(32 60 66)">' +
        '<rect x="55" y="58" width="11" height="34" rx="4.5" fill="#3b3b4f"/>' +
        '<rect x="54" y="57" width="13" height="5" rx="2" fill="#8a93a3"/>' +
        '<circle cx="60.5" cy="49" r="11.5" fill="#c9cfd9"/>' +
        '<path d="M51 45 h19 M50 50 h21 M52 55 h17 M57 38 v22 M64 38 v22" fill="none" stroke="#8a93a3" stroke-width="2"/>' +
      '</g>' +
      '<path d="M18 92 l8 -6 M14 82 h9 M86 94 l-6 -6 M92 84 h-8" fill="none" stroke="#ffd23f"/>' +
      '<path d="M8 96 h84" fill="none" stroke-width="3"/>'
    ) },

    { id: 'cringe', label: 'Cringe', svg: svg(
      '<circle cx="50" cy="52" r="35" fill="#c9f07a"/>' +
      '<path d="M27 34 l13 5 M73 34 l-13 5" fill="none"/>' +
      '<path d="M29 43 l10 5 l-10 5 M71 43 l-10 5 l10 5" fill="none"/>' +
      '<rect x="27" y="62" width="46" height="15" rx="5" fill="#fff"/>' +
      '<path d="M27 69.5 h46 M38.5 62 v15 M50 62 v15 M61.5 62 v15" fill="none" stroke-width="2.5"/>' +
      '<path d="M82 18 q9 12 0 17 q-9 -5 0 -17 z" fill="#5ec8ff"/>' +
      '<path d="M7 40 l-5 4 M8 54 h-6 M93 48 l5 4 M92 62 h6" fill="none"/>'
    ) },

    { id: 'dead', label: "I'm Dead", svg: svg(
      '<ellipse cx="50" cy="6" rx="17" ry="4.5" fill="none" stroke="#ffd23f" stroke-width="3.5"/>' +
      '<path d="M50 13 C26 13 14 30 16 50 C17 61 24 67 28 69 L28 81 Q50 92 72 81 L72 69 C76 67 83 61 84 50 C86 30 74 13 50 13 Z" fill="#f4efe6"/>' +
      '<path d="M27 46 q10 -11 19 0 q-10 7 -19 0 z" fill="#2b1530"/><path d="M54 46 q10 -11 19 0 q-10 7 -19 0 z" fill="#2b1530"/>' +
      '<path d="M22 52 q-7 11 0 15 q7 -4 0 -15 z" fill="#5ec8ff"/><path d="M78 52 q-7 11 0 15 q7 -4 0 -15 z" fill="#5ec8ff"/>' +
      '<path d="M47 58 l3 -6 l3 6 z" fill="#2b1530"/>' +
      '<path d="M33 65 Q50 84 67 65 Z" fill="#2b1530"/>' +
      '<path d="M38 68 v5 M44 69 v8 M50 69 v9 M56 69 v8 M62 68 v5" stroke="#f4efe6" stroke-width="2.5"/>' +
      '<path d="M6 30 l6 4 M4 42 h7 M94 30 l-6 4 M96 42 h-7" fill="none" stroke="#ff2d95"/>'
    ) },

    { id: 'encore', label: 'Encore!', svg: svg(
      '<circle cx="50" cy="36" r="30" fill="#ffd23f" stroke="none" opacity=".28"/>' +
      '<path d="M50 6 C63 22 71 33 67 47 C64 58 36 58 33 47 C29 35 39 24 50 6 Z" fill="#ff7a2e"/>' +
      '<path d="M50 23 C57 31 61 40 58 48 C56 54 44 54 42 48 C39 40 44 31 50 23 Z" fill="#ffd23f" stroke="none"/>' +
      '<rect x="37" y="56" width="26" height="11" rx="2" fill="#c9cfd9"/>' +
      '<circle cx="59" cy="58" r="4.5" fill="#8a93a3"/>' +
      '<rect x="33" y="65" width="34" height="32" rx="6" fill="#ff2d95"/>' +
      '<path d="M40 72 v18" stroke="#ff9ec4" stroke-width="3.5"/>' +
      '<path d="M16 22 v10 M11 27 h10 M84 14 v10 M79 19 h10 M86 46 v6 M83 49 h6" fill="none" stroke="#ffd23f"/>'
    ) },

    { id: 'boo', label: 'Boo!', svg: svg(
      '<path d="M2 42 h20 M6 54 h18 M2 66 h20" fill="none" stroke="#c9cfd9"/>' +
      '<circle cx="60" cy="56" r="30" fill="#ff3b3b"/>' +
      '<ellipse cx="48" cy="42" rx="7" ry="4" fill="#ff9e9e" stroke="none" transform="rotate(-25 48 42)"/>' +
      '<path d="M60 27 l-11 -7 l8 9 l-3 -13 l7 11 l6 -11 l-1 13 l8 -9 l-11 7 z" fill="#3ccf6b"/>' +
      '<circle cx="51" cy="54" r="6" fill="#fff"/><circle cx="68" cy="52" r="7" fill="#fff"/>' +
      '<circle cx="49" cy="56" r="2.4" fill="#2b1530" stroke="none"/><circle cx="71" cy="49" r="2.6" fill="#2b1530" stroke="none"/>' +
      '<path d="M51 69 q9 7 18 0" fill="none"/>' +
      '<path d="M59 72 q1 8 6 6 q2 -3 0 -6" fill="#ff7aa8" stroke-width="2.5"/>' +
      '<circle cx="95" cy="38" r="3" fill="#ff3b3b" stroke-width="2.5"/><circle cx="96" cy="74" r="2.4" fill="#ff3b3b" stroke-width="2"/>'
    ) },

    { id: 'taco', label: 'Taco Shake', svg: svg(
      '<path d="M18 64 q-10 -6 -10 -20" fill="none"/><path d="M82 64 q10 -6 10 -20" fill="none"/>' +
      '<ellipse cx="8" cy="36" rx="6.5" ry="8.5" fill="#ff2d95"/><path d="M8 45 v6" fill="none"/>' +
      '<ellipse cx="92" cy="36" rx="6.5" ry="8.5" fill="#2ee6ff"/><path d="M92 45 v6" fill="none"/>' +
      '<path d="M40 86 l-5 10 M60 86 l5 10" fill="none"/>' +
      '<path d="M13 52 q6 -11 12 -3 q6 -11 12 -3 q6 -11 12 -3 q6 -11 12 -3 q6 -11 12 -3 q6 -10 14 -1 z" fill="#5fd068"/>' +
      '<circle cx="26" cy="44" r="4" fill="#ff3b3b" stroke-width="2.5"/><circle cx="52" cy="42" r="4" fill="#ff3b3b" stroke-width="2.5"/><circle cx="74" cy="44" r="4" fill="#ff3b3b" stroke-width="2.5"/>' +
      '<path d="M12 52 A38 38 0 0 0 88 52 Z" fill="#ffc94a"/>' +
      '<path d="M24 60 h3 M70 74 h3 M36 80 h3 M64 60 h3" stroke="#d99a1f" stroke-width="3"/>' +
      '<circle cx="41" cy="64" r="3.6" fill="#2b1530" stroke="none"/><circle cx="59" cy="64" r="3.6" fill="#2b1530" stroke="none"/>' +
      '<path d="M44 71 q6 6 12 0" fill="none"/>' +
      '<ellipse cx="34" cy="70" rx="4" ry="2.4" fill="#ff7aa8" stroke="none"/><ellipse cx="66" cy="70" rx="4" ry="2.4" fill="#ff7aa8" stroke="none"/>' +
      '<path d="M2 24 l4 -4 M98 24 l-4 -4 M1 50 l-0 0" fill="none" stroke="#ffd23f"/>'
    ) }
  ];
})();
