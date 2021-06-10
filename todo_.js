var cnt = 1;
var button = document.getElementById('insertButton');
var input = document.getElementById('insertInput');
var list = document.getElementById('schedule_table');

button.addEventListener('click', added);

function added(){
    var temp = document.createElement('li');
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button class='btn' onclick='remove("+cnt+")'>delete</button>";
    temp.innerHTML += "<button class "
    list.appendChild(temp);
    cnt++;
    document.getElementById(li+cnt).appendChile(temp);
    temp.onclick = function(){
        modify(input.value);
    }
}

function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

function modify(spot) {
    var value = prompt("Modify", "What is your list?");
    /* 수정하는 글에 어떠한 내용도 넣지않는다면 기존의 글 유지 */
    if (value) {
        document.getElementById(spot).innerHTML = value;
    }
}