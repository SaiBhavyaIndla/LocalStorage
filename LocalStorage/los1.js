function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;

    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}
function showNewUserOnScreen(obj){
    const parentItem = document.getElementById('listOfUsers')
    const childItem = document.createElement('li')
    childItem.textContent = obj.name + " - " + obj.email + " - " + obj.phonenumber;

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.email);
        parentItem.removeChild(childItem);
    }
    childItem.appendChild(deleteBtn);
    parentItem.appendChild(childItem);
}