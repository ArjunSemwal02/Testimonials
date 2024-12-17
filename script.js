const testimonials = [
    {
        author: {
            name: 'Bella',
            image: 'assets/figurine-6622692_1280.jpg'
        },
        detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, illum nisi excepturi mollitia reiciendis sit rerum, neque fugit doloremque tempore doloribus? Similique, qui blanditiis eaque libero eum necessitatibus quae sunt?',
        date: '26 Oct 2024'
    },
    {
        author: {
            name: 'Bailey',
            image: 'assets/ai-generated-8708710_1280.jpg'
        },
        detail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, illum nisi excepturi mollitia reiciendis sit rerum, neque fugit doloremque tempore doloribus? Similique, qui blanditiis eaque libero eum necessitatibus quae sunt? Ex quos animi voluptas beatae soluta facilis ipsum ullam earum ea minima magnam, totam nisi dolorem nobis omnis exercitationem iure dolorum consequuntur!',
        date: '1 Nov 2024'
    },
    {
        author: {
            name: 'Beau',
            image: 'assets/ai-generated-8691773_1280.jpg'
        },
        detail: 'Placeat, nemo quos. Nostrum quisquam numquam ullam, repudiandae saepe asperiores. Beatae porro dolore inventore ipsum. Tempora, voluptatum quibusdam dolorem beatae doloribus at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, illum nisi excepturi mollitia reiciendis sit rerum, neque fugit doloremque tempore doloribus? Similique, qui blanditiis eaque libero eum necessitatibus quae sunt?',
        date: '10 Dec 2024'
    },
    {
        author: {
            name: 'Abby',
            image: 'assets/dog-8161639_1280.jpg'
        },
        detail: 'Ratione esse enim in accusantium! Enim ab ipsa odio architecto illo nesciunt, omnis necessitatibus similique repellat debitis inventore, animi eum perferendis dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, illum nisi excepturi mollitia reiciendis sit rerum, neque fugit doloremque tempore doloribus? Similique, qui blanditiis eaque libero eum necessitatibus quae sunt?',
        date: '1 Jan 2025'
    }
]

const containerElement = document.getElementById('testimonial-container');

const makeTestimonialCard = testimonial => {
        return `<div class="testimonial-card">
            <img src="${testimonial.author.image}">
            <h2>${testimonial.author.name}</h2>
            <p>${testimonial.detail}</p>
            <date>Written on ${testimonial.date}<date>
        </div>`
}

let currentTestimonial = 0;

const nextTestimonial = () => {
    if(currentTestimonial < testimonials.length - 1)
        currentTestimonial += 1;
    updatePage();
}

const prevTestimonial = () => {
    if(currentTestimonial > 0)
        currentTestimonial -= 1;
    updatePage();
}

const updatePage = () => {
    let markup = makeTestimonialCard(testimonials[currentTestimonial]);

    if(testimonials.length > 0){
        markup += `<nav>
            <button onclick="prevTestimonial()">Previous</button>
            <button onclick="nextTestimonial()">Next</button>
        </nav>`
    }
    

    containerElement.innerHTML = markup;
}

updatePage();