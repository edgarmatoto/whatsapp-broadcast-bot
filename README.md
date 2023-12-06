# WhatsApp Broadcast Bot

## Overview

This is a simple WhatsApp Broadcast / Sender Bot that allows users to automatically broadcast WhatsApp messages to multiple phone numbers simultaneously. It uses NodeJS and the `whatsapp-web.js` free open source library for Whatsapp Client. Don't worry, each message have a certain delay to avoid bot detection.

## Prerequisites

- **NodeJS**: Install NodeJS on your system.
- **Image File**: Insert an image file named with `image.jpeg`
- **Phone Numbers List**: List of phone numbers in a file named `phones.txt` (each number on a separate line)
- **Message**: Message content in a file named `message.txt`

## Setup

1. Clone this repository.
2. **Installation**: Install necessary dependencies by running `npm install` in the project directory.
3. **Configuration**: Create the 3 required files to include contact numbers (**phones.txt**), the message to be sent (**message.txt**), and the media image (**image.jpeg**). See Important Notes below

## Running
- Run `npm run start`
- Scan the QR code
- Don't close the WhatsApp Web window until you see that the last message was sent.

## Important Notes
- Ensure that your phone numbers are in the correct format with your country code (e.g., 62XXXXXXXX, without any '+', '-', or spaces).

- Ensure that your phones.txt files written with numbers on a separate line.
  e.g.
  ```
  6281234567890
  6282345678901
  ```
