'use strict';

const button = document.querySelector('.menu__but');

const mshifttypeone = document.querySelector('#menu__shifttypeone');
const mshifttypetwo = document.querySelector('#menu__shifttypetwo');

const jdate = document.querySelectorAll('td.jdate');
const fdate = document.querySelectorAll('td.fdate');
const mrdate = document.querySelectorAll('td.mrdate');

const mday = document.querySelector('#menu__mday');
const mmonth = document.querySelector('#menu__mmonth');

mmonth.onchange = () => {
    for (let i = 0; i < jdate.length; i++) {
        jdate[i].classList.remove('menu_butcol');
    }
}

mday.onchange = () => {
    for (let i = 0; i < jdate.length; i++) {
        jdate[i].classList.remove('menu_butcol');
    }
}

mshifttypeone.onchange = () => {
    for (let i = 0; i < jdate.length; i++) {
        jdate[i].classList.remove('menu_butcol');
    }
}

mshifttypetwo.onchange = () => {
    for (let i = 0; i < jdate.length; i++) {
        jdate[i].classList.remove('menu_butcol');
    }
}

function oneone() {

}

function fivetwo(svalue, mdate) {
    for (let i = svalue; i < mdate.length; i++) {
        mdate[i].classList.add('menu_butcol');
        mdate[i - 1].classList.add('menu_butcol');
        mdate[i + 1].classList.add('menu_butcol');
        mdate[i + 2].classList.add('menu_butcol');
        mdate[i + 3].classList.add('menu_butcol');
        i = i + 6;
    }
}

function twotwo(svalue, mdate) {
    for (let i = svalue; i < mdate.length; i++) {
        mdate[i].classList.add('menu_butcol');
        mdate[i - 1].classList.add('menu_butcol');
        i = i + 3;
    }
}

//private int[] mass = { 31, 30 }

let arr = [31,28,31,30,31,30,31,31,30,30,31,31];

button.onclick = () => {
    const sindex = mday.options.selectedIndex;
    let startDay = +mday.options[sindex].value;
    startDay = startDay - 1;

    let selectedIndexMonth = mmonth.options.selectedIndex;
    let startMonth = +mmonth.options[selectedIndexMonth].value;

    for (let i = 0; i < startMonth; i++){
        startDay += arr[i]
    }

    let workDays = +mshifttypeone.value;
    let weekendDays = +mshifttypetwo.value;
    let shiftWorkDays = workDays + weekendDays;

    for (let i = startDay; i < jdate.length; i = i + shiftWorkDays) {
        for (let j = i; j < workDays + i; j++){
            if (j < jdate.length)
                jdate[j].classList.add('menu_butcol');
        }
    }

    /*switch (mmonth.value) {
        case 'J':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
                for (let i = svalue; i < jdate.length; i++) {
                    jdate[i].classList.add('menu_butcol');
                    jdate[i - 1].classList.add('menu_butcol');
                    i = i + 3;
                }

            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
                for (let i = svalue; i < jdate.length; i++) {
                    jdate[i].classList.add('menu_butcol');
                    jdate[i - 1].classList.add('menu_butcol');
                    jdate[i + 1].classList.add('menu_butcol');
                    jdate[i + 2].classList.add('menu_butcol');
                    jdate[i + 3].classList.add('menu_butcol');
                    i = i + 6;
                }

            }
            break;
        case 'F':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
                for (let i = svalue; i < jdate.length; i++) {
                    jdate[i].classList.add('menu_butcol');
                    jdate[i - 1].classList.add('menu_butcol');
                    i = i + 3;
                }

            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
                for (let i = svalue; i < jdate.length; i++) {
                    jdate[i].classList.add('menu_butcol');
                    jdate[i - 1].classList.add('menu_butcol');
                    jdate[i + 1].classList.add('menu_butcol');
                    jdate[i + 2].classList.add('menu_butcol');
                    jdate[i + 3].classList.add('menu_butcol');
                    i = i + 6;
                }

            }
            break;
        case 'Mr':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
               // twotwo(svalue, mrdate);
            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
              //  fivetwo(svalue, mrdate);
            }
            break;
    }*/

};