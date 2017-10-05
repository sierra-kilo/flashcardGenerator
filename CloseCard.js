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

module.exports = ClozeCard
