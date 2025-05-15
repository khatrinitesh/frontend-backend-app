const BASE_URL = 'http://localhost:3000';

export async function fetchComments(limit = 5) {
    try {
      const response = await fetch(`${BASE_URL}/api/comments`);
      const data = await response.json();
      return data.slice(0, limit);
    } catch (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
  }