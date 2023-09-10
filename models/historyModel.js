import mongoose, { Mongoose } from "mongoose";

const historySchema=new mongoose.Schema(
    {

        expression:{
            type:String,
        },
    },
    {
        timestamps:true
    }
);

const Expression=mongoose.model('Expression',historySchema);
export default Expression;