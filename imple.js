var start=document.querySelector("#buttonone")
var square=document.querySelectorAll('td')

function clearbox()
{
    for(var i=0;i<square.length;i++)
    {
        square[i].textContent='';
    }
}
start.addEventListener('click',clearbox);

function change()

{
    if(this.textContent==='')
    {
        this.textContent='X';
    }
    else if(this.textContent==='X')
    {
        this.textContent='O';
    }
    else
    {
        this.textContent='';
    }
}
for(var i=0;i<square.length;i++)
{
    square[i].addEventListener('click',change);
}
