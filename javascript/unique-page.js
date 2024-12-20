function getTableRows(data, columns) {

    let dataColumns = Object.keys(data[0]);

    const tableBody = document.querySelector('.tbl-rows');
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr>
                <td>${d[dataColumns[columns[0]]]}</td>
                <td>${d[dataColumns[columns[1]]]}</td>
                <td>
                    <button class="tbl-options-btn"></button>
                    <menu class="flex tbl-menu">
                        <a href="">Editar</a>
                        <a href="">Pedidos</a>
                        <a href="">Recibos</a>
                        <a href="">Crear pedido</a>
                    </menu>
                </td>
            </tr>
        `
    });

    tableBody.innerHTML = tags;
}

//Display options menu on tables
function displayTableMenu() {
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
            optionsMenuBtn.forEach(otherButton => {
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
}

function getSelectOptions(data, columns, elementId) {

    let dataColumns = Object.keys(data[0]);

    const selectOptions = document.querySelector(elementId);
    let tags = "";
    
    tags += `<option value="" selected>Seleccionar</option>`;

    data.map(d => {
        tags += `
            <option value="${d[dataColumns[columns[0]]]}">${d[dataColumns[columns[1]]]}</option>
        `
    });

    selectOptions.innerHTML = tags;
}

/*TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT*/

function loadPageAccordingToMenuOption(menuOption) {
    //get option object
    let menuObject = sideMenuOptions[menuOption];

    //assign page title
    const pageTitle = document.querySelector('#page-title');
    pageTitle.innerHTML = menuObject.name;

    //call function to load respective table
    getTableRows(menuObject.data, menuObject.columns);
    displayTableMenu();

    //assign href to new button
    let newButton = document.querySelector('#new-register');
    newButton.setAttribute('href', menuObject.newRegisterLink);
}

function setMenuOption(option) {
    localStorage.setItem('menuOptionGlobal', option);
}

let menuOptionGlobal = localStorage.getItem("menuOptionGlobal");
loadPageAccordingToMenuOption(menuOptionGlobal);