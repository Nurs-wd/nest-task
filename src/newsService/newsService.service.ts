import { Injectable } from '@nestjs/common';
import { NewPost } from '../news/dto/News.dto';
import { UpdateNews } from '../news/dto/UpdateNews.dto';

@Injectable()
export class NewsService {
  private news = [
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

  getNews() {
    return this.news;
  }

  getWithId(id: string): string | object {
    return this.news.find((post) => post.id === id);
  }

  newPost(newPost: NewPost) {
    return this.news.push({
      id: this.hashing(newPost.title),
      title: newPost.title,
      description: newPost.descripton,
      ownerId: newPost.ownerId,
    });
  }

  deleteNews(id: string) {
    return this.news.filter((i) => i.id != id);
  }

  update(updateNews: UpdateNews, id: string) {
    return this.news.map((el) =>
      el.id === id
        ? {
            id: updateNews.id,
            title: updateNews.title,
            description: updateNews.descripton,
            ownerId: updateNews.ownerId,
          }
        : el,
    );
  }
}
