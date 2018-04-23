import Controller from '@ember/controller';
import { match, gte, and, not } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  messageContent: '',
  headerMessage: "Contact Us",

  emailValid: match('emailAddress', /^.+@.+\..+$/),
  messageValid: match('messageContent', /(?!^ +$)^.+$/),
  lengthValid: gte('messageContent.length',5),
  allVerified: and('messageValid', 'emailValid', 'lengthValid'),
  isDisabled: not('allVerified'),

  actions: {

    sendMessage() {
      alert(`Email: ${this.get('emailAddress')}\nMessage: ${this.get('messageContent')}`);
      this.set('responseMessage', `Thank you! We've received your message!`);
      this.set('emailAddress', '');
      this.set('messageContent', '');
    }
  }

});
