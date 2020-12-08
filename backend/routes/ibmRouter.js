const express = require('express');
require('dotenv').config();

const router = express.Router();

const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const personalityInsights = new PersonalityInsightsV3({
  version: '{version}',
  authenticator: new IamAuthenticator({
    apikey: 'v0NlU-NxanvPSGaF-Dy9XmuT_7OAP3ahoJxpy3F_L0lY',
  }),
  serviceUrl: 'https://api.us-south.personality-insights.watson.cloud.ibm.com/instances/406c243e-5b13-4d34-810f-c33226482893',
});

const profileParams = {
    // Get the content from the JSON file.
    content: require('./profile.json'), //need to make json file of the profile
    contentType: 'application/json',
    consumptionPreferences: true,
    rawScores: true,
  };
  
  personalityInsights.profile(profileParams)
    .then(profile => {
      console.log(JSON.stringify(profile, null, 2)); // retrun this instead?? 
    })
    .catch(err => {
      console.log('error:', err);
    });

module.exports = router;