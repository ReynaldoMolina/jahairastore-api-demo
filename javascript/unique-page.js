function loadPageAccordingToMenuOption(menuOption) {
    //get option object from object-data
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

let menuOptionGlobal = localStorage.getItem("menuOptionGlobal");
loadPageAccordingToMenuOption(menuOptionGlobal);