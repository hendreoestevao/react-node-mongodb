const Annotations = require('../models/AnnotationsData');
const { update } = require('./PriorityController');

module.exports = {

    async update(req, res){
        const { id } = req.params;
        const {  notes } = req.body;

        const annotation = await Annotations.findOne({ _id: id});

        if(notes ){
            annotation.notes = notes;

            await annotation.save();

        }

        return  res.json(annotation);
    }

}