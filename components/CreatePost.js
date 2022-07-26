import React, {useState} from "react";
import fire from "../config/fire-config";



// The form consists of two fields using 2 hooks title & content. React will listen for changes to the form fields, and save them into variables title and content with the help of useState().
// When we submit (handleSubmit) our form, we record both the form’s values into their corresponding hooks. We can use the hook’s variables to print out the form’s content. We are also resetting the title and content back to an empty string. This will make sure our form gets emptied on submit.
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notification, setNotification]= useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fire.firestore()
        .collection("blog")
        .add({
            title: title,
            content: content,
        });
        // console.log({
        //     "title": title,
        //     "content": content
        // });
        setTitle("");
        setContent("");
        setNotification("Blogpost created");
        setTimeout(() => {
            setNotification("")
        }, 2000)
    };

    return (
        <div>
            <h2>Add Blog</h2>

            {notification}

            <form onSubmit={handleSubmit}>
                <div>
                    Title <br />
                    <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
                </div>
                <div>Content <br />
                <textarea value={content}
                onChange={({target}) => setContent(target.value)} />
                </div>
                <button type="submit">Save </button>
            </form>
        </div>
    )
};

export default CreatePost;