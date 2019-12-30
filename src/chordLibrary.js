const chordLibrary = {
    "|": {
        name: "|",
        notes: { lowE: "|", a: "|", d: "|", g: "|", b: "|", highE: "|" }
    },
    A: {
        name: "A",
        notes: { lowE: "X", a: "0", d: "2", g: "2", b: "2", highE: "0" }
    },
    A6: {
        name: "A6",
        notes: { lowE: "0", a: "0", d: "2", g: "2", b: "2", highE: "2" }
    },
    A7: {
        name: "A7",
        notes: { lowE: "X", a: "0", d: "2", g: "0", b: "2", highE: "0" }
    },
    A9: {
        name: "A9",
        notes: { lowE: "X", a: "0", d: "2", g: "4", b: "2", highE: "3" }
    },
    Aaug: {
        name: "Aaug",
        notes: { lowE: "X", a: "0", d: "3", g: "2", b: "2", highE: "1" }
    },
    Ab: {
        name: "Ab",
        notes: { lowE: "4", a: "6", d: "6", g: "5", b: "4", highE: "4" }
    },
    Ab6: {
        name: "Ab6",
        notes: { lowE: "4", a: "3", d: "1", g: "1", b: "1", highE: "1" }
    },
    Ab7: {
        name: "Ab7",
        notes: { lowE: "X", a: "X", d: "1", g: "1", b: "1", highE: "2" }
    },
    Ab9: {
        name: "Ab9",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "2" }
    },
    Abar: {
        name: "Abar",
        notes: { lowE: "5", a: "7", d: "7", g: "6", b: "5", highE: "5" }
    },
    Abaug: {
        name: "Abaug",
        notes: { lowE: "X", a: "X", d: "2", g: "1", b: "1", highE: "0" }
    },
    Abmaj7: {
        name: "Abmaj7",
        notes: { lowE: "X", a: "X", d: "1", g: "1", b: "1", highE: "3" }
    },
    Absus: {
        name: "Absus",
        notes: { lowE: "X", a: "X", d: "1", g: "1", b: "2", highE: "4" }
    },
    Adim: {
        name: "Adim",
        notes: { lowE: "X", a: "X", d: "1", g: "2", b: "1", highE: "2" }
    },
    Am: {
        name: "Am",
        notes: { lowE: "X", a: "0", d: "2", g: "2", b: "1", highE: "0" }
    },
    Am6: {
        name: "Am6",
        notes: { lowE: "0", a: "0", d: "2", g: "2", b: "1", highE: "2" }
    },
    Am7: {
        name: "Am7",
        notes: { lowE: "0", a: "0", d: "2", g: "0", b: "1", highE: "0" }
    },
    "Am7/F#": {
        name: "Am7/F#",
        notes: { lowE: "2", a: "0", d: "2", g: "2", b: "1", highE: "0" }
    },
    "Am7/G": {
        name: "Am7/G",
        notes: { lowE: "3", a: "0", d: "2", g: "0", b: "1", highE: "0" }
    },
    Asus: {
        name: "Asus",
        notes: { lowE: "X", a: "X", d: "2", g: "2", b: "3", highE: "0" }
    },
    B: {
        name: "B",
        notes: { lowE: "2", a: "2", d: "4", g: "4", b: "4", highE: "2" }
    },
    B6: {
        name: "B6",
        notes: { lowE: "2", a: "2", d: "4", g: "4", b: "4", highE: "4" }
    },
    B7: {
        name: "B7",
        notes: { lowE: "X", a: "2", d: "1", g: "2", b: "0", highE: "2" }
    },
    B9: {
        name: "B9",
        notes: { lowE: "X", a: "2", d: "1", g: "2", b: "2", highE: "2" }
    },
    Baug: {
        name: "Baug",
        notes: { lowE: "X", a: "X", d: "6", g: "5", b: "5", highE: "4" }
    },
    Bb: {
        name: "Bb",
        notes: { lowE: "X", a: "1", d: "3", g: "3", b: "3", highE: "1" }
    },
    Bb6: {
        name: "Bb6",
        notes: { lowE: "1", a: "1", d: "3", g: "3", b: "3", highE: "3" }
    },
    Bb7: {
        name: "Bb7",
        notes: { lowE: "X", a: "X", d: "4", g: "4", b: "4", highE: "5" }
    },
    Bb9: {
        name: "Bb9",
        notes: { lowE: "1", a: "1", d: "3", g: "1", b: "1", highE: "1" }
    },
    Bbaug: {
        name: "Bbaug",
        notes: { lowE: "X", a: "X", d: "0", g: "3", b: "3", highE: "2" }
    },
    Bbdim: {
        name: "Bbdim",
        notes: { lowE: "X", a: "X", d: "2", g: "3", b: "2", highE: "3" }
    },
    Bbm: {
        name: "Bbm",
        notes: { lowE: "X", a: "1", d: "3", g: "3", b: "2", highE: "1" }
    },
    Bbm6: {
        name: "Bbm6",
        notes: { lowE: "X", a: "X", d: "3", g: "3", b: "2", highE: "3" }
    },
    Bbm7: {
        name: "Bbm7",
        notes: { lowE: "X", a: "X", d: "3", g: "3", b: "2", highE: "4" }
    },
    Bbmaj7: {
        name: "Bbmaj7",
        notes: { lowE: "X", a: "1", d: "3", g: "2", b: "3", highE: "X" }
    },
    Bbsus: {
        name: "Bbsus",
        notes: { lowE: "X", a: "X", d: "3", g: "3", b: "4", highE: "1" }
    },
    Bm: {
        name: "Bm",
        notes: { lowE: "2", a: "2", d: "4", g: "4", b: "3", highE: "2" }
    },
    Bm6: {
        name: "Bm6",
        notes: { lowE: "X", a: "X", d: "6", g: "6", b: "5", highE: "6" }
    },
    Bm7: {
        name: "Bm7",
        notes: { lowE: "X", a: "2", d: "4", g: "2", b: "3", highE: "2" }
    },
    Bsus: {
        name: "Bsus",
        notes: { lowE: "X", a: "X", d: "5", g: "5", b: "6", highE: "3" }
    },
    C: {
        name: "C",
        notes: { lowE: "X", a: "3", d: "2", g: "0", b: "1", highE: "0" }
    },
    "C#m": {
        name: "C#m",
        notes: { lowE: "X", a: "X", d: "2", g: "1", b: "2", highE: "0" }
    },
    "C#6": {
        name: "C#6",
        notes: { lowE: "X", a: "X", d: "2", g: "3", b: "2", highE: "4" }
    },
    "C#7": {
        name: "C#7",
        notes: { lowE: "X", a: "X", d: "2", g: "4", b: "2", highE: "4" }
    },
    "C/B": {
        name: "C/B",
        notes: { lowE: "X", a: "2", d: "2", g: "X", b: "1", highE: "0" }
    },
    "C/G": {
        name: "C/G",
        notes: { lowE: "3", a: "3", d: "2", g: "0", b: "1", highE: "0" }
    },
    C6: {
        name: "C6",
        notes: { lowE: "X", a: "3", d: "2", g: "2", b: "1", highE: "0" }
    },
    C7: {
        name: "C7",
        notes: { lowE: "X", a: "3", d: "2", g: "3", b: "1", highE: "0" }
    },
    C9: {
        name: "C9",
        notes: { lowE: "X", a: "3", d: "2", g: "3", b: "3", highE: "3" }
    },
    Caug: {
        name: "Caug",
        notes: { lowE: "X", a: "X", d: "2", g: "1", b: "1", highE: "0" }
    },
    Cm: {
        name: "Cm",
        notes: { lowE: "3", a: "3", d: "5", g: "5", b: "4", highE: "3" }
    },
    Cm6: {
        name: "Cm6",
        notes: { lowE: "X", a: "X", d: "1", g: "2", b: "1", highE: "3" }
    },
    Cm7: {
        name: "Cm7",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "3" }
    },
    Cmaj7: {
        name: "Cmaj7",
        notes: { lowE: "X", a: "3", d: "2", g: "0", b: "0", highE: "0" }
    },
    Csus: {
        name: "Csus",
        notes: { lowE: "X", a: "X", d: "3", g: "0", b: "1", highE: "3" }
    },
    D: {
        name: "D",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "2" }
    },
    D6: {
        name: "D6",
        notes: { lowE: "X", a: "0", d: "0", g: "2", b: "0", highE: "2" }
    },
    D7: {
        name: "D7",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "2" }
    },
    "D7/F": {
        name: "D7/F",
        notes: { lowE: "2", a: "X", d: "0", g: "2", b: "1", highE: "2" }
    },
    D9: {
        name: "D9",
        notes: { lowE: "2", a: "0", d: "0", g: "2", b: "1", highE: "0" }
    },
    Daug: {
        name: "Daug",
        notes: { lowE: "X", a: "X", d: "0", g: "3", b: "3", highE: "2" }
    },
    Db: {
        name: "Db",
        notes: { lowE: "X", a: "X", d: "3", g: "1", b: "2", highE: "1" }
    },
    Db6: {
        name: "Db6",
        notes: { lowE: "X", a: "X", d: "3", g: "4", b: "2", highE: "4" }
    },
    Db9: {
        name: "Db9",
        notes: { lowE: "X", a: "4", d: "3", g: "4", b: "4", highE: "4" }
    },
    Dbaug: {
        name: "Dbaug",
        notes: { lowE: "X", a: "X", d: "3", g: "2", b: "2", highE: "1" }
    },
    Dbmaj7: {
        name: "Dbmaj7",
        notes: { lowE: "X", a: "4", d: "3", g: "1", b: "1", highE: "1" }
    },
    Dbsus: {
        name: "Dbsus",
        notes: { lowE: "X", a: "X", d: "3", g: "3", b: "4", highE: "1" }
    },
    Dm: {
        name: "Dm",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "1" }
    },
    "Dm/C#": {
        name: "Dm/C#",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "2", highE: "1" }
    },
    Dm6: {
        name: "Dm6",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "0", highE: "1" }
    },
    Dm7: {
        name: "Dm7",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "1" }
    },
    Dmaj7: {
        name: "Dmaj7",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "2", highE: "2" }
    },
    Dsus: {
        name: "Dsus",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "3", highE: "3" }
    },
    E: {
        name: "E",
        notes: { lowE: "0", a: "3", d: "3", g: "2", b: "0", highE: "0" }
    },
    E6: {
        name: "E6",
        notes: { lowE: "0", a: "2", d: "2", g: "1", b: "2", highE: "0" }
    },
    E7: {
        name: "E7",
        notes: { lowE: "0", a: "2", d: "0", g: "1", b: "0", highE: "0" }
    },
    E9: {
        name: "E9",
        notes: { lowE: "0", a: "2", d: "0", g: "1", b: "0", highE: "2" }
    },
    Eb: {
        name: "Eb",
        notes: { lowE: "X", a: "0", d: "6", g: "4", b: "5", highE: "4" }
    },
    Eb6: {
        name: "Eb6",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "3" }
    },
    Eb7: {
        name: "Eb7",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "2", highE: "3" }
    },
    Eb9: {
        name: "Eb9",
        notes: { lowE: "1", a: "1", d: "1", g: "3", b: "2", highE: "1" }
    },
    Ebaug: {
        name: "Ebaug",
        notes: { lowE: "X", a: "X", d: "1", g: "0", b: "0", highE: "3" }
    },
    Ebm: {
        name: "Ebm",
        notes: { lowE: "X", a: "X", d: "4", g: "3", b: "4", highE: "2" }
    },
    Ebm6: {
        name: "Ebm6",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "1", highE: "2" }
    },
    Ebm7: {
        name: "Ebm7",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "2", highE: "2" }
    },
    Ebmaj7: {
        name: "Ebmaj7",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "3", highE: "3" }
    },
    Ebsus: {
        name: "Ebsus",
        notes: { lowE: "X", a: "X", d: "1", g: "3", b: "4", highE: "4" }
    },
    Em: {
        name: "Em",
        notes: { lowE: "0", a: "2", d: "2", g: "0", b: "0", highE: "0" }
    },
    Em6: {
        name: "Em6",
        notes: { lowE: "0", a: "2", d: "2", g: "0", b: "2", highE: "0" }
    },
    Em7: {
        name: "Em7",
        notes: { lowE: "0", a: "2", d: "2", g: "0", b: "3", highE: "0" }
    },
    Emaj7: {
        name: "Emaj7",
        notes: { lowE: "0", a: "2", d: "1", g: "1", b: "0", highE: "X" }
    },
    Esus: {
        name: "Esus",
        notes: { lowE: "0", a: "2", d: "2", g: "2", b: "0", highE: "0" }
    },
    F: {
        name: "F",
        notes: { lowE: "1", a: "3", d: "3", g: "2", b: "1", highE: "1" }
    },
    "F#": {
        name: "F#",
        notes: { lowE: "2", a: "4", d: "4", g: "3", b: "2", highE: "2" }
    },
    "F#7": {
        name: "F#7",
        notes: { lowE: "2", a: "4", d: "2", g: "3", b: "2", highE: "2" }
    },
    "F#9": {
        name: "F#9",
        notes: { lowE: "X", a: "X", d: "5", g: "4", b: "6", highE: "5" }
    },
    "F#m": {
        name: "F#m",
        notes: { lowE: "2", a: "4", d: "4", g: "2", b: "2", highE: "2" }
    },
    "F#6": {
        name: "F#6",
        notes: { lowE: "X", a: "X", d: "1", g: "2", b: "2", highE: "2" }
    },
    F6: {
        name: "F6",
        notes: { lowE: "X", a: "X", d: "0", g: "2", b: "1", highE: "1" }
    },
    F7: {
        name: "F7",
        notes: { lowE: "1", a: "3", d: "1", g: "2", b: "1", highE: "1" }
    },
    F9: {
        name: "F9",
        notes: { lowE: "X", a: "X", d: "3", g: "2", b: "4", highE: "3" }
    },
    Faug: {
        name: "Faug",
        notes: { lowE: "X", a: "X", d: "3", g: "2", b: "2", highE: "1" }
    },
    Fm: {
        name: "Fm",
        notes: { lowE: "1", a: "3", d: "3", g: "1", b: "1", highE: "1" }
    },
    Fm6: {
        name: "Fm6",
        notes: { lowE: "X", a: "X", d: "0", g: "1", b: "1", highE: "1" }
    },
    Fm7: {
        name: "Fm7",
        notes: { lowE: "1", a: "3", d: "1", g: "1", b: "1", highE: "1" }
    },
    Fmaj7: {
        name: "Fmaj7",
        notes: { lowE: "0", a: "X", d: "3", g: "2", b: "1", highE: "0" }
    },
    Fsus: {
        name: "Fsus",
        notes: { lowE: "X", a: "X", d: "3", g: "3", b: "1", highE: "1" }
    },
    G: {
        name: "G",
        notes: { lowE: "3", a: "2", d: "0", g: "0", b: "3", highE: "3" }
    },
    "G#m": {
        name: "G#m",
        notes: { lowE: "4", a: "6", d: "6", g: "4", b: "4", highE: "4" }
    },
    "G#6": {
        name: "G#6",
        notes: { lowE: "X", a: "X", d: "3", g: "4", b: "4", highE: "4" }
    },
    "G#7": {
        name: "G#7",
        notes: { lowE: "X", a: "X", d: "1", g: "1", b: "0", highE: "2" }
    },
    "G/B": {
        name: "G/B",
        notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "3" }
    },
    G6: {
        name: "G6",
        notes: { lowE: "3", a: "2", d: "0", g: "0", b: "3", highE: "0" }
    },
    G7: {
        name: "G7",
        notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "1" }
    },
    G9: {
        name: "G9",
        notes: { lowE: "3", a: "0", d: "0", g: "2", b: "0", highE: "1" }
    },
    Gaug: {
        name: "Gaug",
        notes: { lowE: "X", a: "X", d: "1", g: "0", b: "0", highE: "3" }
    },
    Gb6: {
        name: "Gb6",
        notes: { lowE: "X", a: "4", d: "4", g: "3", b: "4", highE: "X" }
    },
    Gbaug: {
        name: "Gbaug",
        notes: { lowE: "X", a: "X", d: "4", g: "3", b: "3", highE: "2" }
    },
    Gbmaj7: {
        name: "Gbmaj7",
        notes: { lowE: "X", a: "X", d: "4", g: "3", b: "2", highE: "1" }
    },
    Gbsus: {
        name: "Gbsus",
        notes: { lowE: "X", a: "X", d: "4", g: "4", b: "2", highE: "2" }
    },
    Gm: {
        name: "Gm",
        notes: { lowE: "3", a: "5", d: "5", g: "3", b: "3", highE: "3" }
    },
    Gm6: {
        name: "Gm6",
        notes: { lowE: "X", a: "X", d: "2", g: "3", b: "3", highE: "3" }
    },
    Gm7: {
        name: "Gm7",
        notes: { lowE: "3", a: "5", d: "3", g: "3", b: "3", highE: "3" }
    },
    Gmaj7: {
        name: "Gmaj7",
        notes: { lowE: "3", a: "2", d: "0", g: "0", b: "0", highE: "2" }
    },
    Gsus: {
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
