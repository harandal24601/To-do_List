function app() {
    // CRUD
    // 삽입, 검색, 수정, 삭제
    return {
        schedule: new Array, // 스케줄 리스트
        add: function (title) { // add(추가)
            if (!this.schedule)
                this.schedule = new Array;

            this.schedule.push(title);
        },
        __str__: (obj) => {
            let response = "";
            
            for (let i = 0; i < obj.schedule.length; i++) {
                response += '<tr class="partition">';
                response += '<td class = "name">' + obj.schedule[i] + '</td>';
                response += '<td><button onclick="app.update(' + obj.schedule[i] + ')">Edit</button></td>';
                response += '<td><button onclick="program.delete(' + obj.schedule[i] + ')">Delete</button></td>';
                response += '</tr>';
                response += i < obj.schedule.length - 1 ? '\n' : '';
            }

            return response;
        },
        delete :  function (title) { // delete(삭제)
            let value = this.search(title);
            if (value >= 0)
                this.schedule.splice(value, 1);
        },
        search: function (title) { // search(검색)
            // let search_input = document.getElementsByName("search_input")[0];
            // let key;

            // for (key = 0; key < this.schedule.length && !this.schedule[key].includes(title); key++);

            // return key == this.schedule.length ? -1 : key;
            var value, name, item, i;

            value = document.getElementById("value").search_value.toUpperCase();
            item = this.schedule;

            for(i=0; i<item.length; i++){
                name = item[i].getElementsByClassName("item");
                if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
                    item[i].getElementsByClassName.display = "flex";
                }else{
                    item[i].style.display = "none";
                }
            }
        },
        update: function (old_title, new_title) { // upload(수정)
            let value = this.search(old_title);
            if (value >= 0)
                this.schedule[value] = new_title;
        }
    };
}

function filter() {
    var search, name, item, i;

            search = document.getElementById("search").value.toUpperCase();
            item = document.getElementsByClassName("partition");

            for(i=0; i<item.length; i++){
                name = item[i].getElementsByClassName("name");
                if(name[0].toUpperCase().indexOf(search) = -1){
                    item[i].style.display = "none";
                }else{
                    item[i].style.display = "flex";
                }
            }
}

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

let program = new app();

// program.add(target);
// program.delete(target);
// program.search(search);
// program.modify(target, "ABC");

// 이벤트 추가
// document.querySelector("#search_button").onclick = () => { // 검색 버튼 클릭 이벤트
//     let search_input = document.getElementsByName("search_input")[0];
//     let search_value = search_input.value;
    
    
// };

document.querySelector("#insertButton").onclick = () => { // 추가 버튼 클릭 이벤트
    let insertInput = document.getElementsByName("insertInput")[0];
    let insertValue = insertInput.value;

    program.add(insertValue);

    document.querySelector("ul#schedule_table").innerHTML = program.__str__(program);
};

document.querySelector("#insertButton").onclick = () => { // 추가 버튼 클릭 이벤트
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var editValue = el.value;

      if (editValue) {
        // Edit value
        self.editValue.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
};
