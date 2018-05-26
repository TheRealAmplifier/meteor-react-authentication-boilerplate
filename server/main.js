import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {


  Accounts.validateNewUser((user) => {
    const email = user.emails[0].email;

    try {
      const userData = new SimpleSchema({
        email: {
          type:     String,
          regEx:    SimpleSchema.RegEx.EmailWithTLD
        },
      });
      userData.validate({
        email:      email
      });
    } catch (error) {
      throw new Meteor.Error(400, error.message);
    }

    return true;
  });
});
