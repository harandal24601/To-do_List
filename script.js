//추가기능
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 0; 

button.addEventListener('click', clickButton);

function clickButton() {
    var ul_elem = document.createElement('ul');
    var li_elem = document.createElement('li');

    ul_elem.setAttribute('class', 'item');
    ul_elem.setAttribute('id', 'list');
    ul_elem.setAttribute('id', 'ul' + cnt);

    li_elem.setAttribute('class', 'list-group-item');
    li_elem.innerHTML = input.value;

    ul_elem.appendChild(li_elem);

    list.appendChild(ul_elem);

    cnt++;
}

//검색기능

function filter() {
    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for (i = 0; i < item.length; i++) {
        name = item[i].getElementsByClassName("list-group-item");
        if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
            item[i].style.display = "inline";
        } else {
            item[i].style.display = "none";
        }
    }
}