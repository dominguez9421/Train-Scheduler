# Train-Scheduler
create a train schedule application that incorporates Firebase to host arrival and departure data. Your app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.


Issues 

I was using firebase analytics link to link to firebase and it would not allow me to save information to my server. 
i have put the second form on a container however, it is still not centered. 
removed analytics script and finally connecting to firebase 
firebase is not storing any of my data or retrieving it to find out the next train schedule. 

console log retrieves this message 

logger.ts:84 [2019-10-21T02:24:27.561Z]  @firebase/database: FIREBASE WARNING: set at /-Lrg7IyQoBF6wqJqCg1n failed: permission_denied 
W @ logger.ts:84
t.warn @ logger.ts:152
nt @ util.ts:174
(anonymous) @ Repo.ts:373
(anonymous) @ PersistentConnection.ts:556
l.onDataMessage_ @ PersistentConnection.ts:591
t.onDataMessage_ @ Connection.ts:317
t.onPrimaryMessageReceived_ @ Connection.ts:309
(anonymous) @ Connection.ts:205
i.appendFrame_ @ WebSocketConnection.ts:276
i.handleIncomingFrame @ WebSocketConnection.ts:329
mySock.onmessage @ WebSocketConnection.ts:196
Repo.ts:697 Uncaught (in promise) Error: PERMISSION_DENIED: Permission denied
    at Repo.ts:697
    at _t (util.ts:586)
    at t.callOnCompleteCallback (Repo.ts:689)
    at Repo.ts:381
    at PersistentConnection.ts:556
    at l.onDataMessage_ (PersistentConnection.ts:591)
    at t.onDataMessage_ (Connection.ts:317)
    at t.onPrimaryMessageReceived_ (Connection.ts:309)
    at i.onMessage (Connection.ts:205)
    at i.appendFrame_ (WebSocketConnection.ts:276)

    
i need to find out what is wrong with my connection to firebase. 