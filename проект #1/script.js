
    window.onload = function() {
        //Ostanatite gi krieme
        var allSections = document.querySelectorAll('section'); // go sleektira prviot element na koj naiduva (pr new-cars)
        for(var i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }
        //Home da bide default
        var homeSection = document.querySelector('#home');
        if(homeSection) {
            homeSection.style.display = 'block';
        }
    
        // za navigacija
        var links = document.querySelectorAll('.nav-link, .dropdown-item');
        
        for(var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(e) {
                e.preventDefault();
                
                // da ne se pokazuvaat site delovi
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
    };

    //prevzemanje info za Luxury Hollywood Replicas

    var json1 = {"items": [
        {
           "model": "Lincoln Futura 1955 (Batmobile)",
           "description": "The Lincoln Futura, a concept car built in 1955, became world-famous as the Batmobile in the 1960's Batman series. With its futuristic design, bubble canopy and jet-inspired tailfins, it captures the imaginations of car lovers and Batman fans alike.",
           "price": "$4.62 million",
           "carInfo": "https://en.wikipedia.org/wiki/Lincoln_Futura",
           "reviewLink": "https://www.cardesignnews.com/concept-car-of-the-week-lincoln-futura-1955/38048.article",
           "image":"batmobile.png",
           "likes": 90,
           "comments": []

       },
       {
           "model": "James Bond's Aston Martin DB5",
           "description": "The Aston Martin DB5 is an iconic luxury sports car featured in several James Bond films, starting with 'Goldfinger'. Known for its sleek design and gadget-packed interior, including ejector seats, bulletproof shields, and hidden machine guns, the DB5 epitomizes sophistication and high-tech espionage.",
           "price": "$1.5 million",
           "carInfo": "astonmartindb5.html",
           "reviewLink":"reviewsdb5.html",
           "image":"bondsdb5.png",
           "likes": 1347,
           "comments": ["Skapo be"]
       },
       {
           "model": "Ecto-1 (Ghostbusters)",
           "description": "The Ecto-1 is a 1959 Cadillac ambulance turned ghost-hunting vehicle used by the Ghostbusters in the beloved 1984 movie. Featuring a large siren, ghost-catching equipment, and the unmistakable logo, the Ecto-1 became an essential character in the franchise. Its classic vintage look and powerful presence continue to make it an iconic symbol of the Ghostbusters' adventure.",
           "price": "$150,000 ",
           "carInfo": "https://fraserengineco.com/fraser-fast-facts/ecto-1/",
           "reviewLink": "https://truenorthbricks.com/2020/11/05/ghostbusters-ecto-1-10274-review/",
           "image":"ecto-1.png",
           "likes": 8,
           "comments": []
       },
       {
           "model": "Ferrari 250 GT California (Ferris Bueller's Day Off)",
           "description": "The Ferrari 250 GT California is one of the most expensive and iconic cars featured in the 1986 movie *Ferris Bueller's Day Off*. Driven by Ferris and his friends during their day of adventure in Chicago, the car became an instant classic. Known for its elegant design, luxury, and powerful V12 engine, this Ferrari is a symbol of wealth and style.",
           "price": "$18 million ",
           "carInfo": "https://en.wikipedia.org/wiki/Ferrari_250_GT_California_Spyder",
           "reviewLink": "https://robbreport.com/motors/cars/first-drive-gto-engineering-replica-of-ferrari-250-gt-swb-california-spyder-1234638004/",
           "image":"ferrari250.png",
           "likes": 100,
           "comments": ["Cena?"]
       }
   ]};

   var data = document.querySelector("#new-cars .newcars");
   var items = json1.items;
   for(let i=0; i<items.length; ++i) {
 
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
    a.href = items[i].carInfo;
    a.target="_blank";
    data.appendChild(a);
    var rev = document.createElement("a");
    rev.innerHTML = "Reviews";
    rev.href = items[i].reviewLink;
    rev.target="_blank";
    data.appendChild(rev);
    var lin = document.createElement("hr");
    data.appendChild(lin);
   }

   //prevzemanje info za Classic Screen Legends

   var json2 = { "items2":[
    {
        "model": "Dean's Chevrolet Impala 1967 (Supernatural)",
        "description": "Dean Winchester's 1967 Chevy Impala is one of the most iconic vehicles in TV history. With its dark, ominous appearance, it served as the main transportation for the Winchester brothers in their fight against supernatural forces. The black muscle car is equipped with an arsenal of weapons and has witnessed countless battles and emotional moments.",
        "price": "$50,000",
        "carInfo": "https://www.conceptcarz.com/s7220/chevrolet-impala-series.aspx",
        "reviewLink": "https://www.cars.com/research/chevrolet-impala-1967/consumer-reviews/",
        "image":"chevy.png",
        "likes": 0,
        "comments": []
    },
    {
        "model": "The Mystery Machine (Scooby-Doo)",
        "description": "The Mystery Machine is the iconic van that carries Scooby-Doo, Shaggy, Fred, Velma, and Daphne on their mystery-solving adventures. Its colorful, psychedelic design with flowers and bold lettering makes it an instantly recognizable pop culture icon. The van is more than just transportation; it's the team's mobile headquarters.",
        "price": "$50,000 ",
        "carInfo": "scoobvan.html",
        "reviewLink":"scoobreviews.html",
        "image":"scoob.png",
        "likes": 13,
        "comments": ["Jinkies!"]
    },
    {
        "model": " Honda S2000 (Suki's Car)",
        "description": "Suki's custom pink Honda S2000 from '2 Fast 2 Furious' is a standout in the Fast & Furious franchise. Known for its sleek design, bright pink color, and neon accents, this car reflects Suki’s bold and fearless personality. It's a symbol of speed, style, and defiance on the streets.",
        "price": "$40,000",
        "carInfo": "https://en.wikipedia.org/wiki/Honda_S2000",
        "reviewLink": "https://www.pistonheads.com/news/ph-driven/honda-s2000--ph-used-review/42038",
        "image":"suki.png",
        "likes": 26,
        "comments": [] 
    },

    {
        "model": "DeLorean (Back to the Future)",
        "description": "The DeLorean, modified with time-travel capabilities by Doc Brown in 'Back to the Future,' is one of the most famous cars in cinema history. Its stainless steel body, gull-wing doors, and futuristic design, combined with the flux capacitor, make it a symbol of adventure, time travel, and 80s nostalgia.",
        "price": "$25,000 ",
        "carTnIo": "https://en.wikipedia.org/wiki/DMC_DeLorean",
        "reviewLink": "https://www.thedrive.com/new-cars/42094/i-drove-a-1981-delorean-and-could-not-stop-smiling",
        "image":"delorean.png",
        "likes": 0,
        "comments": []
    },
    {
        "model": "1986 Fleetwood Bounder RV (The Krystal Ship - Breakin Bad)",
        "description": "Own a piece of TV history with this replica of the iconic RV from Breaking Bad. Known as the Krystal Ship, this 1986 Fleetwood Bounder served as Walter White and Jesse Pinkman’s mobile meth lab. With its weathered look and classic design, it’s a must-have for fans wanting a memorable piece of the show’s legacy.",
        "price": "$65,000 ",
        "carInfo": "https://www.jdpower.com/rvs/1986/bounder/m-34sb/3003094/specs",
        "reviewLink": "https://vanlivingforum.com/threads/opinions-on-the-fleetwood-bounder-and-other-class-as.10009/",
        "image":"bbvan.png",
        "likes": 0,
        "comments": ["Dali doagja so opremata?"]
    }
    
]};

var data2 = document.querySelector("#used-cars .oldcars");
var items2 = json2.items2

for(let j=0; j<items2.length; j++){
    var ime = document.createElement("h4");
    ime.innerHTML = items2[j].model;
    data2.appendChild(ime);  
    var opis = document.createElement("p");
    opis.innerHTML = items2[j].description;
    data2.appendChild(opis); 
    var cena = document.createElement("p");
    cena.innerHTML= items2[j].price;
    data2.appendChild(cena);  
    var a = document.createElement("a");
    a.innerHTML = "Read More";
    a.href = items2[j].carInfo;
    a.target="_blank";
    data2.appendChild(a)
    var rev = document.createElement("a");
    rev.innerHTML = "Reviews";
    rev.href = items2[j].reviewLink;
    rev.target="_blank";
    data2.appendChild(rev);  
    var lin = document.createElement("hr");
    data2.appendChild(lin);
}


//od delot za test vozenje prevzemanje iminja na modelite

var items1 = items.concat(items2);
const modelSelect = document.getElementById('car-model');

for(let k=0; k<items1.length; k++){
    const option = document.createElement('option');
    option.innerHTML = items1[k].model;
    modelSelect.appendChild(option);
}

 //za test drive
 document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn');
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            e.preventDefault();

            // kireme
            var sections = document.querySelectorAll('section');
            for (var j = 0; j < sections.length; j++) {
                sections[j].style.display = 'none';
            }

            // pokazuvame
            var testDriveSection = document.querySelector('#zakazitesvoznja');
            if (testDriveSection) {
                testDriveSection.style.display = 'block';
                testDriveSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

//mini instagram galerija 🤍 💖 🗑️

function createGallery(items) {
    const galleryContent = document.getElementById('minigram-content');
    
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        
        card.innerHTML = `
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.model}">
                <div class="card-body">
                    <h5 class="card-title">${item.model}</h5>
                    <button class="btn btn-outline-primary btn-sm like-button" data-index="${index}">
                        ${item.liked ? '💖' : '🤍'} <span class="like-count">${item.likes}</span>
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
        
        // dodavanje na postoeckite komentari
        const commentsContainer = card.querySelector('.comments-container');
        if (item.comments && item.comments.length > 0) {
            for (let commentIndex = 0; commentIndex < item.comments.length; commentIndex++) {
                const comment = item.comments[commentIndex];
                addCommentToDOM(commentsContainer, comment, index, commentIndex);
            }
        }

        // like event
        const likeButton = card.querySelector('.like-button');
        likeButton.addEventListener('click', function() {
            const index = this.dataset.index;
            
            if (items1[index].liked) {
                // ako e like-nata da se un-like-ne
                items1[index].likes--;
                items1[index].liked = false;
                this.classList.remove('btn-primary');
                this.classList.add('btn-outline-primary');
                this.innerHTML = `🤍 <span class="like-count">${items1[index].likes}</span>`;
            } else {
                // prv like ili ako se predomislil
                items1[index].likes++;
                items1[index].liked = true;
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
                this.innerHTML = `💖 <span class="like-count">${items1[index].likes}</span>`;
            }
        });
    }
    
    setupCommentEventListeners();
}

// postavuvanje na komentari
function setupCommentEventListeners() {
    var commentButtons = document.querySelectorAll('.add-comment');
    
    for (var i = 0; i < commentButtons.length; i++) {
            commentButtons[i].addEventListener('click', function() {
            var index = this.dataset.index;
            var card = this.closest('.card');
            var input = card.querySelector('.comment-input');
            var comment = input.value.trim();
            
            if (comment) {
                var commentsContainer = card.querySelector('.comments-container');
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
    }
}

function addCommentToDOM(container, comment, imageIndex, commentIndex) {
    var commentElement = document.createElement('div');
    commentElement.className = 'comment-item d-flex justify-content-between align-items-center py-1';
    commentElement.innerHTML = `
        <span class="comment-text">${comment}</span>
        <button class="btn btn-outline-danger btn-sm delete-comment" 
            data-image="${imageIndex}" 
            data-comment="${commentIndex}">🗑️</button>
    `;
    
    // brishenje komentari
    var deleteButton = commentElement.querySelector('.delete-comment');
    deleteButton.addEventListener('click', function() {
        var imageIndex = this.dataset.image;
        var commentIndex = this.dataset.comment;
        items1[imageIndex].comments.splice(commentIndex, 1); 
        commentElement.remove();
    });
    
    container.appendChild(commentElement);
}

document.addEventListener('DOMContentLoaded', function() {
    createGallery(items1);
});
