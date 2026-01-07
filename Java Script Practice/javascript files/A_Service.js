// //api calling with async await
// const getDetails = async () => {
//   //Request data gathering logic
//   let userid = document.getElementById("userid").value;
//   let para = document.getElementById("simple");
//   let result = document.getElementById("sample");
//   para.style.display = "block";
//   //validation logic
//   if (userid == "") {
//     alert("please enter userid");
//     return;
//   }
//   //Business logic
//   try {
//     const [userresult, postresult] = await Promise.all([
//       fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
//       fetch(`https://jsonplaceholder.typicode.com/posts${userid}`),
//     ]);
//     const userData = await userresult.json();
//     const postdata = await postresult.json();
//     console.log(postdata);
//     result.innerHTML = `
//     <h2>${userData.name}</h2>
//     <p>${userData.email}</p>`;
//     <h2>posts:</h2>
//     <ul>
//       ${postdata.map((item) => <li>${item.title}</li>)}
//     </ul>
//     ;

//   } catch (error) {
//     result.innerHTML = "<h3>Something went Wrong....</h3>";
//   }
// };
const getDetails = async () => {
  let userid = document.getElementById("userid").value;
  let result = document.getElementById("sample");

  if (userid === "") {
    alert("Please enter userid");
    return;
  }

  try {
    const [userresult, postresult] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userid}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`),
    ]);

    const userData = await userresult.json();
    const postdata = await postresult.json();

    let postsHTML = postdata.map((item) => `<li>${item.title}</li>`).join("");

    result.innerHTML = `
      <h2>${userData.name}</h2>
      <p>${userData.email}</p>
      <h3>Posts:</h3>
      <ul>${postsHTML}</ul>
    `;
  } catch (error) {
    result.innerHTML = "<h3>Something went wrong...</h3>";
  }
};
