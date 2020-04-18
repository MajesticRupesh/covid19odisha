var doc_name = ["DR.P.C PATRA","DR.S MANMADHAA RAO","DR.K SASKAR RAO","DR.N HIMANSU CHOUDHURY","DR.PRAVEEN SUBUDHI","DR.PRADYUT RATH","DR.AMIT KUMAR MOHANTY","DR.SAGAR PARIDA","DR.MANOJ KUMAR ONKAR","DR.R.C CHAU PATNAIK","DR.PRIYANSHU PRADHAN","DR.SUNIL KUMAR KOTA","DR.SARAT CH. MOHANTY","DR.J BHARATUDU","DR.D.J.J SWAMY","DR.PRIYAJEET PANIGRAHY","DR.BIBHUKESH PANIGRAHY","DR.PRAMOD AGRAWAL","DR.PRATYUSH RAY","DR.P SAMINA","DR.SURYAKANTA JAYASINGH","DR.AKSHYA KUMAR ROUT","DR.B.N.R SUBUDHI","DR.E VENKATA KRISHNA","DR.LALIT MOHAN RATH","DR.R.K PANDA","DR.PITABAS SAHU","DR.MAHESH RATH","DR.ANTARYAMI SAHU","DR.SURAJIT NAYAK","DR.KARUNAKARA PADHY","DR.MIHIR KUMAR BAL","DR.A.V RANGANADHAM","DR.ROSHAN KUMAR","DR.E PADMANABHA RAO","DR.SUMAN DAS","DR.MAHESH RATH","DR.M.V NARASIMHAM","DR.ASHOK KUMAR OTTA","DR.S MOHAN RAO","DR.ANIL K. PATRO","DR.K.K PANIIGRAHY","DR.V.R RAJU","DR.R.K PANDA","DR.KANHU PARO","DR.JYOTI P. PATTNAIK","DR.V CHAKRADHAR RAJU","DR.M SIVA P. RAO","DR.P GOPAL RAO","DR.V.V.L.N RAO","DR.SOVAN ROUT"];
var doc_field = ["MEDICINE SPECIALIST DIABETOLOGIST","OPHTHALMOLOGIST EYE SPECIALIST","ORTHOPEDICIAN","EAR, NOSE, THROAT SPECIALIST","OPHTHALMOLOGIST/ EYE SPECIALIST","MEDICINE SPECIALIST"," "," ","MEDICINE SPECIALIST & DIABETOLOGIST"," "," ","ENDOCRINOLOGIST & DIABETES THYROID SPECIALIST","MEDICINE SPECIALIST","MEDICINE SPECIALIST","PEDIATRICIAN","EAR, NOSE, THROAT SPECIALIST","DENTIST","MEDICINE SPECIALIST & DIABETOLOGIST","GYNECOLOGIST","SKIN & HAIR","OBS N GYN","PLASTIC SURGEON & WOUND SPECIALIST","OPHTHALMOLOGIST/ EYE SPECIALIST","DIABETOLOGIST & GP"," "," ","HOMOEOPATHY PHYSICIAN","DIABETES & THYROID"," "," ","CARDIAC SURGEON","EYE SPECIALIST","ORTHOPEDICIAN","PEDIATRICIAN"," ","RADIATION ONCOLOGIST","DIABETES & THYROID"," "," "," ","NEPHROLOGIST & KIDNEY TRANSPLANT PHYSICIAN","UROLOGIST","GENERAL PRACTITIONER","GENERAL PRACTITIONER","RADIATION ONCOLOGIST","PHYSICIAN","GENERAL PRACTITIONER","GENERAL PRACTITIONER","PEDIATRICIAN","GENERAL PRACTITIONER",""];
var timimg = ["9AM - 12PM","9AM - 9PM","9AM - 9PM","10AM - 1PM","9AM - 1PM","10AM - 6PM","9AM - 12MIDNIGHT","9AM - 10PM","6PM - 7PM","10AM - 12PM, 6PM - 8PM","9AM - 9PM","2.30PM - 8.30PM","10AM - 1PM","10AM - 1PM","11AM - PM","10AM - 1PM","10AM - 1PM","11AM - 2PM","11AM - 2PM, 4PM - 7PM","2PM - 4PM","9AM - 9PM","10AM - 1PM","9AM - 9PM","6PM - 9PM","4PM - 9PM","10AM - 1PM","10AM - 2PM, 6PM - 9PM","9AM - 1PM, 6PM - 9PM","6PM - 9PM","9AM - 9PM","10AM - 2PM, 5PM - 9PM","10AM - 12PM, 6PM - 8PM","6PM - 9PM","9AM - 7PM","9AM - 2PM, 5PM - 8PM","11AM - 2PM","10AM - 2PM","10AM - 2PM","2PM - 6PM","10AM - 2PM, 5PM - 9PM","6PM - 8PM","10AM - 1PM","12PM - 6PM","12PM - 2PM, 5PM - 6PM","10AM - 1PM","10AM - 2PM","6PM - 9PM","4PM - 6PPM","8AM - 12PM, 4PM - 8PM","10AM - 12PM","9AM - 9PM","10AM - 12PM","10AM - 6PM","9AM - 1PM"];
var phno = ["9437166500","9861307524","9337505511","9439518797","9938854810","9861077473","9438604423","8917663234","8895957369","9437187118","8280234440","9437060012","9861047485","9437070911","9861146588","9778008008","9937089370","9437216303","9337234860","9437476787","7978754207","9437003544","9437069633","9437323500","9438025630","8249652559","9437127328","8280547894","8249145717","9437186214","9849282547","9861233927","9437015224","9861478111","9438768892","8978418762","8280547894","7809879999","9937128813","9938888801","9849030081","9437066627","9938708897","8249652559","9160470564","7008567085","9437322722","9437617882","9437257472","9337031547","7609063990"];
var doc_name_lower = [];
var doc_field_lower = [];

var container = document.getElementById("container");
var count = doc_name.length;  // count of all the cards to be created
var card = [];                  // cards
var img = [];
var id = [];                        // details inside card
var p = [[],[]];                        // details inside card para
var ph = [];                                // phone
var wa = [];                                // whatsapp

function bodyload() {
    var i,j;

    for(i=0;i<count;i++) {
        doc_name_lower[i] = doc_name[i].toLowerCase();
        doc_field_lower[i] = doc_field[i].toLowerCase();
        card[i] = document.createElement("div");
        card[i].className = "card";
        $(card[i]).appendTo(container);

        img[i] = document.createElement("img");
        img[i].src = "doc.jpg";
        img[i].height = "100";
        $(img[i]).appendTo(card[i]);

        id[i] = document.createElement("div");
        id[i].className = "id";
        $(id[i]).appendTo(card[i]);

        p[i]=[];
        for(j=0;j<3+phno[i].length;j++) {
            console.log(i+" "+j+"\n");
            p[i][j] = document.createElement("p");
            $(p[i][j]).appendTo(id[i]);
        }
        p[i][0].innerHTML = doc_name[i];
        p[i][1].innerHTML = doc_field[i];
        p[i][2].innerHTML = timimg[i];

        // create phone link
        ph[i] = [];
        ph[i] = document.createElement("a");
        ph[i].className = "fa fa-phone";
        ph[i].href = "tel:"+ phno[i];
        ph[i].innerHTML = "&nbsp"+phno[i];
        ph[i].style.marginRight = "20px";
        $(ph[i]).appendTo(p[i][3]);

        // create whatsapp link
        wa[i] = [];
        wa[i] = document.createElement("a");
        wa[i].className = "fa fa-whatsapp";
        wa[i].href = "https://api.whatsapp.com/send?phone=91"+ phno[i];
        wa[i].innerHTML = "&nbsp"+phno[i];
        $(wa[i]).appendTo(p[i][3]);
    }
}


function search() {
    var searchbar = $("#searchbar").val();
    
    for(var i=0;i<count;i++) {
        if(!doc_name_lower[i].includes(searchbar.toLowerCase())) {
            if(!doc_field_lower[i].includes(searchbar.toLowerCase())) {
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