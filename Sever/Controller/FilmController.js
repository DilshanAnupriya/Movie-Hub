const Film = require('../Model/FilmModel');

const CreateFilm = async (req, res) => {
    try{
        const createFilm = new Film(req.body);
        await createFilm.save();
        res.status(201).json({message:"success",data: createFilm});
    }catch (e) {
        res.status(500).json({message:"error"});
    }
};
const GetAllFilm = async (req, res) => {
    try {
        const { searchText = '', page = 1, size = 10 } = req.query

        const numericSearch = !isNaN(searchText) ? Number(searchText) : null;
        const lowerSearchText = searchText.toLowerCase();


        const filter =
            lowerSearchText !== 'ratings' && searchText
                ? {
                    $or: [
                        { title: { $regex: searchText, $options: 'i' } },
                        numericSearch !== null ? { year: numericSearch } : null,
                        { genres: { $regex: searchText, $options: 'i' } },
                        { language: { $regex: searchText, $options: 'i' } }
                    ].filter(Boolean)
                }
                : {};

        let sortBy = { year: -1 };
        if (lowerSearchText === 'ratings') {
            sortBy = { rating: -1 };
        }


        const All = await Film.find(filter)
            .sort(sortBy)
            .skip((page - 1) * size)
            .limit(parseInt(size));

        const count = await Film.countDocuments(filter);


        if (All.length === 0) {
            return res.status(404).json({ message: "No movies found matching the search criteria." });
        }

        res.status(200).json({ message: "success", data: All, count: count });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

};
const GetFilmById = async (req, res) => {
    try{
        const all = await Film.findById(req.params.id);
        if(!all){
            return res.status(404).json({message:"Not Found"});
        }
        res.status(200).json({message:"success",data:all});
    }catch (e) {
        res.status(500).json({message:"error"});
    }
};
const UpdateFilm = async (req, res) => {
    try{
        const updated =  await Film.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if(!updated){
            return res.status(404).json({message:"Not Found"});
        }
        res.status(200).json({message:"success",data:updated});
    }catch (e) {
        res.status(500).json({message:"error"});
    }
};
const DeleteFilm = async (req, res) => {
    try{
        const deleted = await Film.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({message:"Not Found"});
        }
        res.status(200).json({message:"success",data:deleted});
    }catch (e) {
        res.status(500).json({message:"error"});
    }
};
module.exports = {
    CreateFilm,GetAllFilm,GetFilmById,UpdateFilm,DeleteFilm
}