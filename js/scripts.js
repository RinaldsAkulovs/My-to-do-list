const POP_UP = document.getElementById('popUp');
let lists = [];

window.addEventListener('load', () => {
    lists = JSON.parse(localStorage.getItem("lists") || "[]");
    console.log(lists)
    render();
});

document.getElementById('jaunsList').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('jaunsLists').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let list = {todo: todo.value, untill: untill.value};

    todo.value = "";
    untill.value = "";

    lists.push(list);

    render();
})

function render() {
    let onelist = document.getElementById('onelist');
    onelist.innerHTML = "";

    for(let i = 0; i < lists.length; i++) {
        let list = `
        <div class="list">
            <h3>Todo: ${lists[i].todo}</h3>
            <h4>Untill: ${lists[i].untill}</h4>
            <button type="delete" id="deleteList">Dzēst</button>
        </div>`;

        onelist.innerHTML += list;
    }

    localStorage.setItem("lists", JSON.stringify(lists))
}

var btns = document.querySelectorAll('#onelist.button');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const list = e.target.parentElement;
        list.parentElement.removeChild(list)
    });
});