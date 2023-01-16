# MongoDB Auth Example

# Miten asentaa?

## 1.

Avaa terminaali (cmd) ja kirjoita `cd Desktop`

## 2.

kirjoita `git clone https://github.com/NabsiYa/mongodb-auth-example.git` ja paina enter.

## 3.

kirjoita `cd mongodb-auth-example`.

## 4.

Seuraavaksi kirjoita `npm install` ja paina enter.

## 5.

Käynnistä sovellus kirjoittamalla `node src/index.js`.

# Käyttö

Sovellus on simppeli REST API... joten jos haluat tehdä käyttäjän teet HTTP request browserissa osoitteseen `http://127.0.0.1:6969/register` argumenteilla username ja password ja verify_password joten loppu request on `http://127.0.0.1:6969/register?username=user&password=1234&verify_password=1234` ja kirjautuminen on sama asia mutta ota pois verify_password eli `http://127.0.0.1:6969/login?username=user&password=1234`