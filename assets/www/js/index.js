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
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {

        // Getting OpenTokRTC's room's credentials. 
        // To use your own room in opentokrtc, change cordova to room of your choice
        //   -> ie: https://opentokrtc.com/myroom.json
        // To use your own credentials
        //  replace data.apiKey, data.sid, and data.token with your own 
        var apiKey = "44682012";
        var sessionId = "2_MX40NDY4MjAxMn5-TW9uIE1hciAzMSAxMzowNjozOCBQRFQgMjAxNH4wLjYzMzcwNTh-";
        var token = "T1==cGFydG5lcl9pZD00NDY4MjAxMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz1jMTg3Y2YzYjAxOTM5MDc5ZGY4YzRiZmE1YjAwNmJjYzlhOWE5ZDFhOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9Ml9NWDQwTkRZNE1qQXhNbjUtVFc5dUlFMWhjaUF6TVNBeE16b3dOam96T0NCUVJGUWdNakF4Tkg0d0xqWXpNemN3TlRoLSZjcmVhdGVfdGltZT0xMzk2Mjk2NDAwJm5vbmNlPTAuNTY3MDI3Nzc2ODEzNDI3JmV4cGlyZV90aW1lPTEzOTYzODI4MDAmY29ubmVjdGlvbl9kYXRhPQ==";

        // Very simple OpenTok Code
        var publisher = TB.initPublisher(apiKey, 'myPublisherDiv');

        var session = TB.initSession(sessionId);
        session.on({
            'sessionConnected': function (event) {
                session.publish(publisher);
            },
            'streamCreated': function (event) {
                var div = document.createElement('div');
                div.setAttribute('id', 'stream' + event.stream.streamId);
                document.body.appendChild(div);
                session.subscribe(event.stream, div.id, { subscribeToAudio: false });
            }
        });
        session.connect(apiKey, token);

    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
    }
};