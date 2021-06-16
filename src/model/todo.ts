class Todo {
     id:number; 
     name:String;


    constructor(name:String) {
        this.name=name;
        this.id=Math.random()
    }
}
export default Todo;