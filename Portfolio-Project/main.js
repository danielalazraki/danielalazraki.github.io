function selectMain (){
    var mainAboutMe = document.getElementById('mainAboutMe');
    var mainResume = document.getElementById('mainResume');
    var buttonAboutMe = document.getElementById('buttonAboutMe');
    var buttonResume = document.getElementById('buttonResume');
    buttonResume.onclick =
        mainAboutMe.style.display = 'none';
        mainResume.style.display = 'block';
    
   
}
function yudka (){
    var buttonAboutMe = document.getElementById('buttonAboutMe');
    var mainAboutMe = document.getElementById('mainAboutMe');
    var mainResume = document.getElementById('mainResume');
    buttonAboutMe.onclick = 
    mainAboutMe.style.display = 'grid';
    mainResume.style.display = 'none';
    
}