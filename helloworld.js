async function test(){
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 3000)
    })

    console.log('Hello World')
}

// async function test() {
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
//   console.log('Hello, World!');
// }


test()