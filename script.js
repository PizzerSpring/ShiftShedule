'use strict';

const startString = document.querySelectorAll('.startString');
const middleString = document.querySelectorAll('.middleString');

const weekmarch2 = document.querySelector('.weakmarch2');
const tr = document.querySelectorAll('tr');

const weekleap1 = document.querySelector('.weekleap1');
const weekleap2 = document.querySelector('.weekleap2');

const date = document.querySelectorAll('td.date');
const addYear = document.querySelector('.addyear');

const mday = document.querySelector('#menu__mday');
const mmonth = document.querySelector('#menu__mmonth');
const menuyear = document.querySelector('#menu__myear');

const mshifttypeone = document.querySelector('#menu__shifttypeone');
const mshifttypetwo = document.querySelector('#menu__shifttypetwo');

const button = document.querySelector('.menu__but');
const buttonClear = document.querySelector('.menu__buttonclear');


/*Button for clear */

buttonClear.onclick = () => {
    for (let i = 0; i < date.length; i++) {
        date[i].classList.remove('menu_butcol');
    }
};

/*Button for count */

button.onclick = () => {
    let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let startDay = +mday.value;
    startDay = startDay - 1;

    let startMonth = +mmonth.value;
    for (let i = 0; i < startMonth; i++) {
        startDay += year[i];
    }


    let workDays = +mshifttypeone.value;
    let weekendDays = +mshifttypetwo.value;
    let shiftWorkDays = workDays + weekendDays;

    for (let i = startDay; i < date.length; i = i + shiftWorkDays) {
        for (let j = i; j < workDays + i; j++) {
            if (j < date.length)
                date[j].classList.add('menu_butcol');
        }
    }
};

//const tde = document.querySelectorAll('td');
/*Function for new NodeList*/
function collection() {
    let datey = document.querySelectorAll('td.date');
    //for(let i = 0; i < tde.length; i++) {
    //  tde[85].remove();
    //console.log(tde);
    // }
    return datey;
}

console.log(middleString[10].lastElementChild);

/*Function change year*/

console.log(startString.length);
menuyear.onchange = () => {


    if (+menuyear.value == 1) {

        let td = document.createElement('td');
        td.className = 'date';
        td.innerHTML = '29';
        addYear.append(td);

        let tdm = document.createElement('td');
        tdm.innerHTML = ' ';


        console.log(tdm);




        // let u = collection()[63];
        // u.remove();
        let stringTR = [];
        for (let i = 0; i < 10; i++) {
            stringTR[i] = tdm.cloneNode(true);
        }
        console.log(stringTR);

        let trans = [];




      /*  for (let i = 0; i < startString.length; i++) {
            if(i == 1) {
                break;
            }
            startString[i].prepend(stringTR[i]);

            for (let j = 0; j < middleString.length; j++) {
                if(j == 53) {
                    break;
                }
                if(j == 11) {
                    startString[2].prepend(stringTR[2]);
                }
                if(j == 15) {
                    startString[3].prepend(stringTR[3]);
                }
                if(j == 20) {
                    startString[4].prepend(stringTR[4]);
                }
                if(j == 26) {
                    startString[5].prepend(stringTR[5]);
                }
                if(j == 32) {
                    startString[6].prepend(stringTR[6]);
                }
                if(j == 36) {
                    startString[7].prepend(stringTR[7]);
                }
                if(j == 42) {
                    startString[8].prepend(stringTR[8]);
                }
                if(j == 48) {
                    startString[9].prepend(stringTR[9]);
                }
                if (j != 4 && j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                  //  if (j != 9) {
                        trans[j] = middleString[j].lastElementChild;
                 //   }
                    console.log(trans);
                    console.log(trans[j]);
                    middleString[j].lastElementChild.remove();
                    if (j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                        middleString[j + 1].prepend(trans[j]);
                    }
                }
                if (j == 5 || j == 43) {
                    middleString[j].remove();
                }
               // console.log(trans[j]);
            }
        }*/


            for (let j = 0; j < middleString.length; j++) {
                if(j == 53) {
                    break;
                }
                for(let k = 0; k < 9; k++) {
                    if(j == 0 || j == 11 || j == 15 || j == 20 || j == 26 || j == 32 || j == 36 || j == 42 || j == 48) {
                        startString[k].prepend(stringTR[k]);
                    }
                }
                if (j != 4 && j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                        trans[j] = middleString[j].lastElementChild;
                    middleString[j].lastElementChild.remove();
                    if (j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                        middleString[j + 1].prepend(trans[j]);
                    }
                }
                if (j == 5 || j == 43) {
                    middleString[j].remove();
                }
               // console.log(trans[j]);
            }
        

        console.log(stringTR.tr1);




        // tr[0].prepend(tdm);
        //tr[1].prepend(clone);
        //weekmarch.append(u);
        // console.log(u);
        collection();
        // weekleap1.innerText = 'ВС';

        //weekmarch.prepend(tdm);

        // weekmarch.prepend(tdm);
        // weekleap2.textContent = 'ПН';
        //console.log(collection()[59]);
        //let tdm  = document.createElement('td');
        //tdm.innerHTML = '';
        //weekmarch.classList.lastChild.append(tdm);

        button.onclick = () => {
            let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let startDay = +mday.value;
            startDay = startDay - 1;

            let startMonth = +mmonth.value;
            for (let i = 0; i < startMonth; i++) {
                startDay += year[i];
            }


            let workDays = +mshifttypeone.value;
            let weekendDays = +mshifttypetwo.value;
            let shiftWorkDays = workDays + weekendDays;

            for (let i = startDay; i < collection().length; i = i + shiftWorkDays) {
                for (let j = i; j < workDays + i; j++) {
                    if (j < collection().length)
                        collection()[j].classList.add('menu_butcol');
                }
            }
            //console.log(collection());
        }


    } else if (+menuyear.value == 0) {
        /*for (let i = 0; i < datey.length; i++) {
            datey[59].remove();
        }*/
        collection()[59].remove();
        //console.log(collection());
        // weekleap1.innerHTML = 'ПН';
        //weekleap2.innerHTML = 'ВС';
    }
};

 //console.log(date);




//console.log(datey);
