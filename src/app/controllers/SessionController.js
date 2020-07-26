import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, '84b129dfcfa883b38bab81b44f40bba8', {
                expiresIn: '7d',
            }),
        });
    }
}

export default new SessionController();
