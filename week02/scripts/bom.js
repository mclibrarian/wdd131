
const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        list.append(li);
        li.append(deleteButton);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        })

        input.focus();
        input.value = '';
    }
})