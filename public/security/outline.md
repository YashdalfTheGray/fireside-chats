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
* Security by obscurity is not security, it's stupid.
* Most security issues are going to be [layer 8](https://en.wikipedia.org/wiki/Layer_8) issues, you have to make sure that the other layers are fit to handle them. 

## Confidentiality and Authenticity

Communication between two points can be called safe when both confidentiality and authencity can be verified. 

Confidentiality means that the real message was only seen by the two end points and no other party. 

Authenticity of the message certifies that the message gets to the correct recipient and it's the message that the sender wanted to send. 

## Some terms

*Plaintext* - Message that anyone can read.

*Ciphertext* - Message that has been encrypted and can only be decrypted by the right person. 

*Salt* - A randomly generated string of characters used to add variability. 

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

OpenSSL(http://www.openssl.org/) is a TLS/SSL toolkit that can be used to help with enabling TLS on a website. The process is simple, generate a key, generate a certificate (you need to provide details about your domain, location, etc.) and then sign the certificate with the key. The key and the certificate can then be passed to the server to serve out with the HTTPS request. 

## Certificate Authorities

Signing the certificate yourself is *only* good for development purposes or getting the job done until you get a signed certificate back from a Certificate Authority. A Certificate Authority is a recognized organization that can vouch for the security of your website or web app. 

The Linux Foundation, EFF, Mozilla, Cisco and Akamai got together and created the first free, automated CA called [Let's Encrypt](https://letsencrypt.org/) this past July and it is currently in limited beta. They are looking be fully up and running very soon. 

## Hashing

Hashing is the process of mapping data of an arbitrary size to data of fixed size. Hashing is a one-way operation unlike encryption and will vary widely when small changes are made to the input data. This is used to certify the authencity of the message. 

If you've ever downloaded a file and have seen an md5 or an sha1 field with a large alphanumeric string, that's the hash. It certified that the bits in the original data and your copy match provides the hashes match. It is a quicker way of verifying the integrity of the message. 