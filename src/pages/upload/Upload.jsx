import React, { useState } from 'react';
import styles from './Upload.module.scss'

const Upload = () => {
    const [file, setFile] = useState(null);
    const [avatar, setAvatar] = useState('');
    const avatarOptions = ['Avatar 1', 'Avatar 2', 'Avatar 3'];

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (file && avatar) {
            // Perform any file storage or additional actions here
            storeFile(file);
        } else {
            alert('Please select a file and an avatar before submitting.');
        }
    };

    const storeFile = (file) => {
        // Here, you can implement the logic to store the file (e.g., using an API call or other methods)
        // For simplicity, let's assume a public/pdf directory for storing the file
        const storagePath = `public/assets/${file.name}`;

        // Display a message to the user
        alert(`File stored at: ${storagePath}`);
        window.location.reload();

    };

    return (
        <div className={styles.form_style}>
            <h1 >Upload your<span>PPT/PDF</span></h1>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.inner_wrap}>
                    <label>
                        <input className={styles.file_input} type="file" accept=".pdf, .ppt, .pptx" onChange={handleFileChange} />
                    </label>
                    <label>
                        Choose Avatar:
                        <select value={avatar} onChange={handleAvatarChange}>
                        <option value="">Select Avatar</option>
                        {avatarOptions.map((option) => (
                            <option key={option} value={option}>
                            {option}
                            </option>
                        ))}
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Upload