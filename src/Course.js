import DoneIcon from "./Assets/DoneIcon";
import TrashIcon from "./Assets/TrashIcon";

const Course = (props) => {
    return (
        <div className="taskBox">
            <h1 style={{ color: props.course.isFinished ? "green" : "black" }}>{props.course.courseNewName}</h1>
            <div className="groupIcon">
                <div className="TrashIcon" onClick={() => props.onDelete(props.course.id)}>
                    <TrashIcon />
                </div>
                <div className="DoneIcon" onClick={() => props.onComplete(props.course.id)}>
                    <DoneIcon />
                </div>
            </div>
        </div>
    );
};
export default Course;
