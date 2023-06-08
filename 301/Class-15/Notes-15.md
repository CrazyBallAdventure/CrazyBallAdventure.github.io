*This lesson is important because it is explaining the difference between authorization and authentication and what protocols help do that so we know how to secure information in our websites*

*What is OAuth*

What is OAuth?<br>
-OAuth is an open-standard authorization protocol/framework that safely allows authenticated users to access their assets without sharing logon credentials.

Give an example of what using OAuth would look like.<br>
-The user (Alice) wants to grant a third-party application access to her Google Calendar.
The application redirects Alice to Google's authorization endpoint, specifying its client ID and requested scope.
Alice logs in to her Google account and reviews the requested permissions.
Alice grants access, and Google redirects her back to the application with an authorization code.
The application exchanges the authorization code for an access token and possibly a refresh token.
With the access token, the application can access Alice's Google Calendar on her behalf.

How does OAuth work? What are the steps that it takes to authenticate the user?<br>
- The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
- The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
- The first site gives this token and secret to the initiating user’s client software.
- The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
- If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
- The user approves (or their software silently approves) a particular transaction type at the first website.
- The user is given an approved access token (notice it’s no longer a request token).
- The user gives the approved access token to the first website.
- The first website gives the access token to the second website as proof of authentication on behalf of the user.
- The second website lets the first website access their site on behalf of the user.
- The user sees a successfully completed transaction occurring.

What is OpenID?<br>
-OpenID is an authentication protocol that allows users to authenticate with multiple websites using a single set of credentials


*Authorization and Authentication flows*

What is the difference between authorization and authentication?<br>
-Authentication verifies the identity of a user or service, and authorization determines their access rights.

What is Authorization Code Flow?<br>
-[Auth Code Flow](https://cdn.discordapp.com/attachments/1099368891219710055/1116405858314752040/image.png)

What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?<br>
-PKCE is an extension to the OAuth authorization framework that adds an extra layer of security for mobile and native authorization code interception attacks

What is Implicit Flow with Form Post?<br>
-An authorization flow that is designed for client-side apps that cant securely store client secrets

What is Client Credentials Flow?<br>
-The Client Credentials Flow involves an application exchanging its application credentials, such as client ID and client secret, for an access token.

What is Device Authorization Flow?<br>
-This is when a device sends the user a link that allows them to authorize the device with the certain application, avoiding the need to enter text

What is Resource Owner Password Flow?<br>
-This is an authentication flow that allows a client app to directly authenticate w/ the authorization server using the client's credentials to send them an access token