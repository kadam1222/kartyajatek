let lista = ["kutya", "kutya", "sigma", "sigma", "cigi", "cigi", "chips", "chips"];
let szamom = 0;
let szo1 = "";
let szo2 = "";
let id1, id2;

let fodiv = document.getElementById("jatekter");

for (let i = 1; i <= 8; i++) {
    var random = Math.floor(Math.random() * lista.length);
    var kártya = document.createElement("div");
    var kártya_belso = document.createElement("div");
    var kártya_elolap = document.createElement("div");
    var kártya_hatulap = document.createElement("div");
    kártya.className = "kartya";
    kártya_belso.className = "kartya-belso";
    kártya_elolap.className = "kartya-elolap";
    kártya_hatulap.className = "kartya-hatulap";
    kártya_hatulap.innerText = i;

    kártya_elolap.innerText = lista[random];
    lista.splice(random, 1);
    kártya.id = i;

   
    kártya.addEventListener("click", function () {

        if (this.classList.contains('disabled')) {
            return;
        }
        const cardInner = this.querySelector('.kartya-belso');
        cardInner.classList.toggle('flipped');
        szamom++;

        if (szamom == 1) {
            szo1 = this.querySelector('.kartya-elolap').innerText; 
            id1 = this; 
        }

        if (szamom == 2) {
            szo2 = this.querySelector('.kartya-elolap').innerText; 
            id2 = this; 
            
            if (szo1 == szo2) {
                id1.classList.add('disabled');
                id2.classList.add('disabled');
                szamom = 0; 
                
            } else {
                
                setTimeout(function () {
                    fordit(id1);  
                    fordit(id2);  
                }, 1000); 
                szamom = 0; 
            }
        }
    });

    fodiv.appendChild(kártya);
    kártya.appendChild(kártya_belso);
    kártya_belso.appendChild(kártya_elolap);
    kártya_belso.appendChild(kártya_hatulap);
}

function fordit(kártya) {
    const cardInner = kártya.querySelector('.kartya-belso');
    cardInner.classList.toggle('flipped');
}
