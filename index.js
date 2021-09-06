"use strict";
var request = gapi.client.youtube.subscriptions.list({ 'part': 'snippet', 'mine': 'true' });
