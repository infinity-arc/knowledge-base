
// tooling

const $ = document;
function create(el) {return $.createElement(el)}
function byId(id) { return $.getElementById(id); }
function byClassMulti(className) { return (className) => $.getElementsByClassName(className); }
function byClassSingle(className) { return byClassMulti(className)[0]; }
function byTagMulti(tg) { return $.getElementsByTagName(tg); }
function byTagSingle(tg) { return byTagMulti(tg)[0]; }
