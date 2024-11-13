import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {
article: Article = {
  id: '',
  name: '',
  price: '',
  contact: '',
  stock: '',
};

articleService: ArticleService = inject(ArticleService);

articles!: Article[];

ngOnInit() {
  this.articles = this.articleService.getArticlesFromLocalStorage()
}


createArticle(article: Article) {
this.articleService.createArticle(article);
this.articles = this.articleService.getArticlesFromLocalStorage();
this.resetArticleForm();
}


deleteArticle(article: Article) {
  this.articleService.deleteArticle(article);
  this.articles = this.articleService.getArticlesFromLocalStorage();
}


  private resetArticleForm() { 
  this.article = {
    id: '',
    name: '',
    price: '',
    contact: '',
    stock: '',
  };
 }
}