'use strict';
const movieEl = document.getElementById('movie');
const screencontainer = document.querySelector('.screen-container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');


let ticketprice = Number(movieEl.value);
let seatcount = 0;
let totalprice = 0;

const populateUI = function()
{
    countEl.innerText = seatcount;
    totalEl.innerText = seatcount * ticketprice;
}
movieEl.addEventListener('change', function()
{
    ticketprice = Number(movieEl.value);
    populateUI()
});

screencontainer.addEventListener('click', function(e)
{
if(e.target .classList .contains('seat'))
{
if(!e.target .classList.contains('occupied'))
    {
        e.target .classList .toggle('selected');
        const selectedseatEl = document.querySelectorAll('.row .seat.selected');
        seatcount = selectedseatEl.length;
        populateUI()
    }
    }
})
