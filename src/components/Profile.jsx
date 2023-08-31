import { useState, useEffect } from 'react';

const Profile = ({authToken}) => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPosts = async() => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FSA-ET-WEB-FT/posts', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            });

            const result = await response.json();
            console.log(result.data.posts[0].messages);
            if(result.success) {
                setPosts(result.data.posts);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    
    const handleViewPost = (postId) => {
        const selected = posts.find(post => post._id === postId);
        setSelectedPost(selected);
    };

    return (
        <>
           
    </>

    
); 
};

export default Profile;