/* Shared between the page (browser) and tools/extract-texts.js (node):
   which voice speaks which line, and how a text is keyed to its audio clip. */
(function (root) {
  var V = {
    /* voice tags used in the page -> Microsoft Edge neural voices used at generation time */
    voices: { f1: 'de-DE-KatjaNeural', f2: 'de-DE-AmalaNeural', m1: 'de-DE-ConradNeural', m2: 'de-DE-KillianNeural' },
    rates: { dialogue: '-10%', vocab: '+0%' },
    LISTEN_VOICES: ['m1', 'f1', 'f2', 'm2', 'f1'],
    speakers: {
      'Omar': 'm1', 'Jonas': 'm2', 'Pablo': 'm1', 'Herr Schmidt': 'm2', 'Verkäufer': 'm1', 'Kellner': 'm2',
      'Beamter': 'm1', 'Rezeptionist': 'm2',
      'Lucía': 'f2', 'Mei': 'f1', 'Frau Weber': 'f1', 'Frau Klein': 'f2', 'Frau Becker': 'f2', 'Ärztin': 'f1',
      'Passantin': 'f2', 'Verkäuferin': 'f2', 'Praxis': 'f1', 'Mitarbeiterin': 'f2', 'Frau': 'f1'
    },
    voiceFor: function (who) {
      if (!who) return 'f1';
      if (V.speakers[who]) return V.speakers[who];
      return /in$|^Frau|^Ärztin/.test(who) ? 'f1' : 'm1';
    },
    /* the text that is actually spoken for a piece of content */
    ttsText: function (s) {
      return String(s || '')
        .replace(/…/g, '')
        .replace(/\s*\/\s*/g, ', ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\s+,/g, ',')
        .replace(/([?!.]),/g, '$1')
        .replace(/,\s*$/, '')
        .trim();
    },
    vocabText: function (de, pl) { return pl ? de + ', ' + pl : de; },
    verbText: function (v) { return v[0].replace('|', '') + ', ' + v[1] + ', ' + v[2]; },
    /* FNV-1a 32-bit over voice|text; identical in node and the browser */
    key: function (voiceTag, text) {
      var s = voiceTag + '|' + text, h = 0x811c9dc5;
      for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
      return ('0000000' + h.toString(16)).slice(-8);
    }
  };
  root.VOICES = V;
  if (typeof module !== 'undefined' && module.exports) module.exports = V;
})(typeof window !== 'undefined' ? window : globalThis);
