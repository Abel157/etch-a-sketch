const container=document.querySelector(".container");
const btn=document.querySelector("button");
const clr=document.querySelector('#clr');
const ers=document.querySelector('#ers');
const grd=document.querySelector('#grd');
function drawGrid(n=16){
    const cellSize = 600/n;
    console.log(cellSize);
    for (let i=0; i<n;i++){
        const holder=document.createElement("div");//needs to be created again and again to be appended
        container.appendChild(holder);
        for(let j=0;j<n;j++){
            const grid=document.createElement("div");
            holder.className="holder";
            grid.classList="grid";
            grid.style.width=cellSize+"px";
            grid.style.height=cellSize+"px";
            grid.setAttribute("opacity", "");
            grid.setAttribute("color", "");
            holder.appendChild(grid);
            let togGrid=false;
            grd.addEventListener('click',()=>{
                if (!togGrid){
                    grd.textContent="Show Grid";
                    grid.style.border="0px solid black";
                    togGrid=true;   
                }
                else {
                    grd.textContent="Hide Grid";
                    grid.style.border="1px solid black";
                    togGrid=false;
                }
            });
            grid.addEventListener('mouseenter',(e)=>{ 
                if (tog){
                    grid.style.backgroundColor="white";
                    grid.setAttribute("color","");
                    grid.setAttribute("opacity",""); 
                }
                else {
                    let currColor=grid.getAttribute("color");
                    if (currColor===""){
                        let col0=Math.ceil((Math.random()*255));
                        let col1=Math.ceil((Math.random()*255));
                        let col2=Math.ceil((Math.random()*255));
                        let color=`rgb( ${col0}, ${col1}, ${col2})`
                        grid.style.backgroundColor=color;
                        grid.setAttribute("color",`${color}`);
                    };
                    let currOpacity=grid.getAttribute("opacity");
                    grid.setAttribute("opacity",`${+currOpacity+10}`);
                    grid.style.opacity=`${+currOpacity+10}%`;  
                };
            });
            clr.addEventListener('click',(e)=>{
                grid.style.backgroundColor="white";
                grid.setAttribute("color","");
                grid.setAttribute("opacity","");
            });
            grid.addEventListener('click',(e)=>{
                (e.target).style.backgroundColor="white";
                grid.setAttribute("color","");
                grid.setAttribute("opacity","");
           });
        };
    };
};
btn.addEventListener('click',()=>{
    let n= prompt("Number of squares per side: ")||16;
    if (n>100){
        alert("Maximum allowed Size is 100. A canvas of size 100 squares per side will be Displayed for you instead.");
        n=100;
    }
    container.replaceChildren();
    drawGrid(n);
});
let tog=false;
ers.addEventListener('click',()=>{
    if (!tog){
        ers.style.backgroundColor="red";
        ers.textContent="Stop";
        tog=true;
    }
    else {
        ers.style.backgroundColor="rgb(87, 126, 253)";
        ers.textContent="Erase";
        tog=false;
    }
});
drawGrid(16);


