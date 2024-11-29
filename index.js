let lista = ["kutya","kutya","sigma", "sigma", "cigi", "cigi","chips", "chips"]
let szamom = 0;
let szo1="";

let fodiv = document.getElementById("jatekter");
for(let i=1; i<9; i++){
    let random= Math.floor(Math.random() * lista.length);
    let kártya = document.createElement("div");
    let kártya_belso= document.createElement("div");
    let kártya_elolap= document.createElement("div");
    let kártya_hatulap= document.createElement("div");
    kártya.className="kartya";
    kártya_belso.className="kartya-belso";
    kártya_elolap.className = "kartya-elolap";
    kártya_hatulap.className= "kartya-hatulap";
    kártya_hatulap.innerText = i
    
    kártya_elolap.innerText= lista[random]
    lista.splice(random,1);

    kártya.addEventListener("click",function (){ 
        const cardInner =this.querySelector('.kartya-belso');
        cardInner.classList.toggle('flipped');
        szamom++;
        if(szamom==2 && szo1 == this.innerText){
            
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
