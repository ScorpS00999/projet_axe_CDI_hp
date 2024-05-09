import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/bcrypt.js";

class UsersController {
    async getMyProfil(req, res) {
        const user = req.user;
        return res.status(200).send(user);
    }

    //app.get
    async index(req, res) {
        try {
            const users = await prisma.user.findMany();
            return res.status(200).send(users);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.post
    async store(req, res) {
        try {
            const body = req.body;
            body.password = await hashPassword(body.password);
            await prisma.user.create({ data: body });
            const users = await prisma.user.findMany();
            return res.status(201).send(users);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.get /:id
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const user = await prisma.user.findUnique({ where: { id: id } });
            //const user = users.find((element) => element.id === parseInt(id));

            if (user === null) {
                return res.status(404).send("User not found");
            }

            return res.status(200).send(user);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.put /:id
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;
            //let user = users.find((element) => element.id === parseInt(id)); //le truc element marche comme le foreach

            let user = await prisma.user.findUnique({ where: { id: id } }); //ou const à la place de let
            if (user === null) {
                return res.status(404).send("User not found");
            }

            await prisma.user.update({ where: { id: id }, data: body });

            const users = await prisma.user.findMany();
            return res.send(users);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.delete /:id
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            //const user = users.find((element) => element.id === parseInt(id));
            const user = await prisma.user.findUnique({ where: { id: id } });
            if (user === null) {
                return res.status(404).send("User not found");
            }
            await prisma.user.delete({ where: { id: id } });

            const users = await prisma.user.findMany();
            return res.status(200).send(users);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }
}

export default new UsersController();
