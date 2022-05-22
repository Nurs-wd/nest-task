import uuid = require('uuid');
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateNews {
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  description?: string;
  ownerId: string = uuid.v4();
  @IsOptional()
  @IsString()
  id?: string;
}
