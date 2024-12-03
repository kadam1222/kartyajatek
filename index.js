let lista = ["kutya","kutya","sigma", "sigma", "cigi", "cigi","chips", "chips"]
let szamom = 0;
let szo1="";
let szo2="";
let lista_hossz=lista.length;

let fodiv = document.getElementById("jatekter");
for(let i=1; i<9; i++){
    var random= Math.floor(Math.random() * lista.length);
    var kártya = document.createElement("div");
    var kártya_belso= document.createElement("div");
    var kártya_elolap= document.createElement("div");
    var kártya_hatulap= document.createElement("div");
    kártya.className="kartya";
    kártya_belso.className="kartya-belso";
    kártya_elolap.className = "kartya-elolap";
    kártya_hatulap.className= "kartya-hatulap";
    kártya_hatulap.innerText = i
    
    kártya_elolap.innerText= lista[random]
    lista.splice(random,1);
    kártya.id ="fordit"+i; 
    kártya.addEventListener("click",function (){ 
        
        
        const cardInner =this.querySelector('.kartya-belso');
        cardInner.classList.toggle('flipped');
        szamom++;

        if(szamom==1){
            szo1=this.innerText;
            var result = szo1.slice(0,szo1.length-1)
            var id1 = this.id;
        }
        if(szamom==2){
            szo2=this.innerText;
            var result2 = szo2.slice(0,szo1.length-1)
            var id2 = this.id;
        }
        if(result == result2){
            szamom=0;
            document.getElementById(id1).className.remove('flipped');
            document.getElementById(id2).className.remove('flipped');
            
        }
        if(szamom==2 && result != result2){
            
            /*cardInner =document.getElementById(id1).querySelector('.kartya-belso');
            cardInner.classList.toggle('flipped');

            cardInner =document.getElementById(id2).querySelector('.kartya-belso');
            cardInner.classList.toggle('flipped');
            szamom=0;*/
            
        }
      })
    fodiv.appendChild(kártya);
    kártya.appendChild(kártya_belso);
    kártya_belso.appendChild(kártya_elolap);
    kártya_belso.appendChild(kártya_hatulap);
}

function parok(){
    if( szamom == 2 ){
        
    }
}
