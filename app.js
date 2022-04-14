    var code = document.getElementById('code');
    var result = document.getElementById('result');
    var run = document.getElementById('run');
    var DeleteCode = document.getElementById('D_code');
    var D_ruselt = document.getElementById('D_result');
    var G_code = document.getElementById('G_code');
    var D_codeSaved = document.getElementById('D_codeSaved');
    var copy = document.getElementById('copy');

    
    var localStorageCode;
class Code{
    
    constructor(){
        
        
        run.addEventListener('click',()=>{
            this.run();
            localStorageCode = localStorage.setItem('code',code.value);
        });
        DeleteCode.addEventListener('click',()=>{
            this.deleteCode();
        });
        D_ruselt.addEventListener('click',()=>{
            this.deleteRuselt();
        });
        G_code.addEventListener('click',()=>{
            this.getCodeSaved();
        });
        D_codeSaved.addEventListener('click',()=>{
            this.deleteCodeSaved();
        });
        code.style.overflowY ='scroll';
        result.style.overflowY ='scroll';
        



    }
    run(){
        result.innerHTML= code.value;
    }
    deleteCode(){
        code.value='';
    }
    deleteRuselt(){
        result.innerHTML='';
    }
    getCodeSaved(){
        code.value=localStorage.getItem('code');
    }
    deleteCodeSaved(){
        localStorage.clear();
    }

}

onload = new Code();



// function ModeDark(){
    

//     let modedark2 =document.getElementsByTagName('main ,#code');

//     for(var counter=0 ; counter<=modedark2.length ; counter++)
//     {
//         modedark2[counter].style.background = '#616161';
//     }

    

// }
// var darkMode = document.getElementById('dark');


// class Mode{
//     constructor(){
//         darkMode.addEventListener('click',()=>{
//             this.DarkBasic();
//             this.DarkSecondery();
//             this.textWhite();
//             code.scroll.background = '#311B92';
//         });

        


//         }

//     DarkBasic(){
//         var modeDark = document.querySelectorAll("header,#footer,#run,#G_code");

//         modeDark.forEach(element=>{
//             element.style.background = "#000000";

//         });
//     }

//     DarkSecondery(){
//         var modeDark2 = document.querySelectorAll("main");

//         modeDark2.forEach(element=>{
//             element.style.background = "#232526";
//         });
//     }

//     textWhite(){
//         var whiteText = document.querySelectorAll("small,#dark,#code,h3,#result,#footer,#white");

//         whiteText.forEach(element=>{
//             element.style.color = "white";

//         });
//     }
// }
// onload = new Mode();

    function copyFunction() {
    /* Get the text field */
    // var copyText = document.getElementById("myInput");

    /* Select the text field */
    code.select();
    code.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(code.value);

    /* Alert the copied text */
    copy.innerText = 'Copied';

   var set= setTimeout(()=>{
        copy.innerText = 'Copy';
    },2000)



    }


    // for dark mode
    var foot = document.getElementById('text_footer');
    var head = document.getElementById('head');
    var smallHead = document.getElementById('titleSmall');
    var darkmode = document.getElementById('dark');
    var main = document.getElementById('main');
    var label = document.getElementById('labelCode');


class Mode{
    constructor(){
        darkmode.addEventListener('click',()=>{
            this.darkBasic();
            this.darkSecondery();
        });
        
    }

    darkBasic(){
        G_code.classList.toggle('dark-mode');
        smallHead.classList.toggle('dark-mode');
        head.classList.toggle('dark-mode');
        foot.classList.toggle('dark-mode');
        run.classList.toggle('dark-mode');

        // run.style.background='#000000';
    }
    darkSecondery(){

        main.classList.toggle('darkmodebody');
        code.classList.toggle('darkmodebody');
        // result.classList.toggle('darkmodebody');
        label.classList.toggle('darkmodebody');
    }
}
onload = new Mode();

// header,#footer,#run,#G_code