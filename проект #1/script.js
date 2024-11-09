
    document.addEventListener('DOMContentLoaded', function() {
        //Home da bide default
        var allSections = document.querySelectorAll('section');
        for(var i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }
        
        var homeSection = document.querySelector('#home');
        if(homeSection) {
            homeSection.style.display = 'block';
        }
    
        // za navugacija
        var links = document.querySelectorAll('.nav-link, .dropdown-item');
        
        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                e.preventDefault();
                
                // da ne se pokaxuvaat site delovi
                var sections = document.querySelectorAll('section');
                for(var j = 0; j < sections.length; j++) {
                    sections[j].style.display = 'none';
                }
                
                // da se pojavuva samo kliknatiot del
                var sectionId = this.getAttribute('href');
                if(sectionId) {
                    var section = document.querySelector(sectionId);
                    if(section) {
                        section.style.display = 'block';
                    }
                }
            });
        }
    });

    //prevzemanje info za Luxury Hollywood Replicas

    var json1 = {"items": [
        {
           "model": "Lincoln Futura 1955 (Batmobile)",
           "description": "The Lincoln Futura, a concept car built in 1955, became world-famous as the Batmobilr in the 1960's Batman series. With its futuristic design, bubble canopy and jet-inspired tailfins, it captures the imaginations of car lovers and Batman fans alike.",
           "price": "$4.62 million",
           "reviewLink": "https://www.caranddriver.com/news/a18735592/remembering-the-lincoln-futura-the-original-batmobile/",
           "image":"batmobile.png",
           "likes": 90,
           "comments": []

       },
       {
           "model": "James Bond's Aston Martin DB5",
           "description": "The Aston Martin DB5 is an iconic luxury sports car featured in several James Bond films, starting with 'Goldfinger'. Known for its sleek design and gadget-packed interior, including ejector seats, bulletproof shields, and hidden machine guns, the DB5 epitomizes sophistication and high-tech espionage.",
           "price": "$1.5 million",
           "reviewLink": "https://www.topgear.com/car-news/classic/james-bonds-aston-martin-db5-will-be-available-for-sale-again-2022",
           "image":"bondsdb5.png",
           "likes": 1347,
           "comments": []
       },
       {
           "model": "Ecto-1 (Ghostbusters)",
           "description": "The Ecto-1 is a 1959 Cadillac ambulance turned ghost-hunting vehicle used by the Ghostbusters in the beloved 1984 movie. Featuring a large siren, ghost-catching equipment, and the unmistakable logo, the Ecto-1 became an essential character in the franchise. Its classic vintage look and powerful presence continue to make it an iconic symbol of the Ghostbusters' adventure.",
           "price": "$150,000 ",
           "reviewLink": "https://screenrant.com/ecto-1-ghostbusters-vehicle-history/",
           "image":"ecto-1.png",
           "likes": 8,
           "comments": []
       },
       {
           "model": "Ferrari 250 GT California (Ferris Bueller's Day Off)",
           "description": "The Ferrari 250 GT California is one of the most expensive and iconic cars featured in the 1986 movie *Ferris Bueller's Day Off*. Driven by Ferris and his friends during their day of adventure in Chicago, the car became an instant classic. Known for its elegant design, luxury, and powerful V12 engine, this Ferrari is a symbol of wealth and style.",
           "price": "$18 million ",
           "reviewLink": "https://www.motortrend.com/news/ferrari-250-gt-california-rare-cars/",
           "image":"ferrari250.png",
           "likes": 100,
           "comments": []
       }
   ]};

   var data = document.querySelector("#new-cars .newcars");
   var items = json1.items;
   for(var i=0; i<items.length; ++i) {
 
    var h2 = document.createElement("h4");
    h2.innerHTML = items[i].model;
    data.appendChild(h2);
    var p = document.createElement("p");
    p.innerHTML = items[i].description;
    data.appendChild(p);
    var pprice = document.createElement("p");
    pprice.innerHTML= items[i].price;
    data.appendChild(pprice);
    var a = document.createElement("a");
    a.innerHTML = "Read More";
    a.href = items[i].reviewLink;
    a.target="_blank";
    data.appendChild(a);
    var lin = document.createElement("hr");
    data.appendChild(lin);
   }

   //prevzemanje info za Classic Screen Legends

   var json2 = { "items2":[
    {
        "model": "Dean's Chevy Impala 1967 (Supernatural)",
        "description": "Dean Winchester's 1967 Chevy Impala is one of the most iconic vehicles in TV history. With its dark, ominous appearance, it served as the main transportation for the Winchester brothers in their fight against supernatural forces. The black muscle car is equipped with an arsenal of weapons and has witnessed countless battles and emotional moments.",
        "price": "$50,000",
        "reviewLink": "https://screenrant.com/supernatural-deans-impala-history-facts/",
        "image":"chevy.png",
        "likes": 666,
        "comments": []
    },
    {
        "model": "The Mystery Machine (Scooby-Doo)",
        "description": "The Mystery Machine is the iconic van that carries Scooby-Doo, Shaggy, Fred, Velma, and Daphne on their mystery-solving adventures. Its colorful, psychedelic design with flowers and bold lettering makes it an instantly recognizable pop culture icon. The van is more than just transportation; it's the team's mobile headquarters.",
        "price": "$20,000 ",
        "reviewLink": "https://screenrant.com/scooby-doo-mystery-machine-culture-history-facts/",
        "image":"scoob.png",
        "likes": 13,
        "comments": ["Jinkies!"]
    },
    {
        "model": " Honda S2000 (Suki's Car)",
        "description": "Suki's custom pink Honda S2000 from '2 Fast 2 Furious' is a standout in the Fast & Furious franchise. Known for its sleek design, bright pink color, and neon accents, this car reflects Suki’s bold and fearless personality. It's a symbol of speed, style, and defiance on the streets.",
        "price": "$40,000",
        "reviewLink": "https://www.motortrend.com/cars/honda/s2000/2000-fast-furious-legacy/",
        "image":"suki.png",
        "likes": 26,
        "comments": [] 
    },

    {
        "model": "DeLorean (Back to the Future)",
        "description": "The DeLorean, modified with time-travel capabilities by Doc Brown in 'Back to the Future,' is one of the most famous cars in cinema history. Its stainless steel body, gull-wing doors, and futuristic design, combined with the flux capacitor, make it a symbol of adventure, time travel, and 80s nostalgia.",
        "price": "$25,000 ",
        "reviewLink": "https://www.autobahnautomotive.com/blog/back-to-the-future-delorean/",
        "image":"delorean.png",
        "likes": 0,
        "comments": []
    },
    {
        "model": "1986 Fleetwood Bounder RV (The Krystal Ship - Breakin Bad)",
        "description": "Own a piece of TV history with this replica of the iconic RV from Breaking Bad. Known as the Krystal Ship, this 1986 Fleetwood Bounder served as Walter White and Jesse Pinkman’s mobile meth lab. With its weathered look and classic design, it’s a must-have for fans wanting a memorable piece of the show’s legacy.",
        "price": "$65,000 ",
        "reviewLink": "https://www.jackery.com/blogs/knowledge/breaking-bad-rv",
        "image":"bbvan.png",
        "likes": 0,
        "comments": ["Dali doagja so opremata?"]
    }
    
]};

var data2 = document.querySelector("#used-cars .oldcars");
var items2 = json2.items2

for(var j=0; j<items2.length; j++){
    var ime = document.createElement("h4");
    ime.innerHTML = items2[j].model;
    data2.appendChild(ime);  
    var opis = document.createElement("p");
    opis.innerHTML = items2[j].description;
    data2.appendChild(opis); 
    var cena = document.createElement("p");
    cena.innerHTML= items2[j].price;
    data2.appendChild(cena);  
    var rev = document.createElement("a");
    rev.innerHTML = "Read More";
    rev.href = items2[j].reviewLink;
    rev.target="_blank";
    data2.appendChild(rev);  
    var lin = document.createElement("hr");
    data2.appendChild(lin);
}

//od delot za test vozenje prevzemanje iminja na modelite

items1 = items.concat(items2);
const modelSelect = document.getElementById('car-model');

for(var k=0; k<items1.length; k++){
    const option = document.createElement('option');
    option.innerHTML = items1[k].model;
    modelSelect.appendChild(option);
}

//mini instagram galerija 

function createGallery(items) {
    const galleryContent = document.getElementById('minigram-content');
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        
        card.innerHTML = `
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.model}">
                <div class="card-body">
                    <h5 class="card-title">${item.model}</h5>
                    <button class="btn btn-outline-primary btn-sm like-button" data-index="${index}">
                        ❤️ <span class="like-count">${item.likes}</span>
                    </button>
                    <div class="comments-section mt-3">
                        <div class="comments-container"></div>
                        <div class="input-group mt-2">
                            <input type="text" class="form-control form-control-sm comment-input" 
                                placeholder="Add a comment...">
                            <button class="btn btn-outline-secondary btn-sm add-comment" 
                                data-index="${index}">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        galleryContent.appendChild(card);
        
        // postoecki komentari
        const commentsContainer = card.querySelector('.comments-container');
        item.comments.forEach((comment, commentIndex) => {
            addCommentToDOM(commentsContainer, comment, index, commentIndex);
        });
    });
    

    setupEventListeners();
}

function setupEventListeners() {
    //like  button
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.closest('.like-button').dataset.index;
            items1[index].likes++;
            e.target.querySelector('.like-count').textContent = items1[index].likes;
        });
    });
    
    //comment button
    document.querySelectorAll('.add-comment').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            const card = e.target.closest('.card');
            const input = card.querySelector('.comment-input');
            const comment = input.value.trim();
            
            if (comment) {
                const commentsContainer = card.querySelector('.comments-container');
                items1[index].comments.push(comment);
                addCommentToDOM(
                    commentsContainer, 
                    comment, 
                    index, 
                    items1[index].comments.length - 1
                );
                input.value = '';
            }
        });
    });
}

function addCommentToDOM(container, comment, imageIndex, commentIndex) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-item d-flex justify-content-between align-items-center py-1';
    commentElement.innerHTML = `
        <span class="comment-text">${comment}</span>
        <button class="btn btn-outline-danger btn-sm delete-comment" 
            data-image="${imageIndex}" 
            data-comment="${commentIndex}">×</button>
    `;
    
    commentElement.querySelector('.delete-comment').addEventListener('click', (e) => {
        const imageIndex = e.target.dataset.image;
        const commentIndex = e.target.dataset.comment;
        items1[imageIndex].comments.splice(commentIndex, 1);
        commentElement.remove();
    });
    
    container.appendChild(commentElement);
}

document.addEventListener('DOMContentLoaded', () => {
    createGallery(items1);
});