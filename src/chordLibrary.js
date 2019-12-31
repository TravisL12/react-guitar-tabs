const chordLibrary = {
  "|": {
    name: "|",
    notes: { lowE: "|", a: "|", d: "|", g: "|", b: "|", highE: "|" }
  },
  a: {
    name: "A",
    notes: { lowE: "X", a: "0", d: "2", g: "2", b: "2", highE: "0" }
  },
  a6: {
    name: "A6",
    notes: { lowE: "0", a: "0", d: "2", g: "2", b: "2", highE: "2" }
  },
  a7: {
    name: "A7",
    notes: { lowE: "X", a: "0", d: "2", g: "0", b: "2", highE: "0" }
  },
  a9: {
    name: "A9",
    notes: { lowE: "X", a: "0", d: "2", g: "4", b: "2", highE: "3" }
  },
  aaug: {
    name: "Aaug",
    notes: { lowE: "X", a: "0", d: "3", g: "2", b: "2", highE: "1" }
  },
  ab: {
    name: "Ab",
    notes: { lowE: "4", a: "6", d: "6", g: "5", b: "4", highE: "4" }
  },
  ab6: {
    name: "Ab6",
    notes: { lowE: "4", a: "3", d: "1", g: "1", b: "1", highE: "1" }
  },
  ab7: {
    name: "Ab7",
    notes: { lowE: "X", a: "X", d: "1", g: "1", b: "1", highE: "2" }
  },
  ab9: {
    name: "Ab9",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "2" }
  },
  abar: {
    name: "Abar",
    notes: { lowE: "5", a: "7", d: "7", g: "6", b: "5", highE: "5" }
  },
  abaug: {
    name: "Abaug",
    notes: { lowE: "X", a: "X", d: "2", g: "1", b: "1", highE: "0" }
  },
  abmaj7: {
    name: "Abmaj7",
    notes: { lowE: "X", a: "X", d: "1", g: "1", b: "1", highE: "3" }
  },
  absus: {
    name: "Absus",
    notes: { lowE: "X", a: "X", d: "1", g: "1", b: "2", highE: "4" }
  },
  adim: {
    name: "Adim",
    notes: { lowE: "X", a: "X", d: "1", g: "2", b: "1", highE: "2" }
  },
  am: {
    name: "Am",
    notes: { lowE: "X", a: "0", d: "2", g: "2", b: "1", highE: "0" }
  },
  am6: {
    name: "Am6",
    notes: { lowE: "0", a: "0", d: "2", g: "2", b: "1", highE: "2" }
  },
  am7: {
    name: "Am7",
    notes: { lowE: "0", a: "0", d: "2", g: "0", b: "1", highE: "0" }
  },
  "am7/f#": {
    name: "Am7/F#",
    notes: { lowE: "2", a: "0", d: "2", g: "2", b: "1", highE: "0" }
  },
  "am7/g": {
    name: "Am7/G",
    notes: { lowE: "3", a: "0", d: "2", g: "0", b: "1", highE: "0" }
  },
  asus: {
    name: "Asus",
    notes: { lowE: "X", a: "X", d: "2", g: "2", b: "3", highE: "0" }
  },
  b: {
    name: "B",
    notes: { lowE: "2", a: "2", d: "4", g: "4", b: "4", highE: "2" }
  },
  b6: {
    name: "B6",
    notes: { lowE: "2", a: "2", d: "4", g: "4", b: "4", highE: "4" }
  },
  b7: {
    name: "B7",
    notes: { lowE: "X", a: "2", d: "1", g: "2", b: "0", highE: "2" }
  },
  b9: {
    name: "B9",
    notes: { lowE: "X", a: "2", d: "1", g: "2", b: "2", highE: "2" }
  },
  baug: {
    name: "Baug",
    notes: { lowE: "X", a: "X", d: "6", g: "5", b: "5", highE: "4" }
  },
  bb: {
    name: "Bb",
    notes: { lowE: "X", a: "1", d: "3", g: "3", b: "3", highE: "1" }
  },
  bb6: {
    name: "Bb6",
    notes: { lowE: "1", a: "1", d: "3", g: "3", b: "3", highE: "3" }
  },
  bb7: {
    name: "Bb7",
    notes: { lowE: "X", a: "X", d: "4", g: "4", b: "4", highE: "5" }
  },
  bb9: {
    name: "Bb9",
    notes: { lowE: "1", a: "1", d: "3", g: "1", b: "1", highE: "1" }
  },
  bbaug: {
    name: "Bbaug",
    notes: { lowE: "X", a: "X", d: "0", g: "3", b: "3", highE: "2" }
  },
  bbdim: {
    name: "Bbdim",
    notes: { lowE: "X", a: "X", d: "2", g: "3", b: "2", highE: "3" }
  },
  bbm: {
    name: "Bbm",
    notes: { lowE: "X", a: "1", d: "3", g: "3", b: "2", highE: "1" }
  },
  bbm6: {
    name: "Bbm6",
    notes: { lowE: "X", a: "X", d: "3", g: "3", b: "2", highE: "3" }
  },
  bbm7: {
    name: "Bbm7",
    notes: { lowE: "X", a: "X", d: "3", g: "3", b: "2", highE: "4" }
  },
  bbmaj7: {
    name: "Bbmaj7",
    notes: { lowE: "X", a: "1", d: "3", g: "2", b: "3", highE: "X" }
  },
  bbsus: {
    name: "Bbsus",
    notes: { lowE: "X", a: "X", d: "3", g: "3", b: "4", highE: "1" }
  },
  bm: {
    name: "Bm",
    notes: { lowE: "2", a: "2", d: "4", g: "4", b: "3", highE: "2" }
  },
  bm6: {
    name: "Bm6",
    notes: { lowE: "X", a: "X", d: "6", g: "6", b: "5", highE: "6" }
  },
  bm7: {
    name: "Bm7",
    notes: { lowE: "X", a: "2", d: "4", g: "2", b: "3", highE: "2" }
  },
  bsus: {
    name: "Bsus",
    notes: { lowE: "X", a: "X", d: "5", g: "5", b: "6", highE: "3" }
  },
  c: {
    name: "C",
    notes: { lowE: "X", a: "3", d: "2", g: "0", b: "1", highE: "0" }
  },
  "c#m": {
    name: "C#m",
    notes: { lowE: "X", a: "X", d: "2", g: "1", b: "2", highE: "0" }
  },
  "c#6": {
    name: "C#6",
    notes: { lowE: "X", a: "X", d: "2", g: "3", b: "2", highE: "4" }
  },
  "c#7": {
    name: "C#7",
    notes: { lowE: "X", a: "X", d: "2", g: "4", b: "2", highE: "4" }
  },
  "c/b": {
    name: "C/B",
    notes: { lowE: "X", a: "2", d: "2", g: "X", b: "1", highE: "0" }
  },
  "c/g": {
    name: "C/G",
    notes: { lowE: "3", a: "3", d: "2", g: "0", b: "1", highE: "0" }
  },
  c6: {
    name: "C6",
    notes: { lowE: "X", a: "3", d: "2", g: "2", b: "1", highE: "0" }
  },
  c7: {
    name: "C7",
    notes: { lowE: "X", a: "3", d: "2", g: "3", b: "1", highE: "0" }
  },
  c9: {
    name: "C9",
    notes: { lowE: "X", a: "3", d: "2", g: "3", b: "3", highE: "3" }
  },
  caug: {
    name: "Caug",
    notes: { lowE: "X", a: "X", d: "2", g: "1", b: "1", highE: "0" }
  },
  cm: {
    name: "Cm",
    notes: { lowE: "3", a: "3", d: "5", g: "5", b: "4", highE: "3" }
  },
  cm6: {
    name: "Cm6",
    notes: { lowE: "X", a: "X", d: "1", g: "2", b: "1", highE: "3" }
  },
  cm7: {
    name: "Cm7",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "3" }
  },
  cmaj7: {
    name: "Cmaj7",
    notes: { lowE: "X", a: "3", d: "2", g: "0", b: "0", highE: "0" }
  },
  csus: {
    name: "Csus",
    notes: { lowE: "X", a: "X", d: "3", g: "0", b: "1", highE: "3" }
  },
  d: {
    name: "D",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "2" }
  },
  d6: {
    name: "D6",
    notes: { lowE: "X", a: "0", d: "0", g: "2", b: "0", highE: "2" }
  },
  d7: {
    name: "D7",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "2" }
  },
  "d7/f": {
    name: "D7/F",
    notes: { lowE: "2", a: "X", d: "0", g: "2", b: "1", highE: "2" }
  },
  d9: {
    name: "D9",
    notes: { lowE: "2", a: "0", d: "0", g: "2", b: "1", highE: "0" }
  },
  daug: {
    name: "Daug",
    notes: { lowE: "X", a: "X", d: "0", g: "3", b: "3", highE: "2" }
  },
  db: {
    name: "Db",
    notes: { lowE: "X", a: "X", d: "3", g: "1", b: "2", highE: "1" }
  },
  db6: {
    name: "Db6",
    notes: { lowE: "X", a: "X", d: "3", g: "4", b: "2", highE: "4" }
  },
  db9: {
    name: "Db9",
    notes: { lowE: "X", a: "4", d: "3", g: "4", b: "4", highE: "4" }
  },
  dbaug: {
    name: "Dbaug",
    notes: { lowE: "X", a: "X", d: "3", g: "2", b: "2", highE: "1" }
  },
  dbmaj7: {
    name: "Dbmaj7",
    notes: { lowE: "X", a: "4", d: "3", g: "1", b: "1", highE: "1" }
  },
  dbsus: {
    name: "Dbsus",
    notes: { lowE: "X", a: "X", d: "3", g: "3", b: "4", highE: "1" }
  },
  dm: {
    name: "Dm",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "1" }
  },
  "dm/c#": {
    name: "Dm/C#",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "2", highE: "1" }
  },
  dm6: {
    name: "Dm6",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "0", highE: "1" }
  },
  dm7: {
    name: "Dm7",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "1" }
  },
  dmaj7: {
    name: "Dmaj7",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "2", highE: "2" }
  },
  dsus: {
    name: "Dsus",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "3" }
  },
  e: {
    name: "E",
    notes: { lowE: "0", a: "3", d: "3", g: "2", b: "0", highE: "0" }
  },
  e6: {
    name: "E6",
    notes: { lowE: "0", a: "2", d: "2", g: "1", b: "2", highE: "0" }
  },
  e7: {
    name: "E7",
    notes: { lowE: "0", a: "2", d: "0", g: "1", b: "0", highE: "0" }
  },
  e9: {
    name: "E9",
    notes: { lowE: "0", a: "2", d: "0", g: "1", b: "0", highE: "2" }
  },
  eb: {
    name: "Eb",
    notes: { lowE: "X", a: "0", d: "6", g: "4", b: "5", highE: "4" }
  },
  eb6: {
    name: "Eb6",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "3" }
  },
  eb7: {
    name: "Eb7",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "2", highE: "3" }
  },
  eb9: {
    name: "Eb9",
    notes: { lowE: "1", a: "1", d: "1", g: "3", b: "2", highE: "1" }
  },
  ebaug: {
    name: "Ebaug",
    notes: { lowE: "X", a: "X", d: "1", g: "0", b: "0", highE: "3" }
  },
  ebm: {
    name: "Ebm",
    notes: { lowE: "X", a: "X", d: "4", g: "3", b: "4", highE: "2" }
  },
  ebm6: {
    name: "Ebm6",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "2" }
  },
  ebm7: {
    name: "Ebm7",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "2", highE: "2" }
  },
  ebmaj7: {
    name: "Ebmaj7",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "3", highE: "3" }
  },
  ebsus: {
    name: "Ebsus",
    notes: { lowE: "X", a: "X", d: "1", g: "3", b: "4", highE: "4" }
  },
  em: {
    name: "Em",
    notes: { lowE: "0", a: "2", d: "2", g: "0", b: "0", highE: "0" }
  },
  em6: {
    name: "Em6",
    notes: { lowE: "0", a: "2", d: "2", g: "0", b: "2", highE: "0" }
  },
  em7: {
    name: "Em7",
    notes: { lowE: "0", a: "2", d: "2", g: "0", b: "3", highE: "0" }
  },
  emaj7: {
    name: "Emaj7",
    notes: { lowE: "0", a: "2", d: "1", g: "1", b: "0", highE: "X" }
  },
  esus: {
    name: "Esus",
    notes: { lowE: "0", a: "2", d: "2", g: "2", b: "0", highE: "0" }
  },
  f: {
    name: "F",
    notes: { lowE: "1", a: "3", d: "3", g: "2", b: "1", highE: "1" }
  },
  "f#": {
    name: "F#",
    notes: { lowE: "2", a: "4", d: "4", g: "3", b: "2", highE: "2" }
  },
  "f#7": {
    name: "F#7",
    notes: { lowE: "2", a: "4", d: "2", g: "3", b: "2", highE: "2" }
  },
  "f#9": {
    name: "F#9",
    notes: { lowE: "X", a: "X", d: "5", g: "4", b: "6", highE: "5" }
  },
  "f#m": {
    name: "F#m",
    notes: { lowE: "2", a: "4", d: "4", g: "2", b: "2", highE: "2" }
  },
  "f#6": {
    name: "F#6",
    notes: { lowE: "X", a: "X", d: "1", g: "2", b: "2", highE: "2" }
  },
  f6: {
    name: "F6",
    notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "1" }
  },
  f7: {
    name: "F7",
    notes: { lowE: "1", a: "3", d: "1", g: "2", b: "1", highE: "1" }
  },
  f9: {
    name: "F9",
    notes: { lowE: "X", a: "X", d: "3", g: "2", b: "4", highE: "3" }
  },
  faug: {
    name: "Faug",
    notes: { lowE: "X", a: "X", d: "3", g: "2", b: "2", highE: "1" }
  },
  fm: {
    name: "Fm",
    notes: { lowE: "1", a: "3", d: "3", g: "1", b: "1", highE: "1" }
  },
  fm6: {
    name: "Fm6",
    notes: { lowE: "X", a: "X", d: "0", g: "1", b: "1", highE: "1" }
  },
  fm7: {
    name: "Fm7",
    notes: { lowE: "1", a: "3", d: "1", g: "1", b: "1", highE: "1" }
  },
  fmaj7: {
    name: "Fmaj7",
    notes: { lowE: "0", a: "X", d: "3", g: "2", b: "1", highE: "0" }
  },
  fsus: {
    name: "Fsus",
    notes: { lowE: "X", a: "X", d: "3", g: "3", b: "1", highE: "1" }
  },
  g: {
    name: "G",
    notes: { lowE: "3", a: "2", d: "0", g: "0", b: "3", highE: "3" }
  },
  "g#m": {
    name: "G#m",
    notes: { lowE: "4", a: "6", d: "6", g: "4", b: "4", highE: "4" }
  },
  "g#6": {
    name: "G#6",
    notes: { lowE: "X", a: "X", d: "3", g: "4", b: "4", highE: "4" }
  },
  "g#7": {
    name: "G#7",
    notes: { lowE: "X", a: "X", d: "1", g: "1", b: "0", highE: "2" }
  },
  "g/b": {
    name: "G/B",
    notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "3" }
  },
  g6: {
    name: "G6",
    notes: { lowE: "3", a: "2", d: "0", g: "0", b: "3", highE: "0" }
  },
  g7: {
    name: "G7",
    notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "1" }
  },
  g9: {
    name: "G9",
    notes: { lowE: "3", a: "0", d: "0", g: "2", b: "0", highE: "1" }
  },
  gaug: {
    name: "Gaug",
    notes: { lowE: "X", a: "X", d: "1", g: "0", b: "0", highE: "3" }
  },
  gb6: {
    name: "Gb6",
    notes: { lowE: "X", a: "4", d: "4", g: "3", b: "4", highE: "X" }
  },
  gbaug: {
    name: "Gbaug",
    notes: { lowE: "X", a: "X", d: "4", g: "3", b: "3", highE: "2" }
  },
  gbmaj7: {
    name: "Gbmaj7",
    notes: { lowE: "X", a: "X", d: "4", g: "3", b: "2", highE: "1" }
  },
  gbsus: {
    name: "Gbsus",
    notes: { lowE: "X", a: "X", d: "4", g: "4", b: "2", highE: "2" }
  },
  gm: {
    name: "Gm",
    notes: { lowE: "3", a: "5", d: "5", g: "3", b: "3", highE: "3" }
  },
  gm6: {
    name: "Gm6",
    notes: { lowE: "X", a: "X", d: "2", g: "3", b: "3", highE: "3" }
  },
  gm7: {
    name: "Gm7",
    notes: { lowE: "3", a: "5", d: "3", g: "3", b: "3", highE: "3" }
  },
  gmaj7: {
    name: "Gmaj7",
    notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "2" }
  },
  gsus: {
    name: "Gsus",
    notes: {
      lowE: "X",
      a: "X",
      d: "0",
      g: "0",
      b: "1",
      highE: "3"
    }
  }
};

export default chordLibrary;
