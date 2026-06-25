/**
 * OrchestrateXR Design System — Tailwind theme
 * =============================================
 * The canonical brand, derived from the source of truth (orchestratexr.com).
 * Drop this `extend` block into a project's tailwind.config.js, or copy the
 * pieces you need. Token names are SEMANTIC (roles), not raw scales.
 *
 * See DESIGN_SYSTEM.md for usage guidance.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6600',   // OrchestrateXR orange — the one energetic accent
          tint: '#E9B796',      // soft peach fill
          wash: '#F2ECE9',      // warm cream section background
        },
        ink: '#231B15',         // body text / headings — warm near-black (never #000)
        muted: '#6D4F3B',       // secondary text, captions, meta
        surface: '#FFFFFF',     // page background, cards
        tint: '#F8F7F7',        // alternating sections, code, inset panels
        border: {
          light: '#E3DDD9',     // hairlines, input borders
          dark: '#664E3D',      // emphasis borders on warm fills
        },
        deep: '#452F21',        // dark sections, footer
      },

      fontFamily: {
        // Mona Sans variable font, four width axes. Body/UI = `sans`.
        sans: ['Mona Sans', 'sans-serif'],
        expanded: ['Mona Sans Expanded', 'sans-serif'],   // large display headings
        condensed: ['Mona Sans Condensed', 'sans-serif'], // dense UI
        narrow: ['Mona Sans Narrow', 'sans-serif'],
        mono: ['monospace'],
      },

      fontWeight: {
        regular: '425',     // Mona Sans's body weight
        medium: '500',
        semibold: '600',    // headings
        bold: '700',
        black: '900',       // display
      },

      // Fluid type scale (min -> max via clamp).
      fontSize: {
        caption: 'clamp(0.825rem, 0.825rem + ((1vw - 0.2rem) * 0.213), 0.95rem)',
        small:   'clamp(0.9rem, 0.9rem + ((1vw - 0.2rem) * 0.255), 1.05rem)',
        body:    'clamp(1rem, 1rem + ((1vw - 0.2rem) * 0.281), 1.165rem)',
        h3:      'clamp(1.2rem, 1.2rem + ((1vw - 0.2rem) * 0.766), 1.65rem)',
        h2:      'clamp(1.5rem, 1.5rem + ((1vw - 0.2rem) * 2.128), 2.75rem)',
        h1:      'clamp(1.875rem, 1.875rem + ((1vw - 0.2rem) * 2.766), 3.5rem)',
        display: 'clamp(2.25rem, 2.25rem + ((1vw - 0.2rem) * 3.639), 4.3875rem)',
      },

      lineHeight: {
        none: '1', tight: '1.1', snug: '1.2', body: '1.5', relaxed: '1.625', loose: '2',
      },

      // Fluid spacing rhythm (named, on top of Tailwind's default scale).
      spacing: {
        'block-gap':  'clamp(1.5rem, 4vw, 2rem)',
        section:      'clamp(2rem, 5vw, 3rem)',
        'section-lg': 'clamp(3rem, 7vw, 5rem)',
        hero:         'clamp(4rem, 9vw, 7rem)',
      },

      borderRadius: {
        DEFAULT: '5px',   // buttons, cards, inputs, code
        image: '10px',
        pill: '9999px',
      },

      boxShadow: {
        // Soft, layered resting elevations.
        card:    '0px 25px 15px 0px rgba(20,17,31,0.03), 0px 11px 11px 0px rgba(20,17,31,0.04), 0px 3px 6px 0px rgba(20,17,31,0.05)',
        popover: '0px 79px 47px 0px rgba(20,17,31,0.03), 0px 35px 35px 0px rgba(20,17,31,0.04), 0px 9px 19px 0px rgba(20,17,31,0.05)',
        // Signature playful offset — use rarely.
        crisp:   '6px 6px 0px rgb(0, 0, 0)',
      },

      backgroundImage: {
        'grad-heat': 'linear-gradient(135deg, #F32758, #FFC581)',
        'grad-blue': 'linear-gradient(135deg, #0057FF, #31B5FF)',
        'grad-pink': 'linear-gradient(135deg, #FF007A, #FF81BD)',
      },

      maxWidth: {
        content: '740px',
        wide: '1260px',
      },
    },
  },
};
