import React from "react";
import { TaskInterface } from "./entity/Task";
import { Draggable } from "react-beautiful-dnd";

function TaskComponent(props: TaskInterface): JSX.Element {

    function sliceLongNotes(notes: string) {
        if (notes.length <= 200) {
            return notes;
        }

        return notes.slice(0, 200) + '[...]';
    }

    return (
        <Draggable draggableId={props.id} index={props.index} key={props.id}>
            {(provided) => (
                <section 
                    className="taskCards"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    <div style={taskCardStyle}>
                        <aside style={taskTopicStyle} className="taskCardTopic">
                            <span>Topic</span>
                        </aside>
                        <header style={taskHeaderStyle} className="taskCadHeader">
                            <h1 style={taskNameStyle} className="taskCardName">{props.name}</h1>
                            <span style={taskIdStyle} className="taskCardId">{props.id}</span>
                        </header>
                        <main>
                            {sliceLongNotes(props.notes)}
                        </main>
                    </div>
                </section>
            )}
        </Draggable>
    );
}

const taskCardStyle: React.CSSProperties = {
    position: "relative",
    border: "0.1px solid black",
    borderRadius: "10px",
    display: "flex",
    padding: "5px",
    maxHeight: "100%",
    margin: "5px 0px",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between"
}

const taskHeaderStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    margin: "0",
    justifyContent: "space-between"
}

const taskIdStyle: React.CSSProperties = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "end"
}

const taskNameStyle: React.CSSProperties = {
    flexGrow: 2, 
}

const taskTopicStyle: React.CSSProperties = {
    position: "absolute",
    alignSelf: "end",
    zIndex: "99999",
    right: "0%",
    margin: "6% 0",
    backgroundColor: "ghostwhite",
    padding: "0"
}


export default TaskComponent;