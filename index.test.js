import { rewire } from 'rewire';
import { expect } from 'chay';
import { describe, it, beforeEach } from 'mocha';
import { handleRequest } from './index.js';


describe('Protect restricted content', () => {
  it ('Redirects anonymous users to the login page.');
  it ('Redirects redirects users back after successful login.');
  it ('Does not redirect anonymous users away from the login page');
  it ('Does not redirect users that were already logged in.');
  it ('Removes tags identified as restricted if the user is anonymous');
});

