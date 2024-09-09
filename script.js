const container=document.querySelector(".container");
const btn=document.querySelector("button");
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
            holder.appendChild(grid);
            
            grid.addEventListener('mouseenter',(e)=>{
                grid.style.backgroundColor="green";
            });
           
        };
        
        
    
    };
};
btn.addEventListener('click',()=>{
    const n=prompt("what size per side");
    container.replaceChildren()
    drawGrid(n);
});
drawGrid(16);


