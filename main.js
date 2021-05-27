function a(){
    document.getElementById('p1').classList.remove('hide');
    document.getElementById('p1').style.display = 'inline';
    margin()
}
function b(){
    document.getElementById('p2').style.display = 'inline';
    document.getElementById('p2').classList.remove('hide');
    margin()
}
function c(){
    document.getElementById('p3').style.display = 'inline';
    document.getElementById('p3').classList.remove('hide');
    margin()
}
function d(){
    document.getElementById('p4').style.display = 'inline';
    document.getElementById('p4').classList.remove('hide');
    document.getElementById('main').style.height = '2000px';
}
function e(){
    document.getElementById('p5').style.display = 'inline';
    document.getElementById('p5').classList.remove('hide');
    document.getElementById('main').style.height = '2000px';
}

function margin (){
    document.getElementById('line1').style.marginBottom = '250px'
}