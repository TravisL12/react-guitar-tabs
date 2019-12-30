export const DASH = "-";
const PULL_OFFS = "p";
const HAMMER_ONS = "h";
const SLIDES = "s";
const BENDS = "b";
const VIBRATO = "~";

const GUITAR_STRINGS = isNotes => ({
    highE: isNotes && DASH,
    b: isNotes && DASH,
    g: isNotes && DASH,
    d: isNotes && DASH,
    a: isNotes && DASH,
    lowE: isNotes && DASH
});

class ChordModel {
    constructor() {
        this.notes = GUITAR_STRINGS(true);
        this.modifiers = GUITAR_STRINGS();
        this.updateDisplay();
    }

    updateDisplay = () => {
        this.display = this.print();
    };

    setNotes = (notes) => {
        const { highE, b, g, d, a, lowE } = notes;

        this.notes.highE = highE;
        this.notes.b = b;
        this.notes.g = g;
        this.notes.d = d;
        this.notes.a = a;
        this.notes.lowE = lowE;
        this.updateDisplay();
    };
    /**
     * Join values of guitar string for display as a js string
     */
    concatString = guitarString => {
        return [this.notes[guitarString], this.modifiers[guitarString]].join("");
    };

    /**
     * Create viewable version of each guitar string
     */
    print = () => ({
        highE: this.concatString("highE"),
        b: this.concatString("b"),
        g: this.concatString("g"),
        d: this.concatString("d"),
        a: this.concatString("a"),
        lowE: this.concatString("lowE")
    });
}

export default ChordModel;
