import { config } from 'dotenv';
import { PushyService } from './PushyService';

config(); // Load environment variables

const pushyService = new PushyService(process.env.PUSHY_API_KEY!);

// Function to generate a random message
function getRandomMessage(): string {
	const messages = [
		'Hello World!',
		'Greetings from Pushy!',
		'Have a great day!',
		'Notification: You have a new message.',
		'Alert: Check out our latest updates.'
	];
	// Randomly select a message
	return messages[Math.floor(Math.random() * messages.length)];
}

const data = { message: getRandomMessage() };
// Ideally, this should come from database
const to = process.env.DEVICE_TOKEN!;

pushyService.sendNotification(data, to, {})
	.then(id => console.log(`Push sent successfully! ID: ${id}`))
	.catch(err => console.error(`Error: ${err.message}`));
