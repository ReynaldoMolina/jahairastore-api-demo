let myCategories = [
    {
        'id_categoria': 1,
        'nombre_categoria': 'Shein',
    },
    {
        'id_categoria': 2,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 3,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 4,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 5,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 6,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 7,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 8,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 9,
        'nombre_categoria': 'Shein',
    },    {
        'id_categoria': 10,
        'nombre_categoria': 'Shein',
    }
];

//const searchClientInput = document.querySelector('#search-bar-clients');

function getTableRows(data) {
    //const column = Object.keys(myClients[0]);
    const tableBody = document.querySelector('.tbl-categories-rows');
    console.log(tableBody);
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr>
                <td>${d.id_categoria}</td>
                <td>${d.nombre_categoria}</td>
                <td>
                    <button class="tbl-options-btn"></button>
                    <menu class="flex tbl-menu">
                        <a href="">Editar</a>
                    </menu>
                </td>
            </tr>
        `
    });

    tableBody.innerHTML = tags;
}

getTableRows(myCategories);

const optionsMenuBtn = document.querySelectorAll('.tbl-options-btn');

optionsMenuBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        const menu = button.nextElementSibling;
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';

        //Position the menu
        const buttonRect = button.getBoundingClientRect();
        menu.style.left = buttonRect.right - 250 + "px";
        menu.style.top = buttonRect.top + "px";

        //Close other open menus
        optionButtons.forEach(otherButton => {
            if(otherButton !== button){
                otherButton.nextElementSibling.style.display = 'none';
            }
        })
    });
});

//Close menus when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.tbl-options-btn')) {
        const menus = document.querySelectorAll('.tbl-menu');
        menus.forEach(menu => {
            menu.style.display = 'none';
        });
    }
});