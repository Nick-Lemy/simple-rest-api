const users = []

export const createUser = (name, email) => {
    try {
        const newUser = { id: users.length + 1, name, email }
        users.push(newUser)
        return newUser
    } catch (error) {
        console.error(`Error while creating user: ${error}`)
    }
}

export const getUser = (id) => {
    try {
        const user = users.find(usr => usr.id === Number(id))
        if (!user) throw new Erro('User Not Found!')
        return user
    } catch (error) {
        console.error(`Error while getting a user: ${error}`)
    }
}

export const getAllUser = () => {
    try {
        return users
    } catch (error) {
        console.error(`Error while getting all users: ${error}`)
    }
}
