import React, {useState, useRef} from "react";
import { StyledForm, FormInput, FormButton } from "./styled"
import {useDispatch} from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

    const Form = () => {
        const [newTaskContent, setNewTaskContent] = useState("")
        const inputRef = useRef(null);

        const dispatch = useDispatch();

        const onFormSubmit = (event) => {
            event.preventDefault();

            const trimmedNewTaskContent = newTaskContent.trim();
            
            if (!trimmedNewTaskContent){
                return;
            }

            dispatch(addTask({
                content: trimmedNewTaskContent,
                done: false,
                id:nanoid(),
            }));

            setNewTaskContent("");
            inputRef.current.focus();
        };

        return (
            <StyledForm onSubmit={onFormSubmit}>
                <FormInput
                    ref={inputRef}
                    value={newTaskContent}
                    placeholder="Co jest do zrobienia?"
                    onChange={({target}) => setNewTaskContent(target.value)}
                />

                <FormButton>
                    Dodaj zadanie
                </FormButton>
            </StyledForm>
        );
    };

export default Form;