import uuid = require('uuid');
import { IsOptional, IsString } from 'class-validator';

export class NewPost {
  @IsOptional()
  @IsString()
  id?: string;

  ownerId: string = uuid.v4();
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  description?: string;
}
