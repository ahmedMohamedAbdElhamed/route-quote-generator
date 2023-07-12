var quoteIMage = document.getElementById("qouteImage");
var qouteContent = document.getElementById("qouteText");
var qouteAuthor = document.getElementById("qouteAuthor");
var usedIndexes = []

function gettingIndex() {
    var index = Math.floor(Math.random()*quotes.length);
    return index;
}

function newQuote() {
    var index = gettingIndex();
    while(usedIndexes.includes(index)) {
        index = gettingIndex();
    }
    usedIndexes.push(index);
    console.log(usedIndexes);
    if(usedIndexes.length == quotes.length) {
        usedIndexes.splice(0,quotes.length-1);
    }
    console.log(usedIndexes);
    quoteIMage.src = quotes[index].source;
    quoteIMage.alt = quotes[index].alternate;
    qouteContent.innerHTML = quotes[index].quoteText;
    qouteAuthor.innerHTML = quotes[index].author;
}

var quotes = [
    {
        author: '― Oscar Wilde',
        quoteText: "Be yourself; everyone else is already taken.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg",
        alternate: "Oscar-Picture"
    },
    {
        author: '― Ralph Waldo Emerson',
        quoteText: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1393555704i/12080._UX200_CR0,34,200,200_.jpg",
        alternate: "Ralph Waldo Emerson-Picture"
    },
    {
        author: '― Albert Einstein',
        quoteText: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg",
        alternate: "Albert Einstein-Picture"
    },
    {
        author: '― Frank Zappa',
        quoteText: "So many books, so little time.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1315160559i/22302._UY200_CR2,0,200,200_.jpg",
        alternate: "Frank Zappa-Picture"
    },
    {
        author: '― Marcus Tullius Cicero',
        quoteText: "A room without books is like a body without a soul.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg",
        alternate: "Marcus Tullius Cicero-Picture"
    },
    {
        author: '― Bernard M. Baruch',
        quoteText: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg",
        alternate: "Bernard M. Baruch-Picture"
    },
    {
        author: '― Dr. Seuss',
        quoteText: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
        source: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg',
        alternate: "Dr. Seuss-Picture"
    },
    {
        author: '― Mahatma Gandhi',
        quoteText: "Be the change that you wish to see in the world.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg",
        alternate: "Mahatma Gandhi-Picture"
    },
    {
        author: '― Mark Twain',
        quoteText: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322103868i/1244._UX200_CR0,40,200,200_.jpg",
        alternate: "Mark Twain-Picture"
    },
    {
        author: '― Andre Gide, Autumn Leaves',
        quoteText: "It is better to be hated for what you are than to be loved for what you are not.",
        source: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1424119198i/7617._UX200_CR0,29,200,200_.jpg",
        alternate: "Andre Gide, Autumn Leaves-Picture"
    }
]

newQuote();