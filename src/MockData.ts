import { Task } from "./task/entity/Task"
import { uid } from "uid";
const mockData =  {
    'to-do': { 
        columnDroppableId: 'todo',
        columnName: 'To-do',
        tasks: [
            new Task(0, uid(), "first task", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat leo nulla, non placerat metus lobortis vitae. Donec sit amet dui risus. Quisque imperdiet lacus non tortor eleifend congue. Aenean vel maximus eros. Proin dictum eu velit quis vehicula. Proin lacinia nisi sit amet ante elementum egestas. Nunc vel lectus purus. In lobortis felis nisl, a dictum velit finibus ut. Donec consequat nulla lorem, eget pretium nisl suscipit id. Fusce justo diam, rhoncus non nisl id, tincidunt volutpat eros. Cras nec justo sapien.", "to-do"),
            new Task(1, uid(), "second task", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat leo nulla, non placerat metus lobortis vitae. Donec sit amet dui risus. Quisque imperdiet lacus non tortor eleifend congue. Aenean vel maximus eros. Proin dictum eu velit quis vehicula. Proin lacinia nisi sit amet ante elementum egestas. Nunc vel lectus purus. In lobortis felis nisl, a dictum velit finibus ut. Donec consequat nulla lorem, eget pretium nisl suscipit id. Fusce justo diam, rhoncus non nisl id, tincidunt volutpat eros. Cras nec justo sapien.", "to-do")
        ]
    },
    'doing': { 
        columnDroppableId: 'doing',
        columnName: 'Doing',
        tasks: [
            new Task(2, uid(), "third task", "Lorem ipsum", "to-do"),
            new Task(3, uid(), "fourth task", "Lorem ipsum do.", "to-do")
        ]
    },
    'closed': { 
        columnDroppableId: 'closed',
        columnName: 'Closed',
        tasks: []
    }
}

export default mockData;