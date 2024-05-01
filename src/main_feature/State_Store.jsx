import axios from 'axios'
import { create } from 'zustand'


export const The_Chosen_User = create((set) => ({
  id: 0,
  updateId: (newId) => set({ id: newId }),
}))

export const Post_Data = create((set) => ({
  listPost: [],
  fetchPost: async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      set({ listPost: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
  deletePost: async (id) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      set({ listPost: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
    deletePostRekayasa: (id) => {
        set((...prevState) => ({
            listPost: prevState.filter((post) => post.id !== id)
        }));
    }
}));
