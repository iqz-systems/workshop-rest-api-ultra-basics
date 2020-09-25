# REST APIs

0. APIs and HTTP
1. What are REST APIs?
2. HTTP basics and REST
3. How to build REST APIs?
4. How to test REST APIs?
5. Consuming REST APIs for usage.
6. Utilizing REST to build a quick app.

## API

API = Application Programming Interface

calc

calc add 1 2
3

import calc
a,b,c

sum = calc(a,b)
sum = calc(sum,c)

## HTTP

HTTP = Hyper Text Transfer Protocol
URL = Uniform Resource Locator
URI = Uniform Resource Identifier

URLs and URL components

    0-65535
    0 - 1024 -> RESERVED
    
    
    http://3.basecamp.com:80/3146629/buckets/15315386/chats/2339229492?id=12&name=rajs

    protocol -> https ://
            -> ftp://
            -> rtmp://
    port -> 443
    origin/domain/hostname -> 3.basecamp.com
    path: -> /3146629/buckets/15315386/chats/2339229492
    query params -> id = 12, name = rajs


A record -> x.x.x.x -> iqzsystems.com

https://iqzsystems.com

https://careersiqz.com   -> cost and availability
https://iqzsystems.com/careers -> 
https://careers.iqzsystems.com

## REST APIs

REST = REpresentational State Transfer

REST Method
   - GET        -> Read operations
   - POST       -> Creating a new resource/To put something in the server
   - OPTIONS    -> Returns metadata
   - PUT        -> To put a resource in the server
   - PATCH      -> To update a resource in the server
   - DELETE     -> To delete something in the server

idempotency -> 

https://members.iqzsystems.com/users

-> I want to get all users in IQZ:
    GET https://members.iqzsystems.com/users
-> I want to create a new user in IQZ:
    POST https://members.iqzsystems.com/users -> { name: 'Rajshri', gender: 'M' }
-> I want to update the profile picture of a user:
    PUT https://members.iqzsystems.com/users/12/profilePicture
-> I want to update the name of the user:
    PATCH https://members.iqzsystems.com/users/12 -> { name: 'RajshriMohan' }
-> I want to delete the user Rajshri:
    DELETE https://members.iqzsystems.com/users/12


MIME Type -> Multipurpose Internet Mail Extensions

-> 