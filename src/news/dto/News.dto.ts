import uuid = require('uuid');
export class NewPost {
  readonly id: string;
  readonly ownerId: string = uuid.v4();
  readonly title: string;
  readonly descripton?: string;
}
