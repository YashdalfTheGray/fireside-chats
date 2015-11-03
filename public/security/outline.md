# Security and Encryption

## agenda
* Reducing the exposure area
* Encryption
* HTTPS and TLS/SSL
* Hashing

## Reducing the exposure area
* Physical Security - it's as simple as avoid giving access to the server room.
* Hardware security - "The USB drive in the parking lot"
* Software Security - confidentiality and authencity

## Confidentiality and Authenticity

Communication between two points can be called safe when both confidentiality and authencity can be verified. 

Confidentiality means that the real message was only seen by the two end points and no other party. 

Authenticity of the message certifies that the message gets to the correct recipient. 

## Some terms

*Plaintext* - Message that anyone can read.

*Ciphertext* - Message that has been encrypted and can only be decrypted by the right person. 

*Public Key* - A key that can be shared or hosted publically. It is used to encrypt the message that you're being sent. 

*Private Key* - A key that should NEVER be shared. It should be kept in a safe place. This is used to decrypt the message that was sent to you.

*Symmetric Key Cryptography* - A method where the same key is used to encrypt and decrypt the information. A password protected archive would be an example.

*Public Key Cryptography* - A method that uses different keys to encrypt and decrypt information. 

## Encryption

PGP or Pretty Good Privacy is a standard that uses symmetric-key and public-private cryptography to assure confidentiality and authencity of the message sent. 

OpenPGP.js is a javascript impelementation of PGP and offers three methods.

* `openpgp.generateKeyPair()` to generate a set of public and private keys.
* `openpgp.encryptMessage()` to encrypt strings, base64 or otherwise.
* `openpgp.decryptMessage()` to decrypt anything that has been encrypted.

## Encryption Workflow

1. Generate a public-private key pair for yourself.
2. Find someone that you want to contact (maybe make some friends while you're at it).
3. Get their public key.
4. Pass their public key and the message into `encryptMessage()`.
5. Send them the ciphertext. 
6. Your friend passes their private key and the ciphertext into `decryptMessage()`.
7. Your friend obtains your message in plaintext. 

## HTTPS and TLS/SSL

HTTPS or HTTP over TLS is a protocol that helps establish the identity of the server to a client. It uses symmetric cryptography to establish a secure channel and uses public key cryptography to establish the identity of the server.

TLS is the new standard, SSL is the old one. The HTTPS protocol commonly uses port 443 instead of port 80, which is the de facto standard for HTTP. 

To have an TLS compatible server, you need a certificate. A certificate can either be self signed (for testing only) or be signed by a CA. 

## Generating an SSL Cert



## Hashing