'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CompaniesSchema = new mongoose.Schema({
  address_address: String,
  address_city: String,
  address_state: String,
  contact_email: String,
  contact_fname: String,
  contact_lname: String,
  contact_phone: String,
  contact_title: String,
  departments: String,
  fax: String,
  isHot: Boolean,
  name: String,
  nates: String,
  owner: String,
  phone1: String,
  phone2: String,
  socialmedia: String,
  website: String,
  active: Boolean
});

export default mongoose.model('Companies', CompaniesSchema);
