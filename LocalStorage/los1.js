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

    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        document.querySelector('input[type="text"]').value  = obj.name;
        document.querySelector('input[type="email"]').value  = obj.email;
        document.querySelector('input[type="tel"]').value  = obj.phonenumber;
        localStorage.removeItem(obj.email);
        parentItem.removeChild(childItem);

    }
    
    childItem.appendChild(deleteBtn);
    childItem.appendChild(editBtn);
    parentItem.appendChild(childItem);
}