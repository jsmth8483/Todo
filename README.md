# Todo

## Description

This is a to-do list web app. User can add, check off and remove tasks.

## Technologies

This project was created using:

- HTML
- CSS
- Vanilla Javascript

## Skills Learned:

Some of the skills I picked up through the development of this app:

- ES6 Getters and Setters
- Use of CSS variables

## Issues During Development

- With my initial implementation of the TodoList class, I was saving the todos in an array and also creating a Todo object with it. This made it harder to keep the array in sync with the DOM todo list items. I ultimately decided to not use an array to store the todos in the TodoList as it was not necessary. All operations on Todos is done from the Todo objects themselves to separate the Todo item functionality from the TodoList functionality.
