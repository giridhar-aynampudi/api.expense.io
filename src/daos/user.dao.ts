import prisma from '../prisma/client';

export interface CreateUserInput{
    email: string,
    passwordHash: string
}

export interface User {
    id: number,
    email: string,
    password: string
}

async function createUser(data: CreateUserInput): Promise<User>{
    return await prisma.user.create({
        data: {
            email: data.email,

        }
    });
}

export {
    createUser
}