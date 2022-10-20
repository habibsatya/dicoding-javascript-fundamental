// const moment = require("node_modules/moment/moment.js");

const displayTime = () => {
    moment.locale('id');
    $('.time').text(moment().format('LTS'));
    $('.date').text(moment().format('LL'));
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};

updateTime();