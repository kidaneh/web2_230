'use strict'

let students = [
    {sid:123, name: "Bizi", sex:"m", age:20, department:"network"},
    {sid:321, name: "Lumi", sex:"m", age:19, department:"database"},
    {sid:234, name: "Hiyab", sex:"m", age:25, department:"web development"},
    {sid:456, name: "Sidu", sex:"m", age:29, department:"programming"},
    {sid:125, name: "Yoel", sex:"f", age:19, department:"data analytics"},
    {sid:963, name: "Mewe", sex:"f", age:40, department:"web design"},  
];

exports.getAll = () => {
    return students;
};