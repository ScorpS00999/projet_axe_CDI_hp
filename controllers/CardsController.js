import prisma from "../config/prisma.js";

class CardsController {
    //app.get
    async index(req, res) {
        try {
            const id_user = parseInt(req.params.id);
            const cards = await prisma.cartes.findMany({
                where: { userId: id_user },
            });
            return res.status(200).send(cards);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.post
    async store(req, res) {
        try {
            const body = req.body;
            await prisma.cartes.create({ data: body });
            const cards = await prisma.cartes.findMany();
            return res.status(201).send(cards);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }

    //app.delete /:id
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            //const user = users.find((element) => element.id === parseInt(id));
            const carte = await prisma.cartes.findUnique({ where: { id: id } });
            if (carte === null) {
                return res.status(404).send("User not found");
            }
            await prisma.cartes.delete({ where: { id: id } });

            const cartes = await prisma.cartes.findMany();
            return res.status(200).send(cartes);
        } catch (e) {
            return res.status(500).send({ message: e.message });
        }
    }
}

export default new CardsController();
