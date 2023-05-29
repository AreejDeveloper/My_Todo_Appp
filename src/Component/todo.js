import React from 'react';
import "./Todo.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskDetail, setTaskTitle } from '../store/addTaskSlice';

const Todo = () => {

    const { title, detail } = useSelector((state) => state.taskDetail);
    const dispatch = useDispatch();

    const onSubmitForm = async (event) => {
        event.preventDefault();
        if (title === "") {
            alert("Task must contain its title...");
            return;
        }
        if (detail === "") {
            alert("Task must contain its details...");
            return;
        }
        const taskData =
        {
            title: title,
            detail: detail
        };
        console.log(taskData);
        try {
            await axios.post("http://localhost:5000/task", taskData);
            alert("Task saved successfully!");
        }
        catch (error) {
            console.error("Error saving task:", error);
            alert("Error occurred while saving the task. Please try again.");
        }

    };

    return (
        <div className='container size shadow'>
            <h1 className='heading my-4'>To-Do List</h1>
            <div className='container my-4 center-main'>
                <div className='center'>
                    <Form onSubmit={(event)=>onSubmitForm(event)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="my-2">Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your task title here..."
                                name="title"
                                value={title}
                                onChange={(event) => dispatch(setTaskTitle(event.target.value))}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Detail</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task details here..."
                                name="detail"
                                value={detail}
                                onChange={(event) => dispatch(setTaskDetail(event.target.value))}
                            />
                        </Form.Group>
                        <Button
                            className='my-3 btn'
                            variant="primary"
                            type="submit"
                        >
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Todo;
