let Education=document.getElementById('Education');
let TechnicalSkills=document.getElementById('TechnicalSkills');
let SoftSkills=document.getElementById('SoftSkills');
let Achievements=document.getElementById('Achievements');

function Edu(){

    Education.style.display="block";
    TechnicalSkills.style.display="none";
    SoftSkills.style.display="none"; 
    Achievements.style.display="none";
}

function Tech(){

    Education.style.display="none";
    TechnicalSkills.style.display="block";
    SoftSkills.style.display="none"; 
    Achievements.style.display="none";
    
}

function Soft(){

    Education.style.display="none";
    TechnicalSkills.style.display="none";
    SoftSkills.style.display="block"; 
    Achievements.style.display="none";

}

function Achieve(){
    Education.style.display="none";
    TechnicalSkills.style.display="none";
    SoftSkills.style.display="none"; 
    Achievements.style.display="block";
}

let next=document.getElementById('next');
let other=document.getElementById('other');
let other1=document.getElementById('other1');

function nextButton(){
    if(other.display='none')
    {
        other.style.display='block';
        other1.style.display='none';
    }
    else
    other.style.display='none';
}

let showMore=document.getElementById('showMore');
let showMoreButton=document.getElementById('showMoreButton');

function toggle(){
    if(showMore.style.display==='none')
    {
        showMore.style.display='block';
        showMoreButton.textContent='Show less';
    }
    else
    {
        showMore.style.display='none';
        showMoreButton.textContent='Show More';
    }
}
