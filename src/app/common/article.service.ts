import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = this.getArticlesFromLocalStorage();

  constructor() {}

  createArticle(article: Article): void {
    this.articles.push(article);
    localStorage.setItem('articles', JSON.stringify(this.articles)); 
  }
  
  getArticlesFromLocalStorage(): Article[] {
    const stringData = localStorage.getItem('articles');
    return JSON.parse(stringData || '[]');
  }

  deleteArticle(article: Article): void {
    const index = this.articles.findIndex((a) => a.id === article.id);
    if (index > -1) {
      this.articles.splice(index, 1);
      localStorage.setItem('articles', JSON.stringify(this.articles)); 
    }
  }
}