// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

(async function(){
    const response=await fetch("./data.json");
    const movies = await response.json();

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem =document.getElementById('movie-list')
    function displaySearchResults(results){
        results.forEach(function(movie) {
            const li= document.createElement("li");
            const listItem=`
            <div class="title">${movie.title}</div>
            <div class="description">${data.genre}</div>
            `;
            li.innerHTML=document.createTextNode(listItem);
            listElem.appendChild(listItem);
        });
    }

    function search(){
        const query= inputElem.value;

        console.log(query);
        const results= movies.filter(function (movies){
            return (movies.title.toLowerCase().includes(query) || 
            movies.join("").toLowerCase().includes(query)); 

            // if(movies.title.toLowerCase().includes(query)){
            // return true;
            // }
            // else{
            //     return false;
            // }
        });
        console.log(results);
    }

    btnElem.addEventListener("click",search);

console.log(movies);
})();

