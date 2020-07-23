var imageSource = [
'./images/4.png',
'./images/1.jpg',
'./images/2.jpg',
'./images/3.jpg',
];
var modal = document.getElementById('modal');
var modal2 = document.getElementById('image');
var newImage = document.createElement('img');
var closeBtn = document.createElement('button');

newImage.setAttribute('class', 'modal-img');
closeBtn.setAttribute('class', 'modal-btn');

closeBtn.innerHTML = 'X';
modal2.appendChild(closeBtn);



for (var i=0; i<imageSource.length; i++){

   var image = document.createElement('img');
    image.src = imageSource[i];
    image.setAttribute('class', 'img');
    modal.appendChild(image);
    
    image.addEventListener('click', function(){
        modal2.appendChild(newImage);
        modal.style.display = 'none';
        newImage.src = this.src;
        modal2.style.display = 'flex'
    });
    closeBtn.addEventListener('click', function(){
        modal2.style.display = 'none'
        modal.style.display = 'flex';
    });
}