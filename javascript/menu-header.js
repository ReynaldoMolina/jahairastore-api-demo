/*Init side menu and header*/
class SideMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="flex flx-col side-menu">

                <!--Logo-->
                <h1 class="flex flx-center sidebar-logo">Menu</h1> 

                <!--Menu options-->
                <menu class="flex flx-col flx-center side-menu-options">

                    <a href="/html/home.html" class="flex flx-center side-menu-opt">
                        <img src="/assets/icons/menu-home.png" alt="Home">
                        Home
                    </a>

                    <!--Divider-->
                    <div class="side-menu-divider"></div>

                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(0)">
                        <img src="/assets/icons/menu-clients.png" alt="Clientes">
                        Clientes
                    </a>
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(1)">
                        <img src="/assets/icons/menu-orders.png" alt="Pedidos">
                        Pedidos
                    </a>
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(2)">
                        <img src="/assets/icons/menu-receipts.png" alt="Recibos">
                        Recibos
                    </a>

                    <!--Divider-->
                    <div class="side-menu-divider"></div>
                    
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(3)">
                        <img src="/assets/icons/menu-providers.png" alt="Proveedores">
                        Proveedores
                    </a>
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(4)">
                        <img src="/assets/icons/menu-purchases.png" alt="Compras">
                        Compras
                    </a>
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(5)">
                        <img src="/assets/icons/menu-expenses.png" alt="Gastos">
                        Gastos
                    </a>

                    <!--Divider-->
                    <div class="side-menu-divider"></div>

                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(6)">
                        <img src="/assets/icons/menu-products.png" alt="Productos">
                        Productos
                    </a>
                    <a href="/html/object-table.html" class="flex flx-center side-menu-opt" onclick="setMenuOption(7)">
                        <img src="/assets/icons/menu-categories.png" alt="Categorías">
                        Categorías
                    </a>
                    <a href="/html/finances.html" class="flex flx-center side-menu-opt">
                        <img src="/assets/icons/menu-finances.png" alt="Finanzas">
                        Finanzas
                    </a>
                    
                    <!--Divider-->
                    <div class="side-menu-divider"></div>

                    <a href="/html/settings.html" class="flex flx-center side-menu-opt">
                        <img src="/assets/icons/menu-settings.png" alt="Configuración">
                        Configuración
                    </a>
                    <a href="/index.html" class="flex flx-center side-menu-opt">
                        <img src="/assets/icons/menu-logout.png" alt="Cerrar sesión">
                        Cerrar sesión
                    </a>
                </menu>
            </section>
        `
    }
}

class StoreHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="flex flx-center header">
                <img src="/assets/icons/header-menu.png" alt="Menu" id="menu-button">
                <h1>Jahaira Store</h1>
                <img src="/assets/icons/store-logo-icon-sm.png" alt="Foto usuario">
            </header>
        `
    }
}

customElements.define('side-menu', SideMenu);
customElements.define('store-header', StoreHeader);

//Side menu
const menuToggle = document.querySelector('#menu-button');
const sideMenu = document.querySelector('.side-menu');
const invisibleDiv = document.querySelector('.div-menu-close');
const windowWidth = window.innerWidth;
const minScreenWidth = 500;

menuToggle.addEventListener('click', toggleSideMenu);
invisibleDiv.addEventListener('click', toggleSideMenu);

function toggleSideMenu() {
    sideMenu.classList.toggle('hidden');
    if (windowWidth <= minScreenWidth) {
        invisibleDiv.classList.toggle('hidden');
    }
}

function startMenu() {
    if (windowWidth > minScreenWidth) {
        invisibleDiv.classList.toggle('hidden');
    }
    if (windowWidth <= minScreenWidth) {
        sideMenu.classList.toggle('hidden');
        invisibleDiv.classList.toggle('hidden');
    }
}

startMenu();