function numGen(topLimit = 56) {
    return Math.ceil(Math.random() * topLimit)
}
for (var i = 1; i <= 8; i++) {
    console.log(i+'.kolon')

    for (var j = 1; j <= 6; j++) {
        console.log(numGen());
    }
}