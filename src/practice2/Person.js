// TODO feedback: 文件里只需导出一个模块，推荐用export default
export class Person {
    constructor(name) {
        this.name = name;
        this.move = this.move.bind(this);
    }

    move() {
        console.log(`${this.name} is moving`)
    }
}
