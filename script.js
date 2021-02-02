'use strict';

/*Getting elements*/

const startStringleap = document.querySelectorAll('.startString');
const middleStringleap = document.querySelectorAll('.middleString');

const date = document.querySelectorAll('td.date');
const addLeapdate = document.querySelector('.addLeapdate');

const sday = document.querySelector('#menu__sday');
const smonth = document.querySelector('#menu__smonth');
const menusyear = document.querySelector('#menu__syear');

const mshifttypeone = document.querySelector('#menu__shifttypeone');
const mshifttypetwo = document.querySelector('#menu__shifttypetwo');

const buttonCount = document.querySelector('.menu__count');
const buttonClear = document.querySelector('.menu__buttonclear');


/*Button for clear */

buttonClear.onclick = () => {
    for (let i = 0; i < date.length; i++) {
        date[i].classList.remove('menu_butcol');
    }
};

/*Button for count */

buttonCount.onclick = () => {
    let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let startDay = +sday.value;
    startDay = startDay - 1;

    let startMonth = +smonth.value;
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

/*Function for leap year*/
function collectionForLeap() {
    let datey = document.querySelectorAll('td.date');
    return datey;
}

/*Function change year*/

menusyear.onchange = () => {

    if (+menusyear.value == 1) {

        let tdAdd = document.createElement('td');
        tdAdd.className = 'date';
        tdAdd.innerHTML = '29';
        addLeapdate.append(tdAdd);

        let tdEmpty = document.createElement('td');
        tdEmpty.innerHTML = ' ';

        let stringTR = [];
        for (let i = 0; i < 10; i++) {
            stringTR[i] = tdEmpty.cloneNode(true);
        }

        let trans = [];

        /*Rerendering DOM for leap year*/

        for (let j = 0; j < middleStringleap.length - 1; j++) {
            for(let k = 0; k < 9; k++) {
                if(j == 0 || j == 11 || j == 15 || j == 20 || j == 26 || j == 32 || j == 36 || j == 42 || j == 48) {
                    startStringleap[k].prepend(stringTR[k]);
                }
            }
            if (j != 4 && j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                    trans[j] = middleStringleap[j].lastElementChild;
                middleStringleap[j].lastElementChild.remove();
                if (j != 10 && j != 15 && j != 20 && j != 26 && j != 31 && j != 36 && j != 42 && j != 48) {
                    middleStringleap[j + 1].prepend(trans[j]);
                }
            }
            if (j == 5 || j == 43) {
                middleStringleap[j].remove();
            }
        }
            /*Reapeat for leap year*/
            collectionForLeap();
        buttonCount.onclick = () => {
            let year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


            let startDay = +sday.value;
            startDay = startDay - 1;

            let startMonth = +smonth.value;
            for (let i = 0; i < startMonth; i++) {
                startDay += year[i];
            }
            let workDays = +mshifttypeone.value;
            let weekendDays = +mshifttypetwo.value;
            let shiftWorkDays = workDays + weekendDays;

            for (let i = startDay; i < collectionForLeap().length; i = i + shiftWorkDays) {
                for (let j = i; j < workDays + i; j++) {
                    if (j < collectionForLeap().length)
                    collectionForLeap()[j].classList.add('menu_butcol');
                }
            }
        }
    } else if (+menusyear.value == 0) {
        collectionForLeap()[59].remove();
    }
};