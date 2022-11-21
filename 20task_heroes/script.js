const body = document.querySelector("body");
const form = document.querySelector(`#form`);
const nameHero = document.querySelector(`#nameHero`);
const selectComics = document.querySelector(`#selectComics`);
const favourite = document.querySelector(`#favourite`);

let dataTHs = [`Name`, `Comics`, `Favourite`, `Actions`];

//---------service---------
const API = `https://63693f7228cd16bba71904e4.mockapi.io`;

const getList = path => fetch(API + path).then(data => data.json());

const addItem = (path, obj) => fetch(API + path, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

const changeItem = (path, obj) => fetch(API + path, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

const deleteItem = (path) => fetch(API + path, { method: `DELETE` }).then(data => data.json());
//---------service---------

//---------renderTable---------
const renderTHs = (data) => {
    let tr = document.createElement(`tr`);
    let th = [];
    data.forEach(element => th.push(`<th>${element}</th>`))
    tr.innerHTML = th.join(``);
    return tr
}

const renderTbody = (objData) => {
    const tr = document.createElement(`tr`);

    tr.innerHTML = `<td>${objData.name}</td>
                <td>${objData.comics}</td>
                <td>
                    <label>
                        <input type="checkbox" id="checkFavor" ${objData.favourite ? `checked` : ``}>
                    </label>
                </td>`

    const tdBtn = document.createElement(`td`);
    const btn = document.createElement(`button`);
    btn.innerHTML = `Delete`;
    
    const tbody = document.querySelector(`tbody`);
    tbody.append(tr);
    tr.append(tdBtn);
    tdBtn.append(btn);

    btn.addEventListener(`click`, async () => {
        await deleteItem(`/heroes/${objData.id}`);
        tr.remove()
    });

    let checkFavor = tr.querySelector(`#checkFavor`);

    checkFavor.addEventListener(`click`, async () => await changeItem(`/heroes/${objData.id}`, { favourite: checkFavor.checked }))
}

const createTable = async () => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    thead.append(renderTHs(dataTHs));
    table.append(thead);
    table.append(tbody);    
    body.append(table);
}
createTable();
//---------renderTable---------

const renderHeroes = async () => {
    let heroes = await getList(`/heroes`);
    heroes.forEach(item => renderTbody(item));
}
renderHeroes();

//---------form---------
const renderFormComics = async () => {
    let comics = await getList(`/universes`);

    selectComics.innerHTML = comics
        .map(element => `<option value="${element.name}">${element.name}</option>`)
        .join(``);
}
renderFormComics()

form.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    let heroes = await getList(`/heroes`)

    let newHero = {
        "name": nameHero.value,
        "comics": selectComics.value,
        "favourite": favourite.checked,
    }

    if (heroes.find(element => element.name === newHero.name)) {
        console.log(`${newHero.name} already exists`)
        return
    }

    let addHero = await addItem(`/heroes`, newHero)
    renderTbody(addHero)
})
//---------form---------

