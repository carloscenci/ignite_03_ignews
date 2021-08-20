import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Carlos' },
        { id: 2, name: 'Rosy' },
        { id: 3, name: 'Aline' },
        { id: 4, name: 'João' }
    ]

    return response.json(users)
}