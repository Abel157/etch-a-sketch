const container=document.querySelector(".container");
function drawGrid(n){
    let no=0;
    for (let i=0; i<n;i++){
        const holder=document.createElement("div");//needs to be created again and again to be appended
        for(let j=0;j<n;j++){
            const grid=document.createElement("div");
            holder.className="holder";
            grid.className="grid";
            holder.appendChild(grid);
        };
        container.appendChild(holder);

}
};

drawGrid(6)

