const DASH = "-";
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

class Notes {
    constructor() {
        this.notes = GUITAR_STRINGS(true);
        this.pulloffs = GUITAR_STRINGS();
        this.hammerons = GUITAR_STRINGS();
        this.slides = GUITAR_STRINGS();
        this.bends = GUITAR_STRINGS();
        this.display = this.print();
    }

    /**
     * Join values of guitar string for display as a js string
     */
    concatString = guitarString => {
        return [
            this.notes[guitarString],
            this.pulloffs[guitarString],
            this.hammerons[guitarString],
            this.slides[guitarString],
            this.bends[guitarString]
        ].join("");
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

export default Notes;
