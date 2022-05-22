import uuid = require('uuid');
export class UpdateNews {
  readonly title: string;
  readonly descripton?: string;
  readonly ownerId: string = uuid.v4();
  id: string;
}