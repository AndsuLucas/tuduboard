import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import ColumnComponent from "./columns/ColumnComponent";
import mockData from "../MockData";
import { ColumnProps } from "./columns/ColumnComponent";
import { TaskInterface } from "../task/entity/Task";


class BoardComponent extends React.Component {

    protected todoProps: ColumnProps = mockData['to-do'];
    private doingProps: ColumnProps = mockData['doing'];
    private closedProps: ColumnProps = mockData['closed'];
    
    private end = (result: DropResult) => {
        const { destination, source, draggableId }  = result;

        if (!destination) {
            return;
        }

        const isSameDropable = destination.droppableId === source.droppableId;
        const isSameIndex = destination.index === source.index;

        if (isSameDropable && isSameIndex) {
            return;
        }

        const destinationColumn = [
            this.todoProps,
            this.doingProps,
            this.closedProps    
        ].filter((destinationColumn) => 
            destinationColumn.columnDroppableId.toString() === destination.droppableId
        );

        const destinationTasks = destinationColumn.length != 0 ?
            destinationColumn[0].tasks : undefined;

        if (!destinationTasks) {
            console.log('undefined');
            return;
        }

        
        if (isSameDropable) {
            const destinationTask = destinationTasks[destination.index];
            const sourceTask = destinationTasks[source.index];
            destinationTasks.splice(source.index, 1, destinationTask);
            destinationTasks.splice(destination.index, 1, sourceTask);
            return;
        }

        const sourceColumn = [
            this.todoProps,
            this.doingProps,
            this.closedProps    
        ].filter((destinationColumn) => 
            destinationColumn.columnDroppableId.toString() === source.droppableId
        );
        

        const sourceTasks = sourceColumn.length != 0 ?
            sourceColumn[0].tasks : undefined;

        if (!sourceTasks) {
            console.log('undefined');
            return;
        }

        const sourceTask = sourceTasks.splice(source.index, 1).pop();

        if (!sourceTask) {
            return;
        }
        destinationTasks.splice(destination.index, 0, sourceTask);

        console.log('sourceColumn', sourceColumn);
        console.log('tasks', destinationTasks);
        console.log('destination:', destination);
        console.log('draggableId:', draggableId);
        console.log('source', source);
        console.log('colum', destinationColumn);
    }

    render(): React.ReactNode {
        return (
            <section className="board" style={boardStyle}>
                <header>                
                    <h1>menu board</h1>
                </header>
                <main className="boardMainStyle" style={boardMainStyle}>
                    <DragDropContext onDragEnd={this.end}>
                        <ColumnComponent columnInfo={this.todoProps}/>
                        <ColumnComponent columnInfo={this.doingProps}/>
                        <ColumnComponent columnInfo={this.closedProps}/>
                    </DragDropContext>
                </main>
            </section>
        );       
    }    
}

const boardStyle: React.CSSProperties = {
    maxWidth: "100%",
}

const boardMainStyle: React.CSSProperties = {
    margin: "5px",
    paddingTop: "20px",
    display: "flex",
    height: "800px",
    justifyContent: "space-evenly"
}

export default BoardComponent;