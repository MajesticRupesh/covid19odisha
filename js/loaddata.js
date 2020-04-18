// District table
var table;

function loaddata() {
    //getLocation();

    // load twitter
    if(window.innerWidth < 1000) {
        document.getElementsByClassName("twitter-amour")[0].style.display = "none";
        document.getElementsByClassName("twitter-amour")[1].style.display = "block";
    }
    else {
        document.getElementsByClassName("twitter-amour")[1].style.display = "none";
        document.getElementsByClassName("twitter-amour")[0].style.display = "block";
    }

    // load json file for odisha state
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.covid19india.org/data.json", false );
    xmlHttp.send( null );
    var bodytext = xmlHttp.responseText;
        
    var text=JSON.parse(bodytext);

    for(var i=0;i<text.statewise.length;i++) {
        if(text.statewise[i].state=="Odisha") {
            document.getElementById("confirmed").innerHTML = text.statewise[i].confirmed;
            document.getElementById("active").innerHTML = text.statewise[i].active;
            document.getElementById("recovered").innerHTML = text.statewise[i].recovered;
            document.getElementById("deceased").innerHTML = text.statewise[i].deaths;
        }
    }

    var xmlHttp2 = new XMLHttpRequest();
    xmlHttp2.open( "GET", "https://api.covid19india.org/state_test_data.json", false );
    xmlHttp2.send( null );
    var bodytext2 = xmlHttp2.responseText;
    
    var text2=JSON.parse(bodytext2);
    
    for(var i=0;i<text2.states_tested_data.length;i++) {
        if(text2.states_tested_data[i].state=="Odisha" ) {
            document.getElementById("tested").innerHTML = text2.states_tested_data[i].totaltested;
        }
    }


    // load odisha districts json
    var xmlHttp1 = new XMLHttpRequest();
    xmlHttp1.open( "GET", "https://api.covid19india.org/state_district_wise.json", false );
    xmlHttp1.send( null );
    var bodytext1 = xmlHttp1.responseText;
    document.getElementById("Khordha").title = "kk";
    var odisha =JSON.parse(bodytext1).Odisha.districtData;
    var district = Object.keys(odisha);
    for(var i=0; i<district.length; i++) {
        // set title
        try {document.getElementById(district[i]+"1").innerHTML = district[i]+": "+odisha[district[i]].confirmed;}
        catch(err) {continue;}
        
        if(odisha[district[i]].confirmed > 20) {
            document.getElementById(district[i]).style.fill = "rgb(255,0,0)";
        }
        else if(odisha[district[i]].confirmed > 10) {
            document.getElementById(district[i]).style.fill = "rgb(255,100,100)";
        }
        else if(odisha[district[i]].confirmed > 2) {
            document.getElementById(district[i]).style.fill = "rgb(255,150,150)";
        }
        else {
            document.getElementById(district[i]).style.fill = "rgb(255,200,200)";
        }

        table = document.getElementById("district-table");
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the last position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Add district info to the new cells:
        cell1.innerHTML = district[i];
        cell2.innerHTML = odisha[district[i]].confirmed;
    }

    // load json file for odisha state
    $.ajax({
        url: "https://api.covid19india.org/states_daily_csv/confirmed.csv",
        type: "GET",
        dataType: "text",
        success: function(data) {
            var chartData = {};
            //for(int i = 0; i <)
        }
    });
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.covid19india.org/data.json", false );
    xmlHttp.send( null );
    var bodytext = xmlHttp.responseText;
        
    var text2=JSON.parse(bodytext);
    var confCases, activeCases, recovCases, deathCases;
    for(var i=0;i<text2.statewise.length;i++) {
        if(text2.statewise[i].state=="Odisha") {
            confCases = text2.statewise[i].confirmed;
            activeCases = text2.statewise[i].active;
            recovCases = text2.statewise[i].recovered;
            deathCases = text2.statewise[i].deaths;
        }
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
	title:{
		text: "",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
        startAngle: 60,
        radius: "65%",
		//innerRadius: 60,
		indexLabelFontSize: 15,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: parseInt(activeCases), label: "Active Cases" },
			{ y: parseInt(deathCases), label: "Death Cases" },
			{ y: parseInt(recovCases), label: "Recovered Cases" },
			// { y: parseInt(confCases), label: "Confirmed Cases"},
		]
	}]
});
chart.render();
}

function path_clicked(id) {
    document.getElementById("district-info").innerHTML = document.getElementById(id+"1").innerHTML;
}





