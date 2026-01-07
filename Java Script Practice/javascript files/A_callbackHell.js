const studentDetails = () => {
  console.log("Student Info");
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4];
    console.log(rollNo);
    setTimeout(
      (rollNum) => {
        let biodata = {
          name: "Naidu",
          age: 22,
        };
        console.log(
          `Name : ${biodata.name} \nage : ${biodata.age}\nRoll No : ${rollNum}`
        );
      },
      2000,
      rollNo[1]
    );
  }, 2000);
};
studentDetails();
