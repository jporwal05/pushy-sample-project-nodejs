import Pushy from 'pushy';

export class PushyService {
	private pushyAPI: Pushy;

	constructor(apiKey: string) {
		this.pushyAPI = new Pushy(apiKey);
	}

	public async sendNotification(data: object, to: string, options: object): Promise<string> {
		return new Promise((resolve, reject) => {
			this.pushyAPI.sendPushNotification(data, to, options, (err, id) => {
				if (err) {
					reject(err);
				} else {
					resolve(id.id);
				}
			});
		});
	}
}
