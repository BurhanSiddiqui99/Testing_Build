var baseUrl = "https://jsonplaceholder.typicode.com/";

const configVariables = {
    baseUrl
}

const constantVariables = {
    TempUser: { name: "David Smith", email: "david@yopmail.com", pass: "asd123", userId: 12 }
}

export default {
    ...configVariables,
    ...constantVariables
}