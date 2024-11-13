import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticlesFromLocalStorage(): Article[] {
    const stringData = localStorage.getItem('articles');
    return JSON.parse(stringData || '[]');
  }

  saveArticlesToLocalStorage(articles: Article[]): void {
    localStorage.setItem('articles', JSON.stringify(articles));
  }

  addArticle(article: Article, articles: Article[]): Article[] {
    articles.push(article);
    this.saveArticlesToLocalStorage(articles);
    return [...articles];
  }

  deleteArticle(article: Article, articles: Article[]): Article[] {
    const index = articles.findIndex((x) => x.id === article.id);
    if (index !== -1) {
      articles.splice(index, 1);
      this.saveArticlesToLocalStorage(articles);
        }
        return [...articles];
  }

}
