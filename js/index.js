/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
  
     var apiKey = "44682012";
     var sessionId = "2_MX40NDY4MjAxMn5-U2F0IE1hciAwOCAxMDo0ODoxMSBQU1QgMjAxNH4wLjQ1NDc2OTk3fg";
     var token = "T1==cGFydG5lcl9pZD00NDY4MjAxMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz00NTMzZDI0ZGU3MWU1NzcyN2FiYzk0MTY3ZDYyNzkzZjk4YTMwMzUxOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9Ml9NWDQwTkRZNE1qQXhNbjUtVTJGMElFMWhjaUF3T0NBeE1EbzBPRG94TVNCUVUxUWdNakF4Tkg0d0xqUTFORGMyT1RrM2ZnJmNyZWF0ZV90aW1lPTEzOTQzMDQ0OTEmbm9uY2U9MC44NDkyNDE2NTIwODM5NTMzJmV4cGlyZV90aW1lPTEzOTQzOTA4OTEmY29ubmVjdGlvbl9kYXRhPQ==";

    $.get("https://opentokrtc.com/cordova.json", function( data ){
      var publisher = TB.initPublisher(data.apiKey,'myPublisherDiv');

      var session = TB.initSession( data.sid ); 
      session.on({
        'sessionConnected': function( event ){
          session.publish( publisher );
        },
        'streamCreated': function( event ){
            var div = document.createElement('div');
            div.setAttribute('id', 'stream' + event.stream.streamId);
            document.body.appendChild(div);
            session.subscribe( event.stream, div.id, {subscribeToAudio: false} );
        }
      });
      session.connect( apiKey, token );
    });
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
  }
};
