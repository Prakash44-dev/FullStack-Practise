//api calling with async and await
const postInfo = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
postInfo();
