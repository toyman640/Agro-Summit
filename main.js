const ham = document.querySelector('#ham');
const popMenu = document.querySelector('.ham-menu');
let otherSections = document.querySelectorAll('.other-parts');

function hambugerDisplay () {
    popMenu.classList.toggle('ham-gone');
    for (let i = 0; i < otherSections.length; i += 1) {
        otherSections[i].classList.toggle('rest-gone');
    }
    
}

ham.addEventListener('click', hambugerDisplay);

const hamClose = document.querySelector('#ham-close')

function hambugerHide () {
    popMenu.classList.toggle('ham-gone');
    for (let i = 0; i < otherSections.length; i += 1) {
        otherSections[i].classList.toggle('ham-gone');
    } 
}

hamClose.addEventListener('click', hambugerHide);


let speakSec = document.querySelector('.desk-card')
const speakImg1 = document.querySelector('#speak-img1')
const speakName1 = document.querySelector('#speak-name1')
const speakQuali1 = document.querySelector('#speak-quali1')
const speakInfo1 = document.querySelector('#speak-info1')

const speakerObject = {
    one: {
        image : 'images/speaker-1.jpg',
        name : 'Samuel Benard',
        qualifications : 'Risk analyst at International Fund for Agricultural Developmen',
        info : '',
    },

    two: {
        image : 'images/speaker-1.jpg',
        name : 'Akintunde Babalola',
        qualifications : 'Ph.D. in Horticulture with expertise in urban agriculture and sustainable food systems.',
        info : '',
    },

    three: {
        image : 'images/speaker-1.jpg',
        name : 'Gregory Hanson',
        qualifications : 'Master of Science in Agricultural Engineering with experience in precision farming technologies.',
        info : '',
    },

    four: {
        image : 'images/speaker-1.jpg',
        name : 'Lilian Green',
        qualifications : 'Doctor of Veterinary Medicine with a specialization in large animal health and production.',
        info : '',
    },

    five: {
        image : 'images/speaker-1.jpg',
        name : 'Mary Macaulay',
        qualifications : 'Ph.D. in Agricultural Economics with expertise in food and agricultural policy.',
        info : ''
    },

    six: {
        image : 'images/speaker-1.jpg',
        name : 'Kemi Anthony',
        qualifications : 'Bachelor of Science in Agricultural Communications with experience in agricultural journalism and media relations.',
        info : '',
    }
}

const speakerImage1 = speakerObject.one.image;
const speakerName1 = speakerObject.one.name;
const speakerQuali1 = speakerObject.one.qualifications;
const speakerInfo1 = speakerObject.one.info;

speakName1.innerHTML = speakerName1;
speakImg1.src = speakerImage1;
speakQuali1.innerHTML = speakerQuali1;
speakInfo1.innerHTML = speakerInfo1;



