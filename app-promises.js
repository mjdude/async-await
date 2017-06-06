const users = [
    {
        id: 1,
        name: 'Mo',
        schoolId: 101
    },
    {
        id: 2,
        name: 'Aisha',
        schoolId: 909
    }
]
const grades = [
    {
        id: 1,
        schoolId: 101,
        grade: 86
    },
    {
        id: 2,
        schoolId: 909,
        grade: 100
    },
    {
        id: 3,
        schoolId: 101,
        grade: 80
    }
]

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id)

        if(user){
            resolve(user)
        } else {
            reject(`Unable to find user with id ${id}`)
        }
    })
}

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId))       
    })
}

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser
        return getGrades(user.schoolId).then((grades) => {
            let average = 0;
            // average
            if(grades.length > 0) {
                average = grades.map((grade) => grade.grade)
                            .reduce((a,b) => a + b) / grades.length
            }
            return `${user.name} has an average of ${average}%`;
            console.log(average)
            // return string
        })
    })

}


// getUser(1)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// getGrades(909).then((res) => console.log(res))

getStatus(4).then((res) => console.log(res)).catch((err) => console.log(err))