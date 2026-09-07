const req = {
    feature:"login",
    descriptiom:"A user should be able to login using email and pwd"
    ,priority:"high"
}
const prompt = `
You are a QA tester with 2 years of experience
generate test cases for the following features:

feature :${req.feature}
description :${req.descriptiom}
priority :${req.priority}
`

console.log(prompt)