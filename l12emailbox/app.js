const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    // createemaillist(e.target);
    // createemaillist(e.target.value);

    // createemaillist(this);
    createemaillist(this.value);
});

function createemaillist(inputtext){
    // console.log(inputtext);

    // split by (',')
    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty,empty(space)
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems);

    // remove space/empty
    const emaitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(reempty=>reempty.trim());
    // console.log(emaitems);

    getemcontainer.innerHTML = '';

    emaitems.forEach(function(emitem){
        // console.log(emitem);

        const setnewspan = document.createElement('span');
        setnewspan.textContent = emitem;
        setnewspan.classList.add('email-item');
        getemcontainer.appendChild(setnewspan);
        // console.log(setnewspan);

       
    })
    
}

getbtn.addEventListener('click',function(e){
    sendemail();
    e.preventDefault();
});

function sendemail(){
    // console.log('i am working');

    const gettextvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item')
    // console.log(gettextvalue);
    // console.log(getaddresses);

    var perons = [];

    if(getaddresses.length > 0 && gettextvalue){
        getaddresses.forEach(function(getaddress){
            perons.push({
                email : getaddress.textContent,
                message : gettextvalue 
            });           
        })
        console.log(perons);
    }else{
        window.alert('Enter Message');
        gettextarea.focus();
    }
    
}

// 12IB