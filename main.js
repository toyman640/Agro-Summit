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


let speakSec = document.querySelector('.desk-card');
const speakImg1 = document.querySelector('#speak-img1');
const speakName1 = document.querySelector('#speak-name1')
const speakQuali1 = document.querySelector('#speak-quali1')
const speakInfo1 = document.querySelector('#speak-info1')
const speakImg2 = document.querySelector('#speak-img2')
const speakName2 = document.querySelector('#speak-name2')
const speakQuali2 = document.querySelector('#speak-quali2')
const speakInfo2 = document.querySelector('#speak-info2')
const speakImg3 = document.querySelector('#speak-img3')
const speakName3 = document.querySelector('#speak-name3')
const speakQuali3 = document.querySelector('#speak-quali3')
const speakInfo3= document.querySelector('#speak-info3')
const speakImg4 = document.querySelector('#speak-img4')
const speakName4 = document.querySelector('#speak-name4')
const speakQuali4 = document.querySelector('#speak-quali4')
const speakInfo4 = document.querySelector('#speak-info4')
const speakImg5 = document.querySelector('#speak-img5')
const speakName5 = document.querySelector('#speak-name5')
const speakQuali5 = document.querySelector('#speak-quali5')
const speakInfo5 = document.querySelector('#speak-info5')
const speakImg6 = document.querySelector('#speak-img6')
const speakName6 = document.querySelector('#speak-name6')
const speakQuali6 = document.querySelector('#speak-quali6')
const speakInfo6 = document.querySelector('#speak-info6')

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

const speakerImage2 = speakerObject.two.image;
const speakerName2 = speakerObject.two.name;
const speakerQuali2 = speakerObject.two.qualifications;
const speakerInfo2 = speakerObject.two.info;

speakName2.innerHTML = speakerName2;
speakImg2.src = speakerImage2;
speakQuali2.innerHTML = speakerQuali2;
speakInfo2.innerHTML = speakerInfo2;

const speakerImage3 = speakerObject.three.image;
const speakerName3 = speakerObject.three.name;
const speakerQuali3 = speakerObject.three.qualifications;
const speakerInfo3 = speakerObject.three.info;

speakName3.innerHTML = speakerName3;
speakImg3.src = speakerImage3;
speakQuali3.innerHTML = speakerQuali3;
speakInfo3.innerHTML = speakerInfo3;

const speakerImage4 = speakerObject.four.image;
const speakerName4 = speakerObject.four.name;
const speakerQuali4 = speakerObject.four.qualifications;
const speakerInfo4 = speakerObject.four.info;

speakName4.innerHTML = speakerName4;
speakImg4.src = speakerImage4;
speakQuali4.innerHTML = speakerQuali4;
speakInfo4.innerHTML = speakerInfo4;

const speakerImage5 = speakerObject.five.image;
const speakerName5 = speakerObject.five.name;
const speakerQuali5 = speakerObject.five.qualifications;
const speakerInfo5 = speakerObject.five.info;

speakName5.innerHTML = speakerName5;
speakImg5.src = speakerImage5;
speakQuali5.innerHTML = speakerQuali5;
speakInfo5.innerHTML = speakerInfo5;

const speakerImage6 = speakerObject.six.image;
const speakerName6 = speakerObject.six.name;
const speakerQuali6 = speakerObject.six.qualifications;
const speakerInfo6 = speakerObject.six.info;

speakName6.innerHTML = speakerName6;
speakImg6.src = speakerImage6;
speakQuali6.innerHTML = speakerQuali6;
speakInfo6.innerHTML = speakerInfo6;

const showSpeakers = document.querySelector('#show-more');
const otherSpeakers = document.querySelector('.play-part');

function displayMore () {
  otherSpeakers.classList.toggle('ham-gone');
}

showSpeakers.addEventListener('click', displayMore);

