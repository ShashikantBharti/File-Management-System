# File Management System

A simple file management system built with **Node.js** and **Express** that allows users to create, edit, view, and delete text files. The system leverages the **file system (fs)** module for file operations and uses **EJS** as the templating engine for rendering views.

## Features

- **List All Files**: Display all files from the `./files` directory.
- **Create New File**: Users can create a new text file by specifying a title and description.
- **View File Content**: Users can click on any file to view its content.
- **Edit File**: Modify the content of a file or rename the file.
- **Delete File**: Remove a file from the directory.
- **Basic Frontend**: The project uses **EJS** for rendering views and has basic HTML/CSS for form and list views.

## Technologies Used

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript)
- **File System (fs)** module
- **HTML/CSS**

## Project Setup

### Prerequisites

Make sure you have **Node.js** installed on your machine. You can download and install it from the [official Node.js website](https://nodejs.org).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/file-management-system.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd file-management-system
   ```

3. **Install The Dependencies**:

   ```bash
   npm i
   or
   npm install
   ```

4. **Start the server**:

   ```bash
   npm run dev
   ```

## File Structure

```bash
file-management-system/
├── app.js
├── files/
│   └── (Text files are created here)
├── views/
│   ├── index.ejs
│   ├── details.ejs
│   ├── edit.ejs
├── public/
│   └── (Static assets such as CSS)
├── package.json
└── README.md

```
