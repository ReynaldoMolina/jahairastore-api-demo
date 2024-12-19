let myProducts = [
    {
        'id_producto': 1,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 2,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 3,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 4,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 5,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 6,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 7,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 8,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 9,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    },
    {
        'id_producto': 10,
        'id_shein': '12345678',
        'id_proveedor': 1,
        'id_categoria': 1,
        'nombre_producto': 'Camisa VCAY no se que',
        'fecha_agregado': '1/11/2024',
        'precio_compra': 10,
        'precio venta': 20
    }
];

//const searchClientInput = document.querySelector('#search-bar-clients');

function getTableRows(data) {
    //const column = Object.keys(myClients[0]);
    const tableBody = document.querySelector('.tbl-products-rows');
    console.log(tableBody);
    let tags = "";
    
    data.map(d => {
        tags += `
            <tr>
                <td>${d.id_producto}</td>
                <td>${d.nombre_producto}</td>
                <td>
                    <button class="tbl-options-btn"></button>
                    <menu class="flex tbl-menu">
                        <a href="">Editar</a>
                        <a href="">Revisar</a>
                    </menu>
                </td>
            </tr>
        `
    });

    tableBody.innerHTML = tags;
}

getTableRows(myProducts);

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