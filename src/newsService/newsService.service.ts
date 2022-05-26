import { Injectable } from '@nestjs/common';
import { NewPost } from '../news/dto/News.dto';
import { UpdateNews } from '../news/dto/UpdateNews.dto';

export interface INews {
  description?: string;
  id?: string;
  title: string;
  ownerId: string;
}

@Injectable()
export class NewsService {
  private news: INews[] = [
    {
      id: 'f8e8b4cc-a279-493f-b8c1-ae1e0de5758e',
      title: 'Название новости',
      description: 'Описание новости',
      ownerId: '8fcc0e4a-8595-4221-80dd-2e35f6315ebf',
    },
    {
      id: '123',
      title: 'Название новости',
      description: 'Описание новости',
      ownerId: '123',
    },
  ];

  private hashing(str): string {
    let hash = 0;
    let char;
    if (str.length == 0) return `${hash}`;
    for (let i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return `${hash}`;
  }

  findAll(): INews[] {
    return this.news;
  }

  findById(id: string): object | null {
    return this.news.find((post) => post.id === id);
  }

  create(newPost: NewPost): UpdateNews {
    const post = {
      id: this.hashing(newPost.title),
      title: newPost.title,
      description: newPost.description,
      ownerId: newPost.ownerId,
    };
    this.news.push(post);
    return post;
  }

  delete(id: string): void | null {
    let index;
    for (let i; i <= this.news; i++) {
      if (i.id === id) {
        index = i;
      }
    }
    this.news.splice(index, 1);
  }

  update(updateNews: UpdateNews, id: string): INews | null {
    this.news.forEach((el) => {
      if (el.id === id) {
        el.id = id;
        el.title = updateNews.title;
        el.description = updateNews.description;
        el.ownerId = updateNews.ownerId;
      }
    });
    return this.news.find((el) => el.id === id);
  }
}
