import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
// Modèle de donnée d'un article et initialisation du modèle de donnée
article: Article = {
  id: '',
  name: '',
  price: '',
  contact: '',
  stock: '',
};
// Liste des articles disponibles
articles!: Article[];

//Injection du service
constructor(private articleService: ArticleService){}


ngOnInit() {
  // Récupération des articles à partir du local storage
  this.articles = this.articleService.getArticlesFromLocalStorage()
}

//Création d'un nouvel article et ajout au tableau
createArticle(article: Article) {
  // Ajout de l'article à la liste des articles
  this.articles = this.articleService.addArticle(article, this.articles);
  this.resetArticleForm();
}

//Suppression d'un article via le service
deleteArticle(article: Article) {
  this.articles = this.articleService.deleteArticle(article, this.articles);
}

  // Réinitialisation du formulaire de création d'article
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

