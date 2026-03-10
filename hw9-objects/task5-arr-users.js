function createUser(name, email, age) {
    return {name, email, age};
}

const users = [createUser("Alex", "alex@ex1.com", 30),
    createUser("Boris", "boris@ex2.com", 25),
    createUser("Marina", "marina@ex3.com", 35)];

for (const [i, {name, email, age}] of users.entries()) { 
    console.log(`User ${i+1}: ${name}, email: ${email}, age: ${age}`);
}   
