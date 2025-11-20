 alert("Hallo world")

 function qoshish(a,b){
    return a + b;
 }
 let a = Number(prompt("birinchi qo'shiluvchi raqam"));
 let b = Number(prompt("ikkinchi qo'shiluvchi raqam"));
 let qoshunatija = qoshish(a,b);
 alert(`
 ${qoshunatija}   
 `)
console.log(qoshunatija);
if(qoshunatija > 0){
    let qoshtogri = confirm("Natija to'g'ri");
    console.log(qoshtogri);
}else if(qoshunatija < 0){
    let qoshhato = confirm("Natija hato");
    console.log(qoshhato);
}else{
    let qoshteng = confirm("Natija 0 ga teng");
    console.log(qoshteng);
}



function ayrilish(c,d){
    return c - d;
}
let c = Number(prompt("birinchi ayriluvchi raqam"));
let d = Number(prompt("ikkinchi ayriluvchi raqam"));
let ayrilishnatija = ayrilish(c,d);
alert(`
    ${ayrilishnatija}
`)
console.log(ayrilishnatija);
if (ayrilishnatija < 0){
    let ayirtogri = confirm("Qiymat to'g'ri");
    console.log(ayirtogri);
}else if(ayrilishnatija > 0){
    let ayirhato = confirm("Qiymat hato");
    console.log(ayirhato);
}else{
    let ayrilishteng = confirm("Qiymat 0 ga teng");
    console.log(ayrilishteng);
}



function kopaytirish(e,f){
    return e * f;
}
let e = Number(prompt("birinchi kopaytiriluvchi qiymat"));
let f = Number(prompt("ikkinchi kopaytiriluvchi qiymat"));
let kopatnatija = kopaytirish(e,f);
alert(`
    ${kopatnatija}
`)
console.log(kopatnatija);
if (kopatnatija > 100){
    let kopaytogri = confirm("Qiymat to'gri");
    console.log(kopaytogri);
}else if(kopatnatija < 100){
    let kopayhato = confirm("Qiymat hato");
    console.log(kopayhato);
}else if(kopatnatija === 100){
    let kopayteng = confirm("Qiymat 100 ga teng");
    console.log(kopayteng);
}



function bolish(g,s){
    return g / s;
}
let g = Number(prompt("birinchi bo'linuvchi raqam"));
let s = Number(prompt("ikkinchi bo'linuvchi raqam"));
let bolunatija = bolish(g,s);
alert(`
    ${bolunatija}   
`)
console.log(bolunatija);
if (bolunatija < 100){
    let bolutogri = confirm("Qiymat to'gri");
    console.log(bolutogri);
}else if(bolunatija > 100){
    let boluhato = confirm("Qiymat hato");
    console.log(boluhato);
}else if(bolunatija === 100){
    let boluteng = confirm("Natija 100 ga teng");
    console.log(boluteng);
}

alert("Function organganinggiz bilan tabriklayman")