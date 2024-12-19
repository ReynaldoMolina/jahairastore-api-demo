let myProviders = [
    {
        'id_proveedor': 1,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 2,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 3,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 4,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 5,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 6,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 7,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 8,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 9,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    },
    {
        'id_proveedor': 10,
        'nombre_empresa': 'Jahaira Store',
        'nombre_contacto': 'Carlos Berrios',
        'telefono': '+505-1234-5678',
        'municipio': 'Managua',
        'departamento': 'Managua',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 500 al guindo'
    }
];

//const searchClientInput = document.querySelector('#search-bar-clients');

function getTableRows(data) {
    //const column = Object.keys(myClients[0]);
    const tableBody = document.querySelector('.tbl-providers-rows');
    console.log(tableBody);
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr>
                <td>${d.id_proveedor}</td>
                <td>${d.nombre_empresa}</td>
                <td>
                    <button class="tbl-options-btn"></button>
                    <menu class="flex tbl-menu">
                        <a href="">Editar</a>
                        <a href="">Compras</a>
                        <a href="">Gastos</a>
                        <a href="">Crear compra</a>
                    </menu>
                </td>
            </tr>
        `
    });

    tableBody.innerHTML = tags;
}

getTableRows(myProviders);

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