import dotenv from 'dotenv';
import MailosaurClient from 'mailosaur';
dotenv.config();

export const serverId = process.env.mailosaurServerId;
export const domain = process.env.mailosaurDomain;

const apiKey = process.env.mailosaurApiKey || process.env.MAILOSAUR_API_KEY;
const missingKeyMessage = "Mailosaur API key is not set. Please set 'mailosaurApiKey' in your .env or 'MAILOSAUR_API_KEY' in the environment.";
const missingKeyError = () => {
	throw new Error(missingKeyMessage);
};

export const mailosaur = apiKey
	? new MailosaurClient(apiKey)
	: ({ messages: { create: missingKeyError, get: missingKeyError, deleteAll: missingKeyError, reply: missingKeyError } } as unknown as MailosaurClient);
