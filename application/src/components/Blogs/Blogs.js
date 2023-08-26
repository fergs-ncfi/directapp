import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 20px;
`;

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const BlogCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  color: #FFF;
  font-size: 20px;
  margin-bottom: 10px;
`;

const BlogContent = styled.p`
  color: #666666;
`;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the latest blogs using Axios
    axios
      .get('https://insights.integrity360.com/what-are-the-different-types-of-hacker') // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to fetch the blogs.
      .then((response) => {
        setBlogs(response.data); // Assuming the API response returns an array of blog objects.
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  return (
    <BlogContainer id="Blogs" color='white'>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs</h1>
      <h1>Latest Blogs10</h1>
      <BlogWrapper>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>64532
            <BlogTitle>{blog.title}</BlogTitle>tyrgefd
            <BlogContent>{blog.content}</BlogContent>oiumytnbgrvfecwtsh
          </BlogCard>
        ))}
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blogs;
