import { Library } from "../models/library-model.js";
import { OccupancyLog } from "../models/occupancyLog-model.js";

export default {
    create: async (data) => {
        const exist = await Library.findOne({name: data.name});
        if (exist) throw new AppError(400, "library with this name already exists");

        const createdLibrary = await Library.create(data);

        return createdLibrary;
    },

    getAll: async () => {
        const canteens = await Canteen.find();

        return canteens;
    },


}