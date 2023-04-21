const ham = document.querySelector('#ham');
const popMenu = document.querySelector('.ham-menu');
const otherSections = document.querySelectorAll('.other-parts');

function hambugerDisplay() {
  popMenu.classList.toggle('ham-gone');
  for (let i = 0; i < otherSections.length; i += 1) {
    otherSections[i].classList.toggle('show-plenty');
  }
}

ham.addEventListener('click', hambugerDisplay);

const hamClose = document.querySelector('#ham-close');

function hambugerHide() {
  popMenu.classList.toggle('ham-gone');
  for (let i = 0; i < otherSections.length; i += 1) {
    otherSections[i].classList.toggle('ham-gone');
  }
}

hamClose.addEventListener('click', hambugerHide);

const speakImg1 = document.querySelector('#speak-img1');
const speakName1 = document.querySelector('#speak-name1');
const speakQuali1 = document.querySelector('#speak-quali1');
const speakInfo1 = document.querySelector('#speak-info1');
const speakImg2 = document.querySelector('#speak-img2');
const speakName2 = document.querySelector('#speak-name2');
const speakQuali2 = document.querySelector('#speak-quali2');
const speakInfo2 = document.querySelector('#speak-info2');
const speakImg3 = document.querySelector('#speak-img3');
const speakName3 = document.querySelector('#speak-name3');
const speakQuali3 = document.querySelector('#speak-quali3');
const speakInfo3 = document.querySelector('#speak-info3');
const speakImg4 = document.querySelector('#speak-img4');
const speakName4 = document.querySelector('#speak-name4');
const speakQuali4 = document.querySelector('#speak-quali4');
const speakInfo4 = document.querySelector('#speak-info4');
const speakImg5 = document.querySelector('#speak-img5');
const speakName5 = document.querySelector('#speak-name5');
const speakQuali5 = document.querySelector('#speak-quali5');
const speakInfo5 = document.querySelector('#speak-info5');
const speakImg6 = document.querySelector('#speak-img6');
const speakName6 = document.querySelector('#speak-name6');
const speakQuali6 = document.querySelector('#speak-quali6');
const speakInfo6 = document.querySelector('#speak-info6');

const speakerObject1 = [
  {
    image: 'images/speaker-1.jpg',
    name: 'Samuel Benard',
    qualifications: 'Risk analyst at International Fund for Agricultural Development',
    info: 'He worked with farmers and agricultural businesses to improve their risk management practices, providing training and consultation.',
  },

  {
    image: 'images/speaker-4.jpg',
    name: 'Akintunde Babalola',
    qualifications: 'Ph.D. in Horticulture with expertise in urban agriculture and sustainable food systems.',
    info: 'Akin published several articles on horticultural science in top-tier academic journals, which have been widely cited and contributed to advances in the field.',
  },

  {
    image: 'images/speaker5.jpg',
    name: 'Gregory Hanson',
    qualifications: 'Master of Science in Agricultural Engineering with experience in precision farming technologies.',
    info: 'He designed and implemented innovative machinery and equipment for soil preparation, planting, and harvesting,',
  },

  {
    image: 'images/speaker-2.jpg',
    name: 'Lilian Green',
    qualifications: 'Doctor of Veterinary Medicine with a specialization in large animal health and production.',
    info: 'Lilian Developed a new surgical technique for treating joint injuries in horses, resulting in faster recovery times and improved mobility for the animals',
  },

  {
    image: 'images/speaker-3.jpg',
    name: 'Mary Macaulay',
    qualifications: 'Ph.D. in Agricultural Economics with expertise in food and agricultural policy.',
    info: 'She conducted research on the impact of trade policies on agricultural production and exports',
  },

  {
    image: 'images/speaker-6.jpg',
    name: 'Kemi Anthony',
    qualifications: 'Bachelor of Science in Agricultural Communications with experience in agricultural journalism and media relations.',
    info: 'He collaborated with agricultural companies to develop effective marketing campaigns that increased sales and brand awareness.',
  },
];

const firstPart = document.querySelector('.about-content');
const buttonPart = document.querySelector('.more-speakers');
const speakerCount = 3
const speakerNum = 0
let showMore = false
const speaks = [];
for (let i = speakerNum; i < speakerObject1.length; i++) {
  const {image, name, qualifications, info} = speakerObject1[i];
   speaks.push({image, name, qualifications, info})

  if (speaks.length < speakerCount) {

    const div = document.createElement('div');
    div.classList.add('speaker-card');
    const speaksImage = document.createElement('img');
    speaksImage.classList.add('speaker-image');
    const div1 = document.createElement('div');
    div1.classList.add('speaker-info');
    const speaksName = document.createElement('h5');
    speaksName.classList.add('speaker-name');
    const speaksQ = document.createElement('p')
    speaksQ.classList.add('speaker-qualification','main-color');
    const hrL = document.createElement('hr')
    hrL.classList.add('speaker-hr')
    const speaksInfo = document.createElement('p')
    speaksInfo.classList.add('small-text');
  
    speaksImage.src = speakerObject1[i].image
    speaksName.textContent = speakerObject1[i].name
    speaksQ.textContent = speakerObject1[i].qualifications
    speaksInfo.textContent = speakerObject1[i].info
  
    div.appendChild(speaksImage);
    div.appendChild(div1);
    div1.appendChild(speaksName);
    div1.appendChild(speaksQ);
    div1.appendChild(hrL);
    div1.appendChild(speaksInfo);
  
    firstPart.appendChild(div)
    buttonPart.parentNode.insertBefore(div, buttonPart)
  }
  else {
    
    const div = document.createElement('div')
    div.classList.add('show-plenty')
    div.classList.add('speaker-card');
    const speaksImage = document.createElement('img');
    speaksImage.classList.add('speaker-image');
    const div1 = document.createElement('div');
    div1.classList.add('speaker-info');
    const speaksName = document.createElement('h5');
    speaksName.classList.add('speaker-name');
    const speaksQ = document.createElement('p')
    speaksQ.classList.add('speaker-qualification','main-color');
    const hrL = document.createElement('hr')
    hrL.classList.add('speaker-hr')
    const speaksInfo = document.createElement('p')
    speaksInfo.classList.add('small-text');
  
    speaksImage.src = speakerObject1[i].image
    speaksName.textContent = speakerObject1[i].name
    speaksQ.textContent = speakerObject1[i].qualifications
    speaksInfo.textContent = speakerObject1[i].info
  
    div.appendChild(speaksImage);
    div.appendChild(div1);
    div1.appendChild(speaksName);
    div1.appendChild(speaksQ);
    div1.appendChild(hrL);
    div1.appendChild(speaksInfo);
  
    firstPart.appendChild(div)
    buttonPart.parentNode.insertBefore(div, buttonPart)
  }
  


}

const moreButton = document.querySelector('#show-more');
function showRest () {
  showMore = !showMore;

  if (showMore) {
    const reveal = firstPart.querySelectorAll('.show-plenty')

    reveal.forEach(function(element) {
      element.classList.toggle('show-plenty')
    })
  }
}

moreButton.addEventListener('click', showRest)
