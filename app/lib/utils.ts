const baseUrl = 'http://localhost:3000/api';

export const fetcher = async (url: string, options: RequestInit) => {
  try {
    const request = new Request(`${baseUrl}${url}`, options);
    const response = await fetch(request);
    if (!response.ok) {
      const { statusText, status } = response;
      console.log(status, statusText);
      throw new Error('Network response was not OK');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
