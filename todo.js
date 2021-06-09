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

            console.log(obj);
            
            for (let i = 0; i < obj.schedule.length; i++) {
                response += "<li>" + obj.schedule[i] + "</li>";
                response += i < obj.schedule.length - 1 ? '\n' : '';
            }

            return response;
        },
        delete: function (title) { // delete(삭제)
            let value = this.search(title);
            if (value >= 0)
                this.schedule.splice(value, 1);
        },
        search: function (title) { // search(검색)
            let key;

            for (key = 0; key < this.schedule.length && !this.schedule[key].includes(title); key++);

            return key == this.schedule.length ? -1 : key;
        },
        modify: function (old_title, new_title) { // modify(수정)
            let value = this.search(old_title);
            if (value >= 0)
                this.schedule[value] = new_title;
        }
    };
}

let program = new app();

// program.add(target);
// program.delete(target);
// program.search(search);
// program.modify(target, "ABC");

// 이벤트 추가
document.querySelector("#search_button").onclick = () => { // 검색 버튼 클릭 이벤트
    let search_input = document.getElementsByName("search_input")[0];
    let search_value = search_input.value;

    
};

document.querySelector("#insert_button").onclick = () => { // 추가 버튼 클릭 이벤트
    let insert_input = document.getElementsByName("insert_input")[0];
    let insert_value = insert_input.value;

    program.add(insert_value);

    console.log(program);
    console.log(program.schedule);

    document.querySelector("ul#schedule_table").innerHTML = program.__str__(program);
};