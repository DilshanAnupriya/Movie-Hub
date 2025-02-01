const SearchHistory = require('../Model/SearchHistoryModel');
const Film = require('../Model/FilmModel');

const logSearch = async (req, res) => {
    try {
        const { searchText = '' } = req.query;

        const search = searchText;
        const movie = await Film.findOne({ title: {$regex:search,$options:'i'} });

        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        let log = await SearchHistory.findOne({ title: {$regex:search,$options:'i'} });

        if (!log) {
            log = new SearchHistory({
                title: search,
                searchCount: 1,
                latestCountAt: Date.now()
            });
        } else {
            log.searchCount += 1;
            log.latestCountAt = Date.now();
        }

        await log.save();
        return res.status(200).json({ message: "Search logged successfully", data: log });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


const trendingList = async (req, res) => {
    try {
        const list = await SearchHistory.find().sort({ searchCount: -1 }).limit(5);
        res.status(200).json({ message: "Success", data: list });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

module.exports = { logSearch, trendingList };
