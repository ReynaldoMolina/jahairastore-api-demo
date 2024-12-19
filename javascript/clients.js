let myClients = [
    {
        'id': 1,
        'nombre': 'Juancho Rupertos',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 2,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 3,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 4,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 5,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 6,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 7,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 8,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 9,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 10,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
    {
        'id': 11,
        'nombre': 'Juancho',
        'apellido': 'Perez Perez',
        'telefono': '+505-1234-5678',
        'municipio': 'Leon',
        'departamento': 'Leon',
        'pais': 'Nicaragua',
        'direccion': 'Del tamarindo 5 al guindo'
    },
];

//const searchClientInput = document.querySelector('#search-bar-clients');

function getTableRows(data) {
    //const column = Object.keys(myClients[0]);
    const tableBody = document.querySelector('.tbl-clients-rows');
    console.log(tableBody);
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr>
                <td>${d.id}</td>
                <td>${d.nombre + " " + d.apellido}</td>
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

getTableRows(myClients);

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