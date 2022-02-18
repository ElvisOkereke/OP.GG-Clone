import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const infoSchema = new Schema({

    summonerName: { 
        type: String,   
        required: true
    },
    rank: { 
        type: String,
        rankIcon: String,
    },
    PlayedChamps:{ 
        type: [String],
        winrate: String,
        champName: String, 
        kda: String,
    },
    games: [String],
    iconFile:{ 
        type: String,
        required: true,
    },

});

const SummonerInfo = mongoose.model('SummonerInfo', infoSchema);

export default SummonerInfo;