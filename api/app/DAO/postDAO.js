'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from 'lodash';

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
    url: { type: String },
    content: { type: String }
  },
  {
    collection: 'post'
  }
);
postSchema.plugin(uniqueValidator);

export const PostModel = mongoose.model('post', postSchema);

export const query = async () => {
  const result = await PostModel.find({});

  if (result) {
    return mongoConverter(result);
  }
};

export const get = async id => {
  return PostModel.findOne({ _id: id }).then(function(result) {
    if (result) {
      return mongoConverter(result);
    }
  });
};

export const search = async content => {
  try{
    const result = await PostModel.find(content);

    return mongoConverter(result);
  }catch(error){
    console.log(error);
  }
}

export const createNewOrUpdate = async data => {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new PostModel(data).save().then(result => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), { new: true });
    }
  });
};
