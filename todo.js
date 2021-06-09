function app() {
    // CRUD
    // 삽입, 검색, 수정, 삭제
    return {
        schedule: new Array, // 스케줄 리스트
        add = this.schedule.push,
        // add: function (title) { // add(추가)
        //     this.schedule.push(title);
        // },
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

let target = document.querySelector("#title").value;

program.add(target);
program.delete(target);
program.search(target);
program.modify(target, "ABC");

