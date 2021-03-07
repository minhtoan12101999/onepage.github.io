// function IntervalTimer(callback, interval) {
//     var timerId, startTime, remaining = 0;
//     var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed

//     this.pause = function () {
//         if (state != 1) return;

//         remaining = interval - (new Date() - startTime);
//         window.clearInterval(timerId);
//         state = 2;
//     };

//     this.resume = function () {
//         if (state != 2) return;

//         state = 3;
//         window.setTimeout(this.timeoutCallback, remaining);
//     };

//     this.timeoutCallback = function () {
//         if (state != 3) return;

//         callback();

//         startTime = new Date();
//         timerId = window.setInterval(callback, interval);
//         state = 1;
//     };

//     startTime = new Date();
//     timerId = window.setInterval(callback, interval);
//     state = 1;
// }
$(document).ready(function () {
    $(window).on('load', function () {
        $(".baoloading1").delay(1000).fadeOut(400);
        $(".baoloading").delay(1000).fadeOut(400);
    })
    $(".photo").flickity(
        {
            freeScroll: true,
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true
        }
    )


});

let scrollup = document.querySelector(".backtotop");
scrollup.addEventListener("click", function () {
    e.preventDefault();
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    })
})
let lang = document.querySelectorAll(".lang__ul ul li a");
let langli = document.querySelectorAll(".lang__ul ul li ");
let langtext = document.querySelector(".lang__text_sub");
console.log(langtext.innerHTML);
lang.forEach((e, item) => {
    e.addEventListener("click", function () {
        var bien = e.innerText;
        langtext.innerText = bien;
        lang.forEach((e, item) => {
            let doix = langtext.innerText;
            console.log(doix, e.innerText);
            if (doix === e.innerText) {
                langli.innerHTML = " ";
            }
        })
    })
});









let scrollmiddo = document.querySelector(".back-to-top")
scrollmiddo.addEventListener("click", function () {
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    })
})

function backtotop() {
    let scrolltop = document.querySelector("html").scrollTop;
    if (scrolltop > 600) {
        scrollmiddo.style.display = "block";
    }
    else {
        scrollmiddo.style.display = "none";
    }
}
backtotop();
window.addEventListener("scroll", backtotop);

let slider = document.querySelector(".slider");
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    let scrolltop = document.querySelector("html").scrollTop;
    if (scrolltop > slider.offsetHeight - header.offsetHeight) {
        header.style.background = "black";
    }
    else {
        header.style.background = "transparent";
    }
})
let play = document.querySelectorAll(".video .play__button");
let videoiframe = document.querySelector("#video-iframe");
console.log(videoiframe);
play.forEach((e, item) => {
    e.addEventListener("click", function () {
        let videoSrc = this.getAttribute('data-video-src');
        console.log(videoSrc);
        videoiframe.src = "https://www.youtube.com/embed/" + videoSrc + "?autoplay=1";
        document.querySelector(".pop-video").style.display = "flex";
    })
})
document.querySelector(".pop-video .clone").addEventListener("click", function () {
    document.querySelector(".pop-video").style.display = "none";
    videoiframe.src = "";
})
let slideritem = document.querySelectorAll(".slider__item");
let dem = 0;
let slidernumber = document.querySelector('.slider .number')
let sliderDost = document.querySelectorAll('.slider .dotted li')





document.querySelector(".slider .--pev").addEventListener("click", function () {
    if (dem === 0) {
        sliderto(slideritem.length - 1);
        return;
    }
    if (dem > 0) {
        sliderto(dem - 1)
        // console.log(dem);
        // slideritem[dem].classList.remove('active');
        // slideritem[dem - 1].classList.add('active');
        // sliderDost[dem].classList.remove("is-selected");
        // dem--;
        // sliderDost[dem].classList.add("is-selected");
    }
    slidernumber.innerHTML = (dem + 1).toString().padStart(2, "0");
    if (dem == 0) {
        // console.log(dem);
        // // slideritem[dem].classList.remove('active');
        // // slideritem[dem - 1].classList.add('active');
        // dem--;
    }

    else {

    }
})

document.querySelector(".slider .--next").addEventListener("click", function () {
    if (dem === slideritem.length - 1) {
        sliderto(0);
        return;
    }
    if (dem < slideritem.length - 1) {
        sliderto(dem + 1)
        // slideritem[dem].classList.remove('active');
        // slideritem[dem + 1].classList.add('active');
        // sliderDost[dem].classList.remove("is-selected");
        // dem++;
        // sliderDost[dem].classList.add("is-selected");
    }

    slidernumber.innerHTML = (dem + 1).toString().padStart(2, "0");

})
function sliderto(to) {
    slideritem[dem].classList.remove('active');

    slideritem[to].classList.add('active');
    // console.log(to, dem)

    sliderDost[dem].classList.remove("is-selected");

    sliderDost[to].classList.add("is-selected");

    dem = to;
    slidernumber.innerHTML = (to + 1).toString().padStart(2, "0");
}
sliderDost.forEach((e, i) => {
    e.addEventListener('click', function () {
        sliderto(i);
    })
})




// var timer = new IntervalTimer(function () {
//     if (dem < slideritem.length - 1) {
//         sliderto(dem + 1);
//     }
//     else {
//         sliderto(0);
//     }
// }, 1000);

// document.querySelector(".slider").addEventListener("mouseenter", function () {
//     timer.pause();
// })
// document.querySelector(".slider").addEventListener("mouseleave", function () {
//     timer.resume();
// })





let array = [];
//Bước 1 : lấy ra các div và các thẻ cần bấm
let downproducts = document.querySelector(".products");
let downvideo = document.querySelector(".video");
let downabout = document.querySelector(".about");
let downgallery = document.querySelector(".gallery");
let downphotos = document.querySelector(".photo");
let downnew = document.querySelector(".new");
let donwinfo = document.querySelector(".info");
let link1 = document.querySelector(".nav ul li:nth-child(1)");
let link2 = document.querySelector(".nav ul li:nth-child(2) ");
let link3 = document.querySelector(".nav ul li:nth-child(3) ");
let link4 = document.querySelector(".nav ul li:nth-child(4) ");
let link5 = document.querySelector(".nav ul li:nth-child(5) ");
let link6 = document.querySelector(".nav ul li:nth-child(6) ");
let link7 = document.querySelector(".nav ul li:nth-child(7) ");
//bước 2: xác dịnh vị trí cần add class nằm trong khoảng nào 
window.addEventListener("scroll", function () {
    let scrolltop1 = document.querySelector("html").scrollTop;

    if (scrolltop1 > downproducts.offsetTop - header.offsetHeight - 1 && scrolltop1 < downvideo.offsetTop - header.offsetHeight - 1) {
        link1.classList.add('activen');
        link2.classList.remove("activen");

    }
    else if (scrolltop1 > downvideo.offsetTop - header.offsetHeight - 1 && scrolltop1 < donwinfo.offsetTop - header.offsetHeight - 1) {
        link1.classList.remove("activen");
        link2.classList.add("activen");
        link3.classList.remove("activen");
    }
    else if (scrolltop1 > donwinfo.offsetTop - header.offsetHeight - 1 && scrolltop1 < downabout.offsetTop - header.offsetHeight - 1) {
        link2.classList.remove("activen");
        link3.classList.add("activen");
        link4.classList.remove("activen");
    }
    else if (scrolltop1 > downabout.offsetTop - header.offsetHeight - 1 && scrolltop1 < downgallery.offsetTop - header.offsetHeight - 1) {
        link3.classList.remove("activen");
        link4.classList.add("activen");
        link5.classList.remove("activen");
    }
    else if (scrolltop1 > downgallery.offsetTop - header.offsetHeight - 1 && scrolltop1 < downnew.offsetTop - header.offsetHeight - 1) {
        link4.classList.remove("activen");
        link5.classList.add("activen");
        link6.classList.remove("activen");
    }
    else if (scrolltop1 > downnew.offsetTop - header.offsetHeight - 1 && scrolltop1 < downphotos.offsetTop) {
        link5.classList.remove("activen");
        link6.classList.add("activen");
    }
    else {
        link1.classList.remove("activen");
        link2.classList.remove("activen");
        link3.classList.remove("activen");
        link4.classList.remove("activen");
        link5.classList.remove("activen");
    }
})
link1.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: downproducts.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
})

link2.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: downvideo.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })

})
link3.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: donwinfo.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
})
link4.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: downabout.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
})
link5.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: downgallery.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
})
link6.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: downnew.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    })
})
var nut = document.querySelectorAll(".lang__ul ul li a");
var doi = document.querySelector('.lang__text');

nut.forEach((item, key) => {
    item.addEventListener("click", function (e) {
        doi.innerHTML = item.innerHTML;
    })
})




//-------------------------

var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

$(window).load(function () {
    initPhotoSwipeFromDOM('.carousel-img');
});

$(document).ready(function () {
    $(".btn-menu").on("click", function () {
        $(".btn-menu").toggleClass("active");
    });
});
