import axios from 'axios';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import '../Component/card.css';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask, Statuses } from '../store/getAllTaskSlice';

const UpdateTodo = () => {
  const dispatch = useDispatch();
  const { data: task, status } = useSelector((state) => state.allTask);

  useEffect(() => {
    if (status === Statuses.LOADING) {
      return (
        <div class="ms-4 my-4 spinner-border text-primary" role="status">
        </div>
      )
    }
    dispatch(getAllTask());
  }, []);

  const DeleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/task/${id}`);
    dispatch(getAllTask());
  };

  return (
    <div className="container">
      <h2 className="my-4">Edit Tasks</h2>
      <div className="main-box">
        {
        task && task.length > 0 ? (
          task.map((task, index) => (
            <div className="main-div shadow me-4 my-4" key={index}>
              <div className="card-div">
                <h2 className="main-head my-2">Task: {index + 1}</h2>

                <div className="box">
                  <h3 className="head-text">Title: </h3>
                  <p className="detial-text"> {task.title} </p>
                </div>

                <div className="box">
                  <h3 className="head-text">Detail: </h3>
                  <p className="detial-text">{task.detail}</p>
                </div>

                <div className="my-3 d-flex justify-content-start">
                  <div className="button-container">
                    <Link exact to={`editTodo/${task.id}`}>
                      <Button className="btn1 me-4" variant="primary">
                        Update
                      </Button>
                    </Link>
                    <Button
                      className="btn2"
                      variant="danger"
                      onClick={() => DeleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='d-flex justify-content-center align-item-center display-2'>No tasks available</p>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default UpdateTodo;
