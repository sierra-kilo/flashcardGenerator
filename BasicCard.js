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


module.exports = FlashCard;
