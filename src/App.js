import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
    const [courseName, setCourseName] = useState("");
    const [courseList, setCourseList] = useState([]);

    const addItemHandler = () => {
        const course = {
            courseNewName: courseName,
            id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
            isFinished: false,
        };
        setCourseList([...courseList, course]);
    };

    const deleteHandler = (courseId) => {
        setCourseList(courseList.filter((item) => item.id !== courseId));
    };

    const completeHandler = (courseId) => {
        const newCourseList = courseList.map((item) => {
            if (courseId === item.id) {
                return { ...item, isFinished: !item.isFinished };
            } else return item;
        });
        setCourseList(newCourseList);
    };

    return (
        <div className="Container">
            <h1>To Do-List App</h1>
            <div className="InputItem">
                <input
                    className="Input"
                    type="text"
                    placeholder="Enter your Course Name"
                    onChange={(e) => setCourseName(e.target.value)}
                />
                <button className="AddBtn" onClick={addItemHandler}>
                    Add Item
                </button>
            </div>

            <div className="taskWrapper">
                {courseList.map((item, i) => {
                    return (
                        <>
                            <Course key={i} course={item} onDelete={deleteHandler} onComplete={completeHandler} />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
