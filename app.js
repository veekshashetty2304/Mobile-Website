let section1 = document.getElementById("section1");
let search = document.getElementById("search");

console.log(section1);
console.log(search);

let fetchapi = async () => {
    let data = await fetch("./data.json");
    let finaldata = await data.json();
    console.log(finaldata);

    
    const renderData = (data) => {
        section1.innerHTML = "";
        data.map((m) => {
            section1.innerHTML += `
                <div class="cont1">
                    <p><img src=${m.image} alt="${m.name}" /></p>
                    <p class="p1">${m.id}</p>
                    <p class="p2">${m.name}</p>
                    <p class="p3">${m.price}</p>
                    <p class="p4">${m.description}</p>
                </div>
            `;
        });
    };

    
    renderData(finaldata);

    
    search.addEventListener("input", (e) => {
        const searchValue = e.target.value.toLowerCase(); 
        const filteredData = finaldata.filter((m) => m.name.toLowerCase().startsWith(searchValue)); 
        renderData(filteredData); 
    });
};

fetchapi();











