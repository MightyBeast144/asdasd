       const user = {
            name: "Neo",
            age: 17,
            profession: "Dishwasher",
            hobbies: ["Coding", "Gaming", "Reading", "Washing Dishes"]
        };

        function displayUserInfo() {
            const userInfo = document.getElementById("userInfo");
            userInfo.innerHTML = `Name: ${user.name}, Age: ${user.age}, Profession: ${user.profession}, Hobbies: ${user.hobbies.join(", ")}`;
        }

        function changeBackgroundColor() {
            const body = document.body;
            body.style.backgroundColor = body.style.backgroundColor === 'var(--bg-color)' ? '#333333' : 'var(--bg-color)';
        }