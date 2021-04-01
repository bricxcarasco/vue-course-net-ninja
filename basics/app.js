const app = Vue.createApp({
    data() {
        return {
            url: 'http://google.com',
            target: 'blank',
            showBooks: true,
            books: [
                {
                    title: 'Name of the wind',
                    author: 'Patrick Rothfus',
                    image: 'assets/1.jpg',
                    isFavorite: true
                },
                {
                    title: 'The Way of Kings',
                    author: 'Brandon Sanderson',
                    image: 'assets/2.jpg',
                    isFavorite: false
                },
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    image: 'assets/3.jpg',
                    isFavorite: true
                }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        },
        toggleFavorite(book) {
            book.isFavorite = !book.isFavorite
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFavorite)
        }
    }
})

app.mount('#app')