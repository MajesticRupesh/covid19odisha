var store_name = ["Sai Ganesh Medical Store", "Subham Medical Store", "Krushna Chandra Medical Store", "K.C.M. Medical Store", "Lucky Life Line Medical Store"];
var store_area = ["New Bus Stand", "MKCG Hospital Main Gate", "Courtpeta Junction", "Sano Bazar", "Aska Road"];
var phno = [["9437349129"],["9776616164"],["7008405266","9556564586"],["7077723649","8114996139"],["9438722050","9937150800"]];
var store_name_lower = [];
var store_area_lower = [];

var container = document.getElementById("container");
var count = store_name.length;      // count of all the cards to be created
var card = [];
var img = [];
var id = [];
var p = [[],[]];
var ph = [[],[]];
var wa = [[],[]];

function bodyload() {
    var i,j;

    for(i=0;i<count;i++) {
        store_name_lower[i] = store_name[i].toLowerCase();
        store_area_lower[i] = store_area[i].toLowerCase();
        card[i] = document.createElement("div");
        card[i].className = "card";
        $(card[i]).appendTo(container);

        img[i] = document.createElement("img");
        img[i].src = "med.png";
        img[i].height = "100";
        $(img[i]).appendTo(card[i]);

        id[i] = document.createElement("div");
        id[i].className = "id";
        $(id[i]).appendTo(card[i]);

        p[i]=[];
        for(j=0;j<2+phno[i].length;j++) {
            console.log(i+" "+j+"\n");
            p[i][j] = document.createElement("p");
            $(p[i][j]).appendTo(id[i]);
        }
        p[i][0].innerHTML = store_name[i];
        p[i][1].innerHTML = store_area[i];

        // create phone link
        ph[i] = [];
        for(j=0;j<phno[i].length;j++) {
            ph[i][j] = document.createElement("a");
            ph[i][j].className = "fa fa-phone";
            ph[i][j].href = "tel:"+ phno[i][j];
            ph[i][j].innerHTML = "&nbsp"+phno[i][j];
            ph[i][j].style.marginRight = "20px";
            $(ph[i][j]).appendTo(p[i][j+2]);
        }

        // create whatsapp link
        wa[i] = [];
        for(j=0;j<phno[i].length;j++) {
            wa[i][j] = document.createElement("a");
            wa[i][j].className = "fa fa-whatsapp";
            wa[i][j].href = "https://api.whatsapp.com/send?phone=91"+ phno[i][j];
            wa[i][j].innerHTML = "&nbsp"+phno[i][j];
            $(wa[i][j]).appendTo(p[i][j+2]);
        }
    }
}


function search() {
    var searchbar = $("#searchbar").val();
    
    for(var i=0;i<count;i++) {
        if(!store_name_lower[i].includes(searchbar.toLowerCase())) {
            if(!store_area_lower[i].includes(searchbar.toLowerCase())) {
                card[i].style.display = "none";
            }
            else {
                card[i].style.display = "block";
            }
        }
        else {
            card[i].style.display = "block";
        }
    }
}

function showall() {
    $("#searchbar").val("");
    for(var i=0;i<count;i++) {
        card[i].style.display = "block";
    }
}

document.getElementById("searchbar").addEventListener("keyup",pressHandler);

function pressHandler(e) {
    search();
}