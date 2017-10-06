function FlashCard(front, back) {
    this.front = front;
    this.back = back;
};

FlashCard.prototype.callFront = function () {
    console.log(this.front);
};

FlashCard.prototype.callBack = function () {
    console.log(this.back);
};

var card = new FlashCard(process.argv[2], process.argv[3]);
card.callFront();
card.callBack();


module.exports = FlashCard;
