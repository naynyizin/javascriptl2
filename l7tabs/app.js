var gettablinks = document.getElementsByClassName('tablinks'); //HTML Collectio
var gettabpanes = document.getElementsByClassName('tab-pane');
// console.log(gettabpanes)
var getbtncolses = document.querySelectorAll('.btn-close'); // Node List

var tabpanes = Array.from(gettabpanes)

function gettab(evn,linkid){
    // console.log(evn.target);
    // console.log(linkid);

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = 'none';
    })

    for(var x=0 ; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace("active","");

        getbtncolses[x].addEventListener('click',function(){
            this.parentElement.style.display = 'none';
        })
    }

    document.getElementById(linkid).style.display = 'block';

    // evn.target.className += " active";
    // evn.target.className = evn.target.className.replace("tablinks","tablinks active");
    // evn.target.classList.add('active');

    // console.log(evn);
    // console.log(evn.target);
    // console.log(evn.currentTarget);
    evn.currentTarget.className += " active";

}

document.getElementById('autoclick').click();