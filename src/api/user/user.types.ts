
export type userInput = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    avatar?: string;
}

export type EditUserInput = Partial<userInput>;