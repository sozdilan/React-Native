import {observable, action, makeObservable, autorun,reaction,when} from "mobx";
class MainStore{
    @observable name="DilanSöz";
    constructor() {
        makeObservable(this);
        /*autorun(()=>{
            alert(this.name);
        })*/

        /*reaction(()=>this.name,name =>{
            if(name=="X"){
                alert("değişiklik görüldü");
            }
        })*/

        /*when(()=>this.name=="X",()=>alert("değişiklik var"))*/
    }

    @action getName(){
        return this.name;
    }

    @action setName(value){
         this.name=value;
    }
}
export default new MainStore();