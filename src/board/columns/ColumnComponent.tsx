import React from "react";
import { TaskInterface } from "../../task/entity/Task";
import TaskComponent from "../../task/TaskComponent";
import { StrictModeDroppable } from "../../StrictModeDroppable";

export type ColumnProps = {
    tasks: Array<TaskInterface>,
    columnDroppableId: string,
    columnName: String
}

class ColumnComponent extends React.Component<{columnInfo: ColumnProps}> {

    private columnInfo: ColumnProps = this.props.columnInfo;

    private renderTasks(): React.ReactNode {
        const { tasks } = this.columnInfo;

        return tasks.map((task, index) => 
            <TaskComponent 
                name={task.name}
                id={task.id}
                notes={task.notes} 
                status={"to-do"} index={index}
                key={task.id}
            />
        );
    }

    render(): React.ReactNode {
        const {columnDroppableId, columnName} = this.columnInfo;

        return (
            <StrictModeDroppable droppableId={`${columnDroppableId}`}>
                {provided => (
                    <div style={boardColumnStyle} {...provided.droppableProps} ref={provided.innerRef}>
                        <div>
                            <h1>{columnName}</h1>
                        </div>
                        {this.renderTasks()}
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        );
    }
}

const boardColumnStyle: React.CSSProperties = {
    border: "1px solid green",
    borderRadius: "5px",
    flexGrow: 1,
    maxWidth: "30%",
    display: "flex",
    flexDirection: "column",
    padding: "5px"
}

export default ColumnComponent;