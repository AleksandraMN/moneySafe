const API_URL = 'https://jade-lace-saxophone.glitch.me/api';

export const getData = async (url) => {
   try {
     const response = await fetch(`${API_URL}${url}`);
     console.log('response:', response);
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     return await response.json();
   } catch (error) {
     console.error("Ошибка при получении данных:", error);
     throw error;
   }
 };

 export const postData = async (url, data) => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log('response:', response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    throw error;
  }
};

