class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    getTitle() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }
}

console.log(Article.publisher) // ddanzi

//
Article.address = 'seoul'
console.log(Article.address)   // seoul

Article.getPrice = () => 2000
console.log(Article.getPrice()) // 2000

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2)) // 90

console.log(article1.publisher, article1.address, article1.compare, article1.getPrice) // undefined undefined undefined undefined
console.log(Object.keys(article1))          // [ 'title', 'viewCnt' ]
console.log(Article.title, Article.viewCnt) // undefined undefined

//
let articles = [article1, article2]
console.log(articles)
// [
//     Article { title: 'java', viewCnt: 100 },
//     Article { title: 'javascript', viewCnt: 10 }
// ]

articles.sort(Article.compare)
console.log(articles)
// [
//     Article { title: 'javascript', viewCnt: 10 },
//     Article { title: 'java', viewCnt: 100 }
// ]

Article.compare = (a, b) => b - a
articles.sort(Article.compare)
console.log(articles)
// [
//     Article { title: 'java', viewCnt: 100 },
//     Article { title: 'javascript', viewCnt: 10 }
// ]