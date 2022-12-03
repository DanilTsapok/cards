 function auth(){
   let name = document.getElementById('name-user').value;
    document.getElementById('name').innerHTML = name;
    document.getElementById('point2').innerHTML = 0;
    document.getElementById('point1').innerHTML = 0;
    
}
    let sum1 = 0;
    let sum2 = 0;  
    let img = document.createElement("img");
    let img1 = document.createElement("img");
    let img2= document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");
    let img5 = document.createElement("img");
    let img6 = document.createElement("img");
    let img7 = document.createElement("img");
    let img8 = document.createElement("img");
    img.src="6.png";
    img1.src="7.png";
    img2.src="8.png";
    img3.src="9.png";
    img4.src="10.png";
    img5.src="valet.png";
    img6.src="dama.png";
    img7.src="korol.png";
    img8.src="tyz.png";
    img.width="130";
    img.height="200";
    img1.width="130";
    img1.height="200";
    img2.width="130";
    img2.height="200";
    img3.width="130";
    img3.height="200";
    img4.width="130";
    img4.height="200";
    img5.width="130";
    img5.height="200";
    img6.width="130";
    img6.height="200";
    img7.width="130";
    img7.height="200";
    img8.width="130";
    img8.height="200";
function func(){
    let div0 =document.createElement('div');
    div0.classList.add('Drive1');
    let div = document.createElement('div');
    div.classList.add('Drive');
    div0.prepend(div);


    // let div1 = document.createElement('div');
    // div1.classList.add('Drive3');
    // let div2 = document.createElement('div');
    // div2.classList.add('Drive2');
    // div1.prepend(div2);


    
    div0.style.height='200';
    div0.style.width='100%'
    div.style.width='130';
    div.style.height='200';
    div.style.visibility='hidden';
    div0.style.position='absolute'
    div0.style.display='flex';
    div0.style.justifyContent="center";
    div0.style.alignItems="center";

   
    // div1.style.position='absolute'
    // div1.style.display='flex';
    // div1.style.justifyContent="center";
    // div1.style.alignItems="center";
    // div1.style.width='130';
    // div1.style.height='200';
    // div1.style.marginLeft="30%"
    document.body.append(div0);
    // document.body.append(div1);
let img_array=[img, img1, img2, img3,img4,img5,img6,img7,img8]
    let a = Math.floor(Math.random()*img_array.length);
    let b = Math.floor(Math.random()*img_array.length);
    if (a == 0){
        div.appendChild(img);
        div.style.visibility='visible';
    }
    if(a == 1){
        div.appendChild(img1);
        div.style.visibility='visible';
    }if(a == 2){
        div.appendChild(img2);
        div.style.visibility='visible';
    }if(a == 3){
        div.appendChild(img3);
        div.style.visibility='visible';
    }if(a == 4){
        div.appendChild(img4);
        div.style.visibility='visible';
    }if(a == 5){
        div.appendChild(img5);
        div.style.visibility='visible';
    }if(a == 6){
        div.appendChild(img6);
        div.style.visibility='visible';
    }if(a == 7){
        div.appendChild(img7);
        div.style.visibility='visible';
    }if(a == 8){
        div.appendChild(img8);
        div.style.visibility='visible';
    }
    if (b == 0){
        div.appendChild(img);
        div.style.visibility='visible';
    }
    if(b == 1){
        div.appendChild(img1);
        div.style.visibility='visible';
    }if(b == 2){
        div.appendChild(img2);
        div.style.visibility='visible';
    }if(b == 3){
        div.appendChild(img3);
        div.style.visibility='visible';
    }if(b == 4){
        div.appendChild(img4);
        div.style.visibility='visible';
    }if(b == 5){
        div.appendChild(img5);
        div.style.visibility='visible';
    }if(b == 6){
        div.appendChild(img6);
        div.style.visibility='visible';
    }if(b == 7){
        div.appendChild(img7);
        div.style.visibility='visible';
    }if(b == 8){
        div.appendChild(img8);
        div.style.visibility='visible';
    }
    if(a>b){
      sum1 += 1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }if(a<b){
      sum2 += 1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }if (a==b){
      sum1+=1;
      sum2+=1;
      document.getElementById('point1').innerHTML = sum1; 
      document.getElementById('point2').innerHTML = sum2; 
   }
      let btn = document.querySelector('#btn');
    if(document.getElementById('point1').innerHTML == 21 || document.getElementById('point2').innerHTML == 21){
     btn.setAttribute('disabled', true);
   if(document.getElementById('point1').innerHTML>document.getElementById('point2').innerHTML){
    let user = document.querySelector('#name');
      user.setAttribute('style', ' color: yellow;',)
   } else{
      user = document.querySelector('#comput');
      user.setAttribute('style', ' color: yellow;')
   }
   } 
}





  


  
      

