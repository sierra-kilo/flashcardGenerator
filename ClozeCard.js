function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
};

ClozeCard.prototype.partial = function () {
    this.partialText = this.fullText.replace(this.cloze, '(_BLANK_)');
};

ClozeCard.prototype.valid = function () {
    if (card.fullText.includes(card.cloze)) {
    return true;
    } else {
    return false;
    }
}

var card = new ClozeCard(process.argv[2], process.argv[3])
card.partial();
console.log(card.fullText);
console.log(card.cloze);
console.log(card.partialText);

module.exports = ClozeCard
