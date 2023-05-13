let expect = chai.expect;


describe('When card.printCard', () => {
    it('Should return its rank and suit as a string', () => {
        let x = new Card('3', 'Hearts', 3);
        expect('3 of Hearts').to.equal(x.printCard());
    });
})