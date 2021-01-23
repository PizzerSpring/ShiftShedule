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

button.onclick = () => {
    const sindex = mday.options.selectedIndex;
    let svalue = +mday.options[sindex].value;

    switch (mmonth.value) {
        case 'J':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
                twotwo(svalue, jdate);
            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
                fivetwo(svalue, jdate);
            }
            break;
        case 'F':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
                twotwo(svalue, fdate);
            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
                fivetwo(svalue, fdate);
            }
            break;
        case 'Mr':
            if (mshifttypeone.value == '2' && mshifttypetwo.value == '2') {
                twotwo(svalue, mrdate);
            }
            if (mshifttypeone.value == '5' && mshifttypetwo.value == '2') {
                fivetwo(svalue, mrdate);
            }
            break;
    }

};